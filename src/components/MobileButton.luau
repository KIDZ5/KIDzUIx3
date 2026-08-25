-- KIDzUIx3 - Optional MobileButton component
-- This component is completely opt-in:
-- nothing is created and no existing UI behavior changes until Window:MobileButton(...) is called.

return function(self, properties)
	--// Imports
	local creator = require("@modules/creator")
	local binder = require("@modules/binder")
	local services = require("@modules/services")

	--// References
	local create = creator.Create
	local userInputService = services.UserInputService

	--// Validate Window context
	if not self or self.Type ~= "Window" or not self.Structures or not self.Structures.Body then
		error("MobileButton must be created from a KIDzUIx3 Window", 2)
	end

	local windowBody = self.Structures.Body.__instance
	local screenGui = windowBody and windowBody:FindFirstAncestorOfClass("ScreenGui")

	if not screenGui then
		error("MobileButton could not find the KIDzUIx3 ScreenGui", 2)
	end

	-- Only keep one MobileButton per Window.
	-- Calling Window:MobileButton(...) again replaces the previous one.
	if self.Structures.MobileButton then
		pcall(function()
			self.Structures.MobileButton:Destroy()
		end)
		self.Structures.MobileButton = nil
	end

	--// Properties
	properties = properties or {}
	properties.Image = properties.Image or ""
	properties.Size = properties.Size or UDim2.fromOffset(56, 56)
	properties.Position = properties.Position or UDim2.fromScale(0.88, 0.5)
	properties.Visible = properties.Visible ~= false
	properties.DragEnabled = properties.DragEnabled ~= false
	properties.DragThreshold = math.max(0, tonumber(properties.DragThreshold) or 6)

	--// UI
	local structures = {}

	structures.Body = binder.Apply(
		properties,
		create("ImageButton")({
			Name = "MobileButton",
			AnchorPoint = Vector2.new(0.5, 0.5),
			AutoButtonColor = false,
			Active = true,
			BackgroundTransparency = 1,
			BorderSizePixel = 0,
			Image = properties.Image,
			Position = properties.Position,
			ScaleType = Enum.ScaleType.Fit,
			Size = properties.Size,
			Visible = properties.Visible,
			ZIndex = 1000,
			Parent = screenGui,
		})
	) :: ImageButton

	local object = binder.Wrap(properties, {}, structures.Body)
	object.Type = "MobileButton"
	object.Theme = self.Theme
	object.Structures = structures
	object.Window = self

	self.Structures.MobileButton = structures.Body

	--// Dragging
	local dragging = false
	local dragInput = nil
	local dragStart = nil
	local startPosition = nil
	local movedEnough = false
	local suppressActivateUntil = 0
	local endConnection = nil
	local globalInputConnection = nil
	local windowDestroyConnection = nil

	local function finishDrag()
		if not dragging then
			return
		end

		dragging = false

		if movedEnough then
			suppressActivateUntil = os.clock() + 0.15

			if type(properties.PositionChanged) == "function" then
				task.spawn(properties.PositionChanged, structures.Body.Position)
			end
		end
	end

	structures.Body.InputBegan:Connect(function(input)
		if not properties.DragEnabled then
			return
		end

		if
			input.UserInputType ~= Enum.UserInputType.MouseButton1
			and input.UserInputType ~= Enum.UserInputType.Touch
		then
			return
		end

		dragging = true
		dragStart = input.Position
		startPosition = structures.Body.Position
		movedEnough = false

		if endConnection then
			endConnection:Disconnect()
			endConnection = nil
		end

		endConnection = input.Changed:Connect(function()
			if input.UserInputState == Enum.UserInputState.End then
				finishDrag()
			end
		end)
	end)

	structures.Body.InputChanged:Connect(function(input)
		if
			input.UserInputType == Enum.UserInputType.MouseMovement
			or input.UserInputType == Enum.UserInputType.Touch
		then
			dragInput = input
		end
	end)

	globalInputConnection = userInputService.InputChanged:Connect(function(input)
		if not dragging or input ~= dragInput or not dragStart or not startPosition then
			return
		end

		local delta = input.Position - dragStart

		if not movedEnough and delta.Magnitude >= properties.DragThreshold then
			movedEnough = true
			suppressActivateUntil = os.clock() + 0.15
		end

		structures.Body.Position = UDim2.new(
			startPosition.X.Scale,
			startPosition.X.Offset + delta.X,
			startPosition.Y.Scale,
			startPosition.Y.Offset + delta.Y
		)
	end)

	--// Minimize / restore the Window
	structures.Body.Activated:Connect(function()
		if dragging or movedEnough or os.clock() < suppressActivateUntil then
			return
		end

		local minimized = self.Minimized ~= true
		self.Minimized = minimized

		if type(properties.Toggled) == "function" then
			task.spawn(properties.Toggled, minimized)
		end
	end)

	-- Keep the floating button alive while the Window is minimized,
	-- but remove it automatically when that Window is destroyed.
	windowDestroyConnection = windowBody.Destroying:Connect(function()
		pcall(function()
			structures.Body:Destroy()
		end)
	end)

	structures.Body.Destroying:Connect(function()
		if endConnection then
			endConnection:Disconnect()
			endConnection = nil
		end

		if globalInputConnection then
			globalInputConnection:Disconnect()
			globalInputConnection = nil
		end

		if windowDestroyConnection then
			windowDestroyConnection:Disconnect()
			windowDestroyConnection = nil
		end

		if self.Structures and self.Structures.MobileButton == structures.Body then
			self.Structures.MobileButton = nil
		end
	end)

	return object
end
