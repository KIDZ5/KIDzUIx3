# ImageSurface — คอมโพเนนต์ ImageSurface

`ImageSurface` ใช้แสดงรูปภาพบนพื้นผิวที่กำหนดสีได้

![Component preview](../assets/component_imageView.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | -------------- | ----------------- | ------------------------------------------------------------------------------------ | 
 | `Image` | `#!luau string?` | Asset ID ของรูปขนาด `20 x 20` ที่แสดงบน surface สามารถใช้ `KIDzUIx3.Symbols` ได้ | 
 | `ImageColor` | `#!luau Color3?` | สี tint ที่ใช้กับรูปภาพ ค่าเริ่มต้นคือ `Color3.fromRGB(255, 255, 255)` | 
 | `SurfaceColor` | `#!luau Color3?` | สีพื้นหลังของ surface ค่าเริ่มต้นคือ `Color3.fromRGB(200, 200, 200)` | 
 | `Gradient` | `#!luau boolean?` | เปิดใช้งาน gradient บน surface ค่าเริ่มต้นคือ `true` | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type ImageSurfaceProperties = Frame & {
    Image: string?,
    ImageColor: Color3?,
    SurfaceColor: Color3?,
    Gradient: boolean?,
}

type ImageSurface = BaseComponent & Components & ImageSurfaceProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: ImageSurfaceProperties?): ImageSurface
```

## ภาพตัวอย่าง

![Image Surface Collection Vertical](../assets/imageSurfaceCollectionVertical.png)
![Image Surface With TitleStack](../assets/imageSurfaceWithTitleStack.png)

## ตัวอย่าง

```luau
local imageSurface = row:Left():ImageSurface({
    Image = KIDzUIx3.Symbols.house,
    SurfaceColor = Color3.fromRGB(255, 107, 53),
})

print(imageSurface:IsA("Frame")) --> true
print(imageSurface.ClassName) --> "Frame"
print(imageSurface.Type) --> "ImageSurface"
```
