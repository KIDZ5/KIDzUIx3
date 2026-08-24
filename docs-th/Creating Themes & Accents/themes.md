<!-- markdownlint-disable MD046 -->

# การสร้างธีม

[KIDzUIx3 default dark theme]: <https://github.com/KIDZ5/KIDzUIx3/blob/main/src/themes/Dark.luau>
[KIDzUIx3 default light theme]: <https://github.com/KIDZ5/KIDzUIx3/blob/main/src/themes/Light.luau>

ส่วนนี้จะอธิบายวิธีสร้าง Theme ของคุณเองสำหรับ KIDzUIx3

## เริ่มต้นใช้งาน

วิธีเริ่มต้นที่ง่ายที่สุดคือคัดลอกธีม KIDzUIx3 ที่มีอยู่ หากต้องการธีมมืดให้เริ่มจาก [ธีมมืดเริ่มต้นของ KIDzUIx3] หรือหากต้องการธีมสว่างให้เริ่มจาก [ธีมสว่างเริ่มต้นของ KIDzUIx3]

ไม่ว่าจะเลือกธีมใด วิธีนี้จะเตรียม theme keys ที่ KIDzUIx3 ต้องใช้ไว้ครบเพื่อเป็นจุดเริ่มต้น

!!! tip "เคล็ดลับ"
    อย่าลืมเปลี่ยน imports ให้เป็น reference ที่ใช้งานจริงของโปรเจกต์ เช่น:
    ```luau
    local creator = require("@modules/creator")
    ```

    might become:

    ```luau
    local KIDzUIx3 = require("@packages/KIDzUIx3")
    local creator = KIDzUIx3.Creator
    ```

## การใช้ธีมของคุณแทนธีมเริ่มต้น

เมื่อสร้างธีมเรียบร้อยแล้ว ให้นำไปใช้โดยหาโค้ดที่สร้าง KIDzUIx3 `App` และเปลี่ยน property Theme เป็นธีมใหม่ของคุณ:

```luau
local app = KIDzUIx3.New({
    Theme = {
        _id = "MyNewTheme",

        Text = {
            ...
        },

        ...
    }
})
```

!!! tip "เคล็ดลับ"
    ไม่แนะนำให้ประกาศธีมแบบ inline ตามตัวอย่างด้านบน ควรแยกธีมไว้ในไฟล์อื่นหรือบริเวณที่เหมาะสม เพื่อให้โค้ดหลักอ่านง่ายและไม่รก
