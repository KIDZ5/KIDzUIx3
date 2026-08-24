# TextField — คอมโพเนนต์ TextField

`TextField` เป็นช่องสำหรับให้ผู้ใช้ป้อนหรือแก้ไขข้อความ

![Component preview](../assets/component_field.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------- | ---------------------- | ----------------------------------------------------------------------------- | 
 | `Placeholder` | `#!luau string?` | ข้อความ placeholder ที่ใช้บอกผู้ใช้ว่าควรโต้ตอบกับคอมโพเนนต์อย่างไร | 
 | `Value` | `#!luau string?` | ข้อความภายในช่อง | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------- | 
 | `TextChanged` | `#!luau ((self: TextField, text: string) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อข้อความใน TextField ถูกเปลี่ยน | 
 | `ValueChanged` | `#!luau ((self: TextField, value: string) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type TextFieldProperties = Frame & {
    Placeholder: string?,
    Value: string?,
    TextChanged: ((self: TextField, text: string) -> unknown)?,
    ValueChanged: ((self: TextField, value: string) -> unknown)?,
}

type TextField = BaseComponent & Components & TextFieldProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: TextFieldProperties?): TextField
```

## ตัวอย่าง

```luau
local textField = row:Right():TextField({
    Value = "Label",
    ValueChanged = function(self, value: string)
        print("Value changed:", value)
    end,
    TextChanged = function(self, value: string)
        print("Text changed:", value)
    end,
})

print(textField:IsA("Frame")) --> true
print(textField.ClassName) --> "Frame"
print(textField.Type) --> "TextField"

textField.Value = "Hi" --> Value changed: "Hi"
```
