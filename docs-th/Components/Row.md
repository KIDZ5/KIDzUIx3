# Row — คอมโพเนนต์ Row

`Row` เป็นคอนเทนเนอร์แนวนอนที่แบ่งเนื้อหาออกเป็นส่วน `Left` และ `Right` เพื่อแยกองค์ประกอบหลักและรองให้ชัดเจน

![Component preview](../assets/component_table_lists.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------- | ---------------- | -------------------------------------------------------------------------------------------- | 
 | `SearchIndex` | `#!luau string?` | ข้อความที่กำหนดว่าผู้ใช้ต้องพิมพ์อะไรในการค้นหาจึงจะแสดง Row นี้ | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

 | เมธอด | รูปแบบ | คำอธิบาย | 
 | ------- | ------------------ | ----------------------------------------------------------------------------------------- | 
 | `Left` | `#!luau () -> Row` | คืน shallow clone ของ `Row` โดยตั้ง container เป็นฝั่ง **ซ้าย** ของ Row | 
 | `Right` | `#!luau () -> Row` | คืน shallow clone ของ `Row` โดยตั้ง container เป็นฝั่ง **ขวา** ของ Row | 

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type RowProperties = Frame & {
    SearchIndex: string?,
}

type Row = BaseComponent & Components & RowProperties & {
    Left: (self: Row) -> Row,
    Right: (self: Row) -> Row,
}
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: RowProperties?): Row
```

## ตัวอย่าง

```luau
local row = form:Row({
    SearchIndex = "Cool Row"
})

print(row:IsA("Frame")) --> true
print(row.ClassName) --> "Frame"
print(row.Type) --> "Row"
```
