# RadioButtonGroup — คอมโพเนนต์ RadioButtonGroup

`RadioButtonGroup` ให้ผู้ใช้เลือกหนึ่งตัวเลือกจากชุดตัวเลือกที่ไม่สามารถเลือกพร้อมกันได้ โดยใช้ตัวบ่งชี้แบบวงกลมแสดงค่าที่เลือก

![Component preview](../assets/component_radioButtonGroup.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | --------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Options` | `#!luau {[number]: string}?` | ใช้ตารางนี้กำหนดตัวเลือกล่วงหน้าได้ แต่การกำหนดด้วยวิธีนี้จะไม่สามารถเข้าถึง option instances โดยตรง | 
 | `Value` | `#!luau number?` | index แบบตัวเลขของตัวเลือกที่ต้องการเลือก | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

 | เมธอด | รูปแบบ | คำอธิบาย | 
 | -------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Option` | `#!luau (Name: string?) -> Frame` | ใช้สร้างตัวเลือกแยกทีละรายการ เหมาะเมื่อจำเป็นต้องเข้าถึง option instances โดยตรง เช่น player list ที่อัปเดตแบบ dynamic | 

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------- | 
 | `ValueChanged` | `#!luau ((self: RadioButtonGroup, value: number) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type RadioButtonGroupProperties = Frame & {
    Options: { [number]: string }?,
    Value: number?,
    ValueChanged: ((self: RadioButtonGroup, value: number) -> unknown)?,
}

type RadioButtonGroup = BaseComponent & Components & RadioButtonGroupProperties & {
    Option: (Name: string?) -> Frame,
}
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: RadioButtonGroupProperties?): RadioButtonGroup
```

## ตัวอย่าง

```luau
local radioButtonGroup = row:Right():RadioButtonGroup({
    Options = {
        "Option 1",
        "Option 2",
    },
    ValueChanged = function(self, value: number)
        print("Value changed:", self.Options[value])
    end,
})

print(radioButtonGroup:IsA("Frame")) --> true
print(radioButtonGroup.ClassName) --> "Frame"
print(radioButtonGroup.Type) --> "RadioButtonGroup"

radioButtonGroup.Value = 2 --> Value changed: "Option 2"

local option3 = radioButtonGroup:Option("Option 3")

print(option3.ClassName) --> Frame
radioButtonGroup.Value = 3 --> Value changed: "Option 3"
```
