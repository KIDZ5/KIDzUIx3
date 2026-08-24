# Stepper — คอมโพเนนต์ Stepper

`Stepper` เป็นตัวควบคุมสำหรับเพิ่มหรือลดค่าตัวเลขตามช่วงที่กำหนด

![Component preview](../assets/component_stepper.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | --------- | ----------------- | ------------------------------------------------------------------------------ | 
 | `Minimum` | `#!luau number?` | ค่าต่ำสุดของ Stepper | 
 | `Maximum` | `#!luau number?` | ค่าสูงสุดของ Stepper | 
 | `Step` | `#!luau number?` | จำนวนที่เพิ่มหรือลดในแต่ละ step | 
 | `Fielded` | `#!luau boolean?` | กำหนดว่าจะเชื่อม Stepper กับช่องแก้ไขค่าหรือไม่ ค่าเริ่มต้นคือ false | 
 | `Value` | `#!luau number?` | ค่าปัจจุบันของ Stepper | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#summary-properties)

### เมธอด

 | เมธอด | รูปแบบ | คำอธิบาย | 
 | ----------- | ------------------ | -------------------------------------------------------------------- | 
 | `Increment` | `#!luau () -> nil` | เพิ่ม `Value` ของ Stepper ตามจำนวน step ที่กำหนด | 
 | `Decrement` | `#!luau () -> nil` | ลด `Value` ของ Stepper ตามจำนวน step ที่กำหนด | 

[ดูรายการทั้งหมดที่สืบทอดจาก `ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | 
 | `ValueChanged` | `#!luau ((self: Stepper, value: number) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#summary-events)

## ชนิดข้อมูล

```luau
type StepperProperties = ImageLabel & {
    Minimum: number?,
    Maximum: number?,
    Step: number?,
    Fielded: boolean?,
    Value: number?,
    ValueChanged: ((self: Stepper, value: number) -> unknown)?,
}

type Stepper = BaseComponent & Components & StepperProperties & {
    Increment: () -> nil,
    Decrement: () -> nil,
}
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: StepperProperties?): Stepper
```

## ตัวอย่าง

```luau
local stepper = row:Right():Stepper({
    Minimum = 0,
    Maximum = 5,
    Step = 0.1,
    Fielded = true,
    Value = 3,
    ValueChanged = function(self, value: number)
        print("Value changed:", value)
    end,
})

print(stepper:IsA("ImageLabel")) --> true
print(stepper.ClassName) --> "ImageLabel"
print(stepper.Type) --> "Stepper"

stepper:Increment() --> Value changed: 3.1
stepper.Value += 1 --> Value changed: 4.1
```
