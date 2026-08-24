# Window — คอมโพเนนต์ Window

`Window` เป็นคอนเทนเนอร์ระดับสูงที่จัดการการโต้ตอบพื้นฐานกับผู้ใช้ โดยปกติจะเป็นคอมโพเนนต์แรกที่สร้าง และคอมโพเนนต์ส่วนใหญ่จะถูกสร้างต่อจากส่วนนี้

![Component preview](../assets/component_window.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------- | ----------------- | ---------------------------------------------------------------------------------- | 
 | `Searching` | `#!luau boolean?` | แสดงช่องค้นหาใน title bar สำหรับค้นหาเนื้อหาใน Pages | 
 | `Draggable` | `#!luau boolean?` | เปิดให้ลาก Window ด้วยเมาส์หรืออุปกรณ์สัมผัส | 
 | `Resizable` | `#!luau boolean?` | เปิดให้ปรับขนาด Window จากด้านข้างหรือมุม | 
 | `CanExit` | `#!luau boolean?` | เปิดปุ่มปิด Window ค่าเริ่มต้นคือ `true` | 
 | `CanMinimize` | `#!luau boolean?` | เปิดปุ่มย่อ Window ค่าเริ่มต้นคือ `true` | 
 | `CanZoom` | `#!luau boolean?` | เปิดปุ่ม zoom/maximize ของ Window ค่าเริ่มต้นคือ `true` | 
 | `Title` | `#!luau string?` | Title ที่แสดงใน content titlebar | 
 | `Subtitle` | `#!luau string?` | Subtitle ที่แสดงใต้ title และจะไม่แสดงหากไม่ได้กำหนด | 
 | `Maximized` | `#!luau boolean?` | กำหนดให้ Window maximize โดยค่าเริ่มต้นหรือไม่ | 
 | `Minimized` | `#!luau boolean?` | กำหนดให้ Window minimize โดยค่าเริ่มต้นหรือไม่ | 
 | `Dropshadow` | `#!luau boolean?` | เปิดเอฟเฟกต์ dropshadow บน Window | 
 | `UIBlur` | `#!luau boolean?` | ใช้เอฟเฟกต์ blur กับพื้นหลังของ sidebar | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type WindowProperties = Frame & {
    Searching: boolean?,
    Draggable: boolean?,
    Resizable: boolean?,
    Title: string?,
    Subtitle: string?,
    CanExit: boolean?,
    CanMinimize: boolean?,
    CanZoom: boolean?,
    Maximized: boolean?,
    Minimized: boolean?,

    Dropshadow: boolean?,
    UIBlur: boolean?,
}

type Window = BaseComponent & Components & WindowProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: WindowProperties?): Window
```

## ตัวอย่าง

```luau
local window = app:Window({
    Title = "KIDzUIx3",
    Subtitle = "This is my subtitle.",
})

print(window:IsA("Frame")) --> true
print(window.ClassName) --> "Frame"
print(window.Type) --> "Window"
```
