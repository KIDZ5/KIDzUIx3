# การสร้างคอมโพเนนต์

การสร้าง custom component ใน KIDzUIx3 จำเป็นต้องเข้าใจ lifecycle ของคอมโพเนนต์และ context ที่คอมโพเนนต์ทำงานอยู่

## ตัวสร้างคอมโพเนนต์

คอมโพเนนต์แต่ละตัวถูกกำหนดด้วยฟังก์ชัน "maker" ซึ่งรับอาร์กิวเมนต์สองตัวคือ `#!luau self` และ `#!luau properties`

### `#!luau self`

`self` คือ chain context ตัวอย่างเช่น

```luau
KIDzUIx3.RegisterComponent("Test", function(self)
    print(self.Type)
end)

ctx:Toggle():Test() -- "Toggle"
```

### `#!luau properties`

`properties` คือตารางที่ผู้ใช้ส่งเข้ามาตอนเรียกคอมโพเนนต์ ใช้สำหรับปรับรูปลักษณ์และพฤติกรรมของคอมโพเนนต์

!!! important "สำคัญ"
    ในทางเทคนิคคุณไม่ได้ถูกจำกัดให้ใช้เฉพาะอาร์กิวเมนต์ `Properties` และสามารถรับอาร์กิวเมนต์จำนวนเท่าใดก็ได้ แต่โดยทั่วไปตาราง `properties` ก็เพียงพอสำหรับการสร้างคอมโพเนนต์

---

## ตัวอย่าง: คอมโพเนนต์ "Card"

คุณสามารถสร้างคอมโพเนนต์ด้วยโมดูลภายในของ KIDzUIx3 หรือคืน Roblox instance โดยตรงก็ได้

```luau
local creator = KIDzUIx3.Creator
local create = creator.Create

KIDzUIx3.RegisterComponent("Card", function(self, properties)
    -- Create the instance using KIDzUIx3.Creator
    -- self.Theme is automatically available
    local frame = create("Frame")({
        Name = properties.Name or "Card",
        Size = properties.Size or UDim2.fromOffset(200, 100),
        Parent = properties.Parent or self.__container,

        -- Reactive State: You can use KIDzUIx3's built-in __contextKeys and __dynamicKeys tables for reactive components. View existing KIDzUIx3 components for the best examples on this.

        create("UICorner")({
            CornerRadius = UDim.new(0, 8),
        }),
    })

    self:Label({
        Text = properties.Title or "Card Title",
        Parent = frame.__instance,
    })

    return frame
end)
```
