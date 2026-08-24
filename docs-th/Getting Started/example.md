# ตัวอย่าง

ดูตัวอย่างแอปพลิเคชันที่สามารถสร้างด้วย KIDzUIx3

!!! note "หมายเหตุ"
    ดูตัวอย่างแอปทดสอบขนาดใหญ่ที่รองรับการย่อหน้าต่างด้วย keybind และการปรับขนาดบนมือถือได้ที่ [tests/test.luau](https://github.com/KIDZ5/KIDzUIx3/blob/main/tests/test.luau)

## การสร้างแอปพื้นฐาน

### โค้ด

```luau
-- (1)

-- Create our main application.
local app = KIDzUIx3.New({
    Theme = KIDzUIx3.Themes.Light,
    Accent = KIDzUIx3.Accents.Blue, -- Optional, defaults to Blue
})

do -- Make the main window
    local window = app:Window({
        Title = "My Window",
        Subtitle = "My window",
    })

    do -- Make a static tab section
        local section = window:Section({ Title = "Section title" })

        do -- Make our main tab
            local tab = section:Tab({
                Selected = true,
                Title = "Main",
                Icon = KIDzUIx3.Symbols.squareStack3dUp,
            })

            do
                local form = tab:Form()
            
                do -- Make the toggle
                    local row = form:Row()

                    -- You can of course add a wrapper to simplify creating page components if you only want a title stack and a component to go along.
                    row:Left():TitleStack({
                        Title = "Toggle",
                        Subtitle = "My toggle",
                    })

                    row:Right():Toggle()
                end

                do -- Make the button
                    local row = form:Row()

                    row:Left():TitleStack({
                        Title = "Button",
                        Subtitle = "My button",
                    })

                    row:Right():Button({ Label = "Click me" })
                end
            end
        end
    end
end
```

1. ตัวอย่างนี้สมมติว่าคุณนำเข้า KIDzUIx3 และกำหนดไว้เป็น `KIDzUIx3` ก่อนหน้าแล้ว

### ผลลัพธ์

![Basic app result](../assets/demoapp.png)

## การเพิ่มหน้าการตั้งค่า

### โค้ด

เพิ่มโค้ดนี้ไว้ด้านล่าง Tab ที่มีอยู่

```luau
do -- Window
    local tab = section:Tab({
        Title = "Window",
        Icon = KIDzUIx3.Symbols.sidebarLeft,
    })

    do -- Appearance
        local form = tab:PageSection({ Title = "Appearance" }):Form() -- (1)

        do -- Dark mode
            local row = form:Row({
                SearchIndex = "Dark mode",
            })

            row:Left():TitleStack({
                Title = "Dark mode",
                Subtitle = "Dark Mode is a application appearance setting that uses a dark color palette to provide a comfortable viewing experience tailored for low-light environments.",
            })

            row:Right():Toggle({
                Value = app.Theme == KIDzUIx3.Themes.Dark,
                ValueChanged = function(self, value: boolean)
                    app.Theme = value and KIDzUIx3.Themes.Dark or KIDzUIx3.Themes.Light
                end,
            })
        end
    end

    do -- Input
        local form = tab:PageSection({ Title = "Input" }):Form()

        do -- Searching
            local row = form:Row({
                SearchIndex = "Searchable",
            })

            row:Left():TitleStack({
                Title = "Searchable",
                Subtitle = "Allows pages to be searched using a text field in the title bar.",
            })

            row:Right():Toggle({
                Value = window.Searching,
                ValueChanged = function(self, value: boolean)
                    window.Searching = value
                end,
            })
        end

        do -- Draggable
            local row = form:Row({
                SearchIndex = "Draggable",
            })

            row:Left():TitleStack({
                Title = "Draggable",
                Subtitle = "Allows users to move the window with a mouse or touch device.",
            })

            row:Right():Toggle({
                Value = window.Draggable,
                ValueChanged = function(self, value: boolean)
                    window.Draggable = value
                end,
            })
        end

        do -- Resizable
            local row = form:Row({
                SearchIndex = "Resizable",
            })

            row:Left():TitleStack({
                Title = "Resizable",
                Subtitle = "Allows users to resize the window with a mouse or touch device.",
            })

            row:Right():Toggle({
                Value = window.Resizable,
                ValueChanged = function(self, value: boolean)
                    window.Resizable = value
                end,
            })
        end
    end

    do -- Effects
        local form = tab:PageSection({
            Title = "Effects",
            Subtitle = "These effects may be resource intensive across different systems.",
        }):Form()

        do -- Dropshadow
            local row = form:Row({
                SearchIndex = "Dropshadow",
            })

            row:Left():TitleStack({
                Title = "Dropshadow",
                Subtitle = "Enables a dropshadow effect on the window.",
            })

            row:Right():Toggle({
                Value = window.Dropshadow,
                ValueChanged = function(self, value: boolean)
                    window.Dropshadow = value
                end,
            })
        end

        do -- UI Blur
            local row = form:Row({
                SearchIndex = "Background blur",
            })

            row:Left():TitleStack({
                Title = "Background blur",
                Subtitle = "Enables a UI background blur effect on the window. This can be detectable in some games.",
            })

            row:Right():Toggle({
                Value = window.UIBlur,
                ValueChanged = function(self, value: boolean)
                    window.UIBlur = value
                end,
            })
        end
    end
end
```

1. คุณสามารถสร้าง PageSection เพื่อจัด Forms เป็นหมวดหมู่ ช่วยให้ผู้ใช้ไล่ดูเนื้อหาใน Tab และค้นหาสิ่งที่ต้องการได้รวดเร็ว

### ผลลัพธ์

![Basic app result with settings](../assets/demoapp_2.png)
