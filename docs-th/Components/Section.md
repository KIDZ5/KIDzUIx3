# Section — คอมโพเนนต์ Section

`Section` ใช้จัดระเบียบเนื้อหาใน sidebar โดยรวมแท็บที่เกี่ยวข้องไว้ด้วยกัน และสามารถกำหนดให้ยุบ/ขยายได้

![Component preview](../assets/component_sidebar.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------ | ----------------- | -------------------------------------------------------------------- | 
 | `Title` | `#!luau string?` | ชื่อ Section ที่แสดง | 
 | `Disclosure` | `#!luau boolean?` | กำหนดว่าเนื้อหาของ Section สามารถซ่อนได้หรือไม่ ค่าเริ่มต้นคือ true | 
 | `Expanded` | `#!luau boolean?` | กำหนดว่า Section ควรขยายไว้โดยค่าเริ่มต้นหรือไม่ ค่าเริ่มต้นคือ true | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-events)

## ชนิดข้อมูล

```luau
type SectionProperties = TextButton & {
    Title: string?,
    Disclosure: boolean?,
    Expanded: boolean?,
}

type Section = BaseComponent & Components & SectionProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: SectionProperties?): Section
```

## ตัวอย่าง

```luau
local section = window:Section({
    Disclosure = true,
    Title = "Settings",
})

print(section:IsA("TextButton")) --> true
print(section.ClassName) --> "TextButton"
print(section.Type) --> "Section"
```
