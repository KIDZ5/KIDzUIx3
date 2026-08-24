# Tab — คอมโพเนนต์ Tab

`Tab` ใช้แบ่งเนื้อหาเป็นหลาย Page และให้ผู้ใช้สลับระหว่างหน้าเหล่านั้นผ่านปุ่มบน sidebar โดยแต่ละแท็บจะมี [Page](./Page.md) ที่เชื่อมอยู่และจะแสดงเมื่อเลือกแท็บ

![Component preview](../assets/component_sidebar.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ----------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Title` | `#!luau string?` | ชื่อที่แสดงของ Tab | 
 | `Icon` | `#!luau string?` | `rbxassetid://` ของรูปที่จะแสดง สามารถใช้ KIDzUIx3.Symbols สำหรับ symbols ที่เตรียมไว้ | 
 | `Indentation` | `#!luau number?` | ระดับ indentation ของ Tab หรือระยะเยื้องไปทางขวา ระบบจะเพิ่ม `1` อัตโนมัติเมื่อซ้อน Tab ภายใน Tab อื่น | 
 | `Selected` | `#!luau boolean?` | กำหนดว่า Tab ถูกเลือกโดยค่าเริ่มต้นหรือไม่ ค่าเริ่มต้นคือ false และในหนึ่ง Section ควรเลือกเพียงหนึ่ง Tab | 
 | `Page` | `#!luau Page?` | Page แบบกำหนดเองสำหรับ Tab นี้ หากไม่กำหนด ระบบจะสร้าง Page เริ่มต้นให้อัตโนมัติ ดูรายละเอียดที่ [Page](./Page.md) | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-properties)

### เมธอด

 | เมธอด | รูปแบบ | คำอธิบาย | 
 | ---------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | 
 | `Navigate` | `(self: Tab, page: Page) -> nil` | สลับ Page ที่ Tab แสดงไปยัง Page อื่น หาก `page` ไม่ใช่คอมโพเนนต์ `Page` ระบบจะแจ้งเตือนและไม่ดำเนินการ | 

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-methods)

### อีเวนต์

[ดูรายการทั้งหมดที่สืบทอดจาก `TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton#summary-events)

## ชนิดข้อมูล

```luau
type TabProperties = TextButton & {
    Title: string?,
    Icon: string?,
    Indentation: number?,
    Selected: boolean?,
    Page: Page?,
}

type Tab = BaseComponent & Components & TabProperties & {
    Navigate: (self: Tab, page: Page) -> nil,
    Structures: { [string]: Instance | { any }, Page: Page},
}
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: TabProperties?): Tab
```

## การสร้างแท็บ

```luau
local tab = section:Tab({
    Title = "Settings",
    Icon = KIDzUIx3.Symbols.gear,
})
```

### Tab ที่ใช้ Page แบบกำหนดเอง

Tabs จะสร้าง Pages ให้อัตโนมัติ แต่คุณสามารถส่ง Page ที่สร้างเองเข้าไปได้

```luau
local customPage = app:Page()

-- Add content to the page
customPage:Form():Row():Right():Toggle({
    Value = false,
})

-- Use the page in a tab
local tab = section:Tab({
    Title = "Settings",
    Page = customPage,
})
```

## การนำทางระหว่าง Pages

เมธอด `Navigate` ใช้สลับ Pages ภายใน Tab เหมาะสำหรับ workflow หลายขั้นตอนหรือการค่อย ๆ เปิดเผยเนื้อหา:

```luau
local tab = section:Tab({
    Title = "Workflow",
    Selected = true,
})

local page1 = app:Page()
local page2 = app:Page()

-- Setup pages with navigation buttons
do
    local form = page1:Form()
    form:Row():Right():Button({
        Label = "Next",
        Pushed = function()
            tab:Navigate(page2)
        end,
    })
end

do
    local form = page2:Form()
    form:Row():Right():Button({
        Label = "Back",
        State = "Secondary",
        Pushed = function()
            tab:Navigate(page1)
        end,
    })
end

-- Show page 1 initially
tab:Navigate(page1)
```

## แท็บซ้อน

Tabs สามารถซ้อนกันเพื่อสร้างการนำทางแบบลำดับชั้น โดยระบบจะจัด indentation ให้อัตโนมัติ:

```luau
local mainTab = section:Tab({
    Title = "Main",
    Icon = KIDzUIx3.Symbols.squareStack3dUp,
})

-- Chain additional tabs to create indentation
mainTab:Tab({
    Title = "Sub 1",
})

mainTab:Tab({
    Title = "Sub 2",
})
```

## การเลือกแท็บ

ในหนึ่ง Section สามารถเลือกได้ครั้งละหนึ่ง Tab เมื่อกดแท็บใหม่ ระบบจะยกเลิกการเลือกแท็บอื่นให้อัตโนมัติ:

```luau
local tab1 = section:Tab({
    Title = "Tab 1",
    Selected = true,  -- This tab starts selected
})

local tab2 = section:Tab({
    Title = "Tab 2",
    Selected = false,  -- Defaults to false
})

-- When tab2 is clicked, tab1 is automatically deselected
```

เปลี่ยนสถานะการเลือกด้วยตนเอง:

```luau
local tab1 = section:Tab({ Title = "Tab 1" })
local tab2 = section:Tab({ Title = "Tab 2" })

-- Later in your code
tab2.Selected = true  -- Selects tab2
-- tab1 is automatically deselected by the system
```

## ตัวอย่าง

```luau
local tab = section:Tab({
    Selected = true,
    Title = "Tab",
    Icon = KIDzUIx3.Symbols.squareStack3dUp,
})

print(tab:IsA("TextButton")) --> true
print(tab.ClassName) --> "TextButton"
print(tab.Type) --> "Tab"
```
