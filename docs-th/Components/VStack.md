# VStack — คอมโพเนนต์ VStack

`VStack` เป็น Frame ที่จัดเรียงเนื้อหาในแนวตั้ง

![Component preview](../assets/component_vstack.png)

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
function(self, properties: StackProperties?): VStack
```

## ตัวอย่าง

```luau
local vStack = row:Right():VStack()

print(vStack:IsA("Frame")) --> true
print(vStack.ClassName) --> "Frame"
print(vStack.Type) --> "VStack"
```
