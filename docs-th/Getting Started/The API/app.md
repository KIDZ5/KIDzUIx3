# App — การสร้างและจัดการแอป

คุณสามารถสร้างแอปใหม่ด้วยเมธอด `New` จาก KIDzUIx3 API ซึ่งจะคืน custom object ที่รวมกับ `ScreenGui`

ออบเจ็กต์ที่คืนมาจะให้เข้าถึง [Components](../../Components/index.md) ที่มีมาให้ทั้งหมด เช่น [Window](../../Components/Window.md), [Tab](../../Components/Tab.md) และคอมโพเนนต์อื่นสำหรับประกอบ UI

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ---------- | ----------------- | ------------------------------------------------------------------ | 
 | WindowPill | `#!luau boolean?` | กำหนดว่าจะแสดง pill สำหรับ minimize/restore Window หรือไม่ | 
 | Theme | `#!luau Theme?` | โหมด Light หรือ Dark ดู [Themes](./themes.md) | 
 | Accent | `#!luau Accent?` | ชุดสี Accent ดู [Accents](./accents.md) | 

[ดูรายการทั้งหมดที่สืบทอดจาก ScreenGui](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก ScreenGui](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก ScreenGui](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#summary-events)

## ชนิดข้อมูล

```luau

type AppProperties = ScreenGui & {
    WindowPill: boolean?,
    Theme: Theme?,
    Accent: Accent?,
}

type App = AppProperties & Components
```

### รูปแบบฟังก์ชัน

```luau
function(properties: AppProperties?): App
```

## ตัวอย่าง

```luau
local app = KIDzUIx3.New({
    WindowPill = true,
    Theme = KIDzUIx3.Themes.Light,
    Accent = KIDzUIx3.Accents.Blue,
})
```

## การ Dump แอป

ใช้ `AppRecorder` เมื่อต้องการ dump ข้อมูลคอมโพเนนต์ที่สร้างในรูปแบบที่กระชับและเข้าใจโครงสร้างของ KIDzUIx3

```luau
local app = KIDzUIx3.New({
    Theme = KIDzUIx3.Themes.Dark,
    Accent = KIDzUIx3.Accents.Blue,
})

local recorder = KIDzUIx3.AppRecorder.new(app)
recorder:Start()

local window = app:Window({
    Title = "KIDzUIx3",
    Subtitle = "KIDzUIx3 demo app",
})

window:Section({
    Title = "Navigation",
})

recorder:Stop()

if setclipboard then
    setclipboard(recorder:Dump())
end
```

`recorder:Dump()` จะคืน JSON ที่มี root เป็น `KIDzUIx3AppDump` พร้อมคอมโพเนนต์ที่บันทึกไว้ properties ที่ serialize ได้ และ properties ของ root instance ปัจจุบันของแต่ละคอมโพเนนต์ โดยจะข้าม functions เพราะไม่สามารถสร้างใหม่ภายนอก Roblox ได้

หากไม่ได้เริ่ม recorder `KIDzUIx3.AppDump(app)` ยังใช้งานได้ แต่จะ fallback ไปใช้ rendered instance tree แบบ raw:

```luau
local dump = KIDzUIx3.AppDump(app)
```

สามารถรวม rendered tree แบบเต็มไว้กับข้อมูล recorder ได้เมื่อต้องการรายละเอียดระดับการจัดวางพิกเซล:

```luau
local dump = recorder:Dump({
    IncludeInstanceTree = true,
})
```
