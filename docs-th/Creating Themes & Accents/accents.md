<!--markdownlint-disable MD046-->

# การสร้าง Accent

[pre-made accents]: https://github.com/KIDZ5/KIDzUIx3/blob/main/src/themes/accents.luau

## Accent คืออะไร?

ใน KIDzUIx3 คำว่า `Accents` หมายถึงชุดค่าที่ใช้ override บาง key ของธีมหลักใน `App.Theme`

## เริ่มต้นใช้งาน

เช่นเดียวกับ [Themes](./themes.md) วิธีเริ่มต้นที่ง่ายที่สุดคือคัดลอก [pre-made accents] ที่เตรียมไว้

!!! important "สำคัญ"
    ต่างจาก Themes ตรงที่ key ของ Accents **ไม่ควร** ห่อด้วย `ValueState` และสามารถใช้ค่าสีโดยตรงได้

    ตาราง accent ต้องมี `_id` สำหรับกำหนดชื่อ และต้องมี variant สำหรับแต่ละธีมที่จะใช้งาน โดยทั่วไปจะมีตาราง `Dark` หนึ่งชุดและ `Light` หนึ่งชุด

## ตัวอย่าง

```luau
local function makeGradient(topHex, bottomHex)
    return ColorSequence.new({
        ColorSequenceKeypoint.new(0, Color3.fromHex(topHex)),
        ColorSequenceKeypoint.new(1, Color3.fromHex(bottomHex)),
    })
end

App.Accent = {
    _id = "Pink",
    
    Dark = {
        SwitchAccent = Color3.fromHex("#FF375F"),
        Selection = Color3.fromHex("#D4163E"),
        SelectionFocused = Color3.fromHex("#E83058"),
        Toggle = { SwitchOn = Color3.fromHex("#FF375F") },
        Button = { FillPrimary = makeGradient("#E83058", "#C00030") },
    },
    Light = {
        SwitchAccent = Color3.fromHex("#FF2D55"),
        Selection = Color3.fromHex("#C8103A"),
        SelectionFocused = Color3.fromHex("#DC2A50"),
        Toggle = { SwitchOn = Color3.fromHex("#FF2D55") },
        Button = { FillPrimary = makeGradient("#DC2A50", "#B4002C") },
    },
}
```
