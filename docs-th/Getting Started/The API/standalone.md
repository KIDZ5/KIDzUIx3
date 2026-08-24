# Standalone API — การใช้คอมโพเนนต์แบบแยกเดี่ยว

Standalone API ให้คุณสร้างคอมโพเนนต์ KIDzUIx3 แยกชิ้นโดยไม่ต้องสร้าง [App](./app.md) แบบเต็ม จึงเข้าถึง component primitives ได้โดยไม่มี overhead ของแอป

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | -------- | ------------------ | ----------------------------------------------------------------- | 
 | Theme | `#!luau Theme?` | โหมด Light หรือ Dark ดู [Themes](./themes.md) ค่าเริ่มต้นคือ Light | 
 | Accent | `#!luau Accent?` | ชุดสี Accent ดู [Accents](./accents.md) | 
 | Parent | `#!luau Instance?` | Parent เริ่มต้นสำหรับคอมโพเนนต์ที่สร้างจาก context นี้ | 

## ชนิดข้อมูล

```luau
type ComponentProperties = {
    Theme: Theme?,
    Accent: Accent?,
    Parent: Instance?,
}

type ComponentContext = ComponentProperties & Components
```

### รูปแบบฟังก์ชัน

```luau
function(properties: ComponentProperties?): ComponentContext
```

## ตัวอย่าง

### การสร้างคอมโพเนนต์แบบ Standalone

```luau
local ctx = KIDzUIx3.Component({
    Theme = KIDzUIx3.Themes.Dark,
    Accent = KIDzUIx3.Accents.Blue,
})

-- Returns our wrapped object and the raw Roblox instance
local object, instance = ctx:Toggle({
    Parent = someFrame,
    Value = true,
    ValueChanged = function(self, value: boolean)
        print("Value changed:", value)
    end,
})

print(object.__instance)
```

### Parent ที่ใช้ร่วมกัน

หากคอมโพเนนต์ส่วนใหญ่ใช้ parent เดียวกัน คุณสามารถกำหนด `Parent` ที่ context โดยตรง:

```luau
local ctx = KIDzUIx3.Component({
    Theme = KIDzUIx3.Themes.Dark,
    Parent = someFrame,
})

-- Both components are automatically parented to someFrame
local toggle = ctx:Toggle({ Value = false })
local slider = ctx:Slider({ Value = 0.5, Minimum = 0, Maximum = 1 })
```

!!! note "หมายเหตุ"
    คุณยังสามารถ override `Parent` สำหรับกลุ่มคอมโพเนนต์ที่ใช้ร่วมกันได้

### Context รูปแบบต่าง ๆ

```luau
-- This one will use the `Light` theme with the `Red` accent.
do
    local ctx = KIDzUIx3.Component({
        Theme = KIDzUIx3.Themes.Light,
        Accent = KIDzUIx3.Accents.Red,
    })

    local toggle = ctx:Toggle({ Value = false })
end

-- This one will use the `Dark` theme with the `Blue` accent.
do
    local ctx = KIDzUIx3.Component({
        Theme = KIDzUIx3.Themes.Dark,
        Accent = KIDzUIx3.Accents.Blue,
    })

    local toggle = ctx:Toggle({ Value = true })
end
```
