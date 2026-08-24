# Creating a Component

Building a custom component in KIDzUIx3 involves understanding the component lifecycle and the context it lives in.

## The Component Maker

Every component is defined by a "maker" function. This function receives two arguments: `#!luau self` and `#!luau properties`.

### `#!luau self`

`self` is the chain context. eg

```luau
KIDzUIx3.RegisterComponent("Test", function(self)
    print(self.Type)
end)

ctx:Toggle():Test() -- "Toggle"
```

### `#!luau properties`

`properties` is the table passed by the user when calling your component. You should use this to customize the appearance and behavior of your component.

!!! important
    You are technically not limited to the `Properties` argument, or any argument for that matter. You could accept any number of arguments, since you are defining the component. But a `properties` table is usually all you will need.

---

## Example: A "Card" Component

You can build a component using KIDzUIx3's internal modules or just return a raw Roblox instance.

```luau
local creator = KIDzUIx3.Creator
local create = creator.Create

KIDzUIx3.RegisterComponent("Card", function(self, properties)
    -- Create the instance using KIDzUIx3.Creator
    -- self.Theme is automatically available
    local frame = create("Frame")({
        Name = properties.Name or "Card",
        Size = properties.Size or UDim2.fromOffset(200, 100),
        Parent = properties.Parent or self.__container,

        -- Reactive State: You can use KIDzUIx3's built-in __contextKeys and __dynamicKeys tables for reactive components. View existing KIDzUIx3 components for the best examples on this.

        create("UICorner")({
            CornerRadius = UDim.new(0, 8),
        }),
    })

    self:Label({
        Text = properties.Title or "Card Title",
        Parent = frame.__instance,
    })

    return frame
end)
```
