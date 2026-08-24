# ภาพรวม API

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | 
 | `Themes` | `#!luau { [string]: Theme }` | **[อ่านอย่างเดียว]** มี theme modes เริ่มต้นสำหรับแอป ดู [ธีมทั้งหมด](./themes.md) | 
 | `Accents` | `#!luau { [string]: Accent }` | **[อ่านอย่างเดียว]** มี Accents preset ดู [Accent ทั้งหมด](./accents.md) | 
 | `Symbols` | `#!luau { [string]: string }` | **[อ่านอย่างเดียว]** รายการ symbols จำนวนมากที่ export จาก Apple SF Symbols ดู [symbols ทั้งหมด](https://sf-symbols.pages.dev/) | 
 | `Creator` | `#!luau Module` | **[อ่านอย่างเดียว]** โมดูล `creator` ภายใน ดู [โมดูลภายใน](../../Custom%20Components/internal-modules.md) | 
 | `Binder` | `#!luau Module` | **[อ่านอย่างเดียว]** โมดูล `binder` ภายใน ดู [โมดูลภายใน](../../Custom%20Components/internal-modules.md) | 
 | `Components` | `#!luau { [string]: function }` | **[อ่านอย่างเดียว]** registry ภายในของคอมโพเนนต์ ดู [Custom Components](../../Custom%20Components/introduction.md) | 

### เมธอด

 | เมธอด | อาร์กิวเมนต์ | คำอธิบาย | ค่าที่คืน | 
 | ------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------- | 
 | `New` | `#!luau properties: AppProperties?` | สร้าง [App](./app.md) ใหม่และคืนคอมโพเนนต์ทั้งหมดที่สามารถเรียกใช้งานเพื่อแสดงบนหน้าจอ | [App](./app.md) | 
 | `Component` | `#!luau properties: ComponentProperties?` | สร้าง [component context](./standalone.md) แบบ Standalone โดยไม่มี overhead ของ `App` และ `ScreenGui` | [ComponentContext](./standalone.md) | 
 | `RegisterComponent` | `#!luau (name: string, maker: function)` | ลงทะเบียน custom component เข้ากับ API ดู [Custom Components](../../Custom%20Components/introduction.md) | void | 
 | `AppRecorder.new` | `#!luau (app: App)` | สร้าง recorder แบบ opt-in สำหรับบันทึกการเรียกคอมโพเนนต์ KIDzUIx3 เพื่อใช้กับ workflow การจำลอง app/UI | `#!luau AppRecorder` | 
 | `AppDump` | `#!luau (app: App, options: table?)` | Dump แอปที่บันทึกไว้ หรือ fallback ไปยัง rendered Roblox GUI tree เมื่อไม่มี recorder | `#!luau string` | 
