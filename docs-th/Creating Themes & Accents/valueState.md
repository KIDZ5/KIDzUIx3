# ValueState

ก่อนสร้าง custom theme หรือ override คุณควรทำความเข้าใจ `ValueState` ของ KIDzUIx3 ก่อน

## `ValueState` คืออะไร?

`ValueState` เป็นตัวเก็บสถานะที่สามารถเชื่อมต่อได้ และช่วยให้ KIDzUIx3 รับรู้เมื่อค่ามีการเปลี่ยนแปลง

สิ่งนี้สำคัญกับระบบธีมแบบ reactive เพราะหากไม่มี `ValueState` ระบบจะต้องตรวจค่าของ theme key ซ้ำ ๆ แต่ `ValueState` ช่วยให้เชื่อมต่อกับการเปลี่ยนแปลงและเรียกการทำงานทันทีเมื่อค่าเปลี่ยน

## สิ่งนี้เกี่ยวข้องกับการสร้างธีมอย่างไร?

ระบบธีมของ KIDzUIx3 รองรับ `ValueState` จึงควรเข้าใจแนวคิดนี้และเหตุผลที่ `ValueState` สำคัญต่อระบบ UI แบบ reactive

## ตัวอย่างการใช้ `ValueState`

```luau
--// Imports
local KIDzUIx3 = require("@packages/KIDzUIx3")

--// References
local creator = KIDzUIx3.Creator
local value = creator.Value

--// ValueStates
local fruit = value("Apple")

--// Main
fruit:Connect(function(new) -- We will first connect to the ValueState, so whenever a change is made, our function will fire.
    print("The fruit was changed to ", new)
end)

-- Now, whenever .Value is set, the Connection will be fired, invocating the function.
fruit.Value = "Orange"
```
