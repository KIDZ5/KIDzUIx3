# Toggle — คอมโพเนนต์ Toggle

`Toggle` ให้ผู้ใช้สลับระหว่างสองสถานะ เช่น เปิดและปิด โดยใช้ลักษณะการแสดงผลที่ต่างกันเพื่อบอกสถานะ

![Component preview](../assets/component_toggle.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | -------- | ----------------- | -------------------------------------------------- | 
 | `Value` | `#!luau boolean?` | สถานะของ Toggle โดย `false` คือปิด และ `true` คือเปิด | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | 
 | `ValueChanged` | `#!luau ((self: Toggle, value: boolean) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type ToggleProperties = Frame & {
    Value: boolean?,
    ValueChanged: ((self: Toggle, value: boolean) -> unknown)?,
}

type Toggle = BaseComponent & Components & ToggleProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: ToggleProperties?): Toggle
```

## ตัวอย่าง

```luau
local toggle = row:Right():Toggle({
    Value = true,
    ValueChanged = function(self, value: boolean)
        print("Value changed:", value)
    end,
})

print(toggle:IsA("Frame")) --> true
print(toggle.ClassName) --> "Frame"
print(toggle.Type) --> "Toggle"
```
