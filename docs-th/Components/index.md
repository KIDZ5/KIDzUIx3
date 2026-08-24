# คอมโพเนนต์

`BaseComponent` เป็นคลาสพื้นฐานที่คอมโพเนนต์ทั้งหมดของ KIDzUIx3 สืบทอดมา และมีข้อมูลหลัก เช่น `Type`, `Theme` และ `Structures`

---

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Type` | `#!luau string` | **[อ่านอย่างเดียว]** กำหนด class ของ Component | 
 | `Theme` | `#!luau Theme` | **[อ่านอย่างเดียว]** Theme ที่สืบทอดมาจากคอมโพเนนต์ที่เรียกใช้งาน | 
 | `Structures` | `#!luau {[string]: Instance or {any}}` | **[อ่านอย่างเดียว]** ตารางของ structures ที่กำหนดไว้สำหรับคอมโพเนนต์ | 
 | `__instance` | `#!luau Instance` | **[อ่านอย่างเดียว]** คืน Roblox instance จริงของคอมโพเนนต์ เหมาะสำหรับ Roblox API ที่ไม่รองรับ wrapped instance | 

!!! warning "คำเตือน"
    หากต้องการเข้าถึง instance จริงของคอมโพเนนต์ ให้ใช้ `__instance` ซึ่งจะคืน Roblox object จริงแทน object ที่ถูกผสานผ่าน metatable

---

## ชนิดข้อมูล

```luau
export type BaseComponent = {
    Type: string,
    Theme: Theme,
    Structures: { [string]: Instance | { any } },
}
```
