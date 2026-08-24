<!-- markdownlint-disable MD056 -->

# Button — คอมโพเนนต์ Button

`Button` ใช้เรียกการทำงานทันทีเมื่อผู้ใช้กด

![Component preview](../assets/component_button.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | -------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------- | 
 | `State` | `#!luau ("Primary" or "Secondary" or "Destructive")?` | กำหนดระดับความสำคัญของปุ่ม เพื่อสื่อให้ผู้ใช้ทราบถึงผลกระทบของการกดปุ่มต่อเนื้อหาโดยรอบ | 
 | `Label` | `#!luau string?` | ข้อความที่แสดงบนปุ่ม | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------- | ------------------------------------- | --------------------------------------------------------------------------------------- | 
 | `Pushed` | `#!luau ((self: Button) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อผู้ใช้คลิกหรือแตะปุ่มสำเร็จ | 

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-events)

## ชนิดข้อมูล

```luau
type ButtonProperties = TextButton & {
    State: ("Primary" | "Secondary" | "Destructive")?,
    Label: string?,
    Pushed: ((self: Button) -> unknown)?,
}

type Button = BaseComponent & Components & ButtonProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: ButtonProperties?): Button
```

## ตัวอย่าง

```luau
local button = row:Right():Button({
    Label = "Button",
    State = "Primary",
    Pushed = function(self)
        print("Pushed")
    end,
})

print(button:IsA("TextButton")) --> true
print(button.ClassName) --> "TextButton"
print(button.Type) --> "Button"
```
