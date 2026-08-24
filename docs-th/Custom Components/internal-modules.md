# โมดูลภายใน

KIDzUIx3 เปิดให้เข้าถึงโมดูลภายในหลักผ่านออบเจ็กต์ `KIDzUIx3` ซึ่งใช้สำหรับสร้างคอมโพเนนต์แบบ reactive ที่มีคุณภาพ

## `#!luau KIDzUIx3.Creator`

โมดูล `Creator` ใช้สำหรับสร้างและกำหนดรูปแบบ Roblox instances

### `#!luau Creator.Create(className: string)`

คืนฟังก์ชันสำหรับสร้าง instance และกำหนด properties พร้อมรองรับการซ้อน child instances

```luau
local create = KIDzUIx3.Creator.Create

local frame = create("Frame")({
    Name = "MyFrame",
    Size = UDim2.fromScale(1, 1),

    create("UICorner")({ CornerRadius = UDim.new(0, 4) }),
})
```

### `#!luau Creator.Value(initial: any)`

สร้างค่าแบบ reactive ("State") เมื่อค่าของ State เปลี่ยน properties ของ instance ที่ผูกกับค่านี้จะอัปเดตอัตโนมัติ

---

## `#!luau KIDzUIx3.Binder`

โมดูล `Binder` ทำหน้าที่เชื่อมออบเจ็กต์ custom component กับ Roblox instances ที่อยู่เบื้องหลัง

### `#!luau Binder.Wrap(object, bindings, instance?, excludes?)`

สร้าง proxy ที่รวม logic ของออบเจ็กต์คุณเข้ากับ properties ของ Roblox instance

- **`object`**: ตารางของคุณที่เก็บ state และ methods ของคอมโพเนนต์
- **`bindings`**: ตารางฟังก์ชันที่จะถูกเรียกเมื่อกำหนด key ที่ระบุบน proxy
- **`instance`**: Roblox instance จริงที่จะให้ proxy จัดการ properties
- **`excludes`**: รายการชื่อ property ที่ไม่ต้องการให้ถูกนำไปใช้กับ instance โดยอัตโนมัติ

### `#!luau Binder.Apply(properties, object, excludes?)`

กำหนดตาราง properties ให้กับออบเจ็กต์โดยข้าม key ที่อยู่ใน `excludes` โดยทั่วไปใช้เพื่อนำ properties ที่ผู้ใช้ส่งมาไปใช้ตอนเริ่มต้นคอมโพเนนต์

---

## `#!luau KIDzUIx3.Symbols`

ตาราง lookup ที่มีไอคอนหลายร้อยรายการ

```luau
local icon = KIDzUIx3.Symbols.squareStack3dUp
```

---

## คุณสมบัติที่ซ่อนอยู่

เมื่อคอมโพเนนต์ถูกเรียกเป็น child ของคอมโพเนนต์อื่น จะสามารถเข้าถึง properties ภายในบางรายการผ่าน `#!luau self`:

- **`#!luau self.__container`**: instance ที่คอมโพเนนต์ลูกควรใช้เป็น parent เช่น `Window` จะกำหนดค่านี้เป็นพื้นที่เนื้อหาหลัก ดังนั้นเมื่อต้องกำหนด parent ควรใช้ `#!luau self.__container` เป็นค่ารองรับ
