# Label — คอมโพเนนต์ Label

`Label` ใช้แสดงข้อความแบบอ่านอย่างเดียว ผู้ใช้ไม่สามารถแก้ไขข้อความได้

![Component preview](../assets/component_label.png)

## สรุป

### คุณสมบัติ

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#summary-events)

## ชนิดข้อมูล

```luau
type LabelProperties = TextLabel

type Label = BaseComponent & Components & LabelProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: LabelProperties?): Label
```

## ตัวอย่าง

```luau
local label = row:Right():Label({
    Text = "Label"
})

print(label:IsA("TextLabel")) --> true
print(label.ClassName) --> "TextLabel"
print(label.Type) --> "Label"
```
