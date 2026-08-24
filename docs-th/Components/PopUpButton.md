# PopUpButton — คอมโพเนนต์ PopUpButton

`PopUpButton` แสดงเมนูตัวเลือกที่รองรับทั้งการเลือกแบบค่าเดียวหรือหลายค่า

![Component preview](../assets/component_popUpButton.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ---------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Options` | `#!luau {[number]: string}?` | ใช้ตารางนี้กำหนดตัวเลือกล่วงหน้าได้ แต่การกำหนดด้วยวิธีนี้จะไม่สามารถเข้าถึง option instances โดยตรง | 
 | `Expanded` | `#!luau boolean?` | กำหนดสถานะการเปิด/ปิดของ dropdown | 
 | `Maximum` | `#!luau number?` | จำนวนตัวเลือกสูงสุดที่เลือกได้ ค่าเริ่มต้นคือ `1` สำหรับการเลือกแบบค่าเดียว | 
 | `Value` | `#!luau number? or {number}?` | index ที่เลือกสำหรับโหมดค่าเดียว หรือเป็นตารางของ index ที่เลือกเมื่อ `Maximum > 1` | 
 | `Anchor` | `#!luau DropdownMenuAnchor?` | กำหนดตำแหน่งที่เมนูจะเปิดแทนค่าเริ่มต้น | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-properties)

### เมธอด

 | เมธอด | รูปแบบ | คำอธิบาย | 
 | -------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Option` | `#!luau (Name: string?) -> TextButton` | ใช้สร้างตัวเลือกแยกทีละรายการ เหมาะเมื่อจำเป็นต้องเข้าถึง option instances โดยตรง เช่น player list ที่อัปเดตแบบ dynamic | 
 | `Remove` | `#!luau (Index: number?) -> nil` | ใช้ลบตัวเลือกออกจาก pop-up menu และระบบจะลบออกจากรายการ options อัตโนมัติ | 

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | 
 | `ValueChanged` | `#!luau ((self: PopUpButton, value: number or {number}) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-events)

## ชนิดข้อมูล

```luau
type DropdownMenuAnchorConfig = {
    Object: GuiObject?,
    Element: GuiObject?,
    Label: GuiObject?,
    Option: number?,
    Offset: Vector2?,
    XOffset: number?,
    YOffset: number?,
}

type DropdownMenuAnchor = GuiObject | DropdownMenuAnchorConfig

type PopUpButtonProperties = TextButton & {
    Options: { [number]: string }?,
    Expanded: boolean?,
    Anchor: DropdownMenuAnchor?,
    Maximum: number?,
    Value: (number | { number })?,
    ValueChanged: ((self: PopUpButton, value: number | { number }) -> unknown)?,
}

type PopUpButton = BaseComponent & Components & PopUpButtonProperties & {
    Option: (Name: string?) -> TextButton,
    Remove: (Index: number?) -> nil,
}
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: PopUpButtonProperties?): PopUpButton
```

## ตัวอย่าง

```luau
local popUpButton = row:Right():PopUpButton({
    Options = {
        "Item One",
        "Item Two",
    },
    ValueChanged = function(self, value: number)
        print("Value changed:", self.Options[value])
    end,
})

print(popUpButton:IsA("TextButton")) --> true
print(popUpButton.ClassName) --> "TextButton"
print(popUpButton.Type) --> "PopUpButton"

local itemThree = popUpButton:Option("Item Three")
popUpButton.Value = 3 --> Value changed: "Item Three"

print(itemThree.ClassName) --> "TextButton"
popUpButton:Remove(3)
```

## ตัวอย่าง Multi-select

```luau
local multi = row:Right():PopUpButton({
    Options = {"One","Two","Three","Four"},
    Maximum = 3,
    ValueChanged = function(self, value)
        -- `value` is ALWAYS a table of indices when `Maximum > 1` even if only 1 value is selected.
        print("Selections:")
        for _, idx in ipairs(value or {}) do
            print(self.Options[idx])
        end
    end,
})

local five = multi:Option("Five")

multi.Value = {1, 3}
```
