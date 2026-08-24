# Slider — คอมโพเนนต์ Slider

`Slider` เป็นแถบแนวนอนที่มีตัวเลื่อนซึ่งผู้ใช้สามารถปรับค่าระหว่างค่าต่ำสุดและค่าสูงสุดได้

![Component preview](../assets/component_slider.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | --------- | ---------------- | --------------------------------------- | 
 | `Minimum` | `#!luau number?` | ค่าต่ำสุดของ Slider | 
 | `Maximum` | `#!luau number?` | ค่าสูงสุดของ Slider | 
 | `Value` | `#!luau number?` | ค่าปัจจุบันของ Slider | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------- | 
 | `ValueChanged` | `#!luau ((self: Slider, value: number) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#summary-events)

## ชนิดข้อมูล

```luau
type SliderProperties = ImageLabel & {
    Minimum: number?,
    Maximum: number?,
    Value: number?,
    ValueChanged: ((self: Slider, value: number) -> unknown)?,
}

type Slider = BaseComponent & Components & SliderProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: SliderProperties?): Slider
```

## ตัวอย่าง

```luau
local slider = row:Right():Slider({
    Minimum = 0,
    Maximum = 10,
    Value = 5,
    ValueChanged = function(self, value: number)
        print("Value changed:", value)
    end,
})

print(slider:IsA("ImageLabel")) --> true
print(slider.ClassName) --> "ImageLabel"
print(slider.Type) --> "Slider"

slider.Value += 1 --> Value changed: 6
```
