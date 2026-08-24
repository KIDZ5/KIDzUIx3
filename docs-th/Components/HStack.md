# HStack — คอมโพเนนต์ HStack

`HStack` เป็น Frame ที่จัดเรียงเนื้อหาในแนวนอน

![Component preview](../assets/component_hstack.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | --------------------- | ---------------------------------- | ----------------------------- | 
 | `Padding` | `#!luau UDim?` | ระยะห่างระหว่างออบเจ็กต์ | 
 | `HorizontalAlignment` | `#!luau Enum.HorizontalAlignment?` | การจัดแนวเนื้อหาตามแกน X | 
 | `VerticalAlignment` | `#!luau Enum.VerticalAlignment?` | การจัดแนวเนื้อหาตามแกน Y | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type StackProperties = Frame & {
    Padding: UDim?,
    HorizontalAlignment: Enum.HorizontalAlignment?,
    VerticalAlignment: Enum.VerticalAlignment?,
}

type Stack = BaseComponent & Components & StackProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: StackProperties?): HStack
```

## ตัวอย่าง

```luau
local hStack = row:Right():HStack()

print(hStack:IsA("Frame")) --> true
print(hStack.ClassName) --> "Frame"
print(hStack.Type) --> "HStack"
```
