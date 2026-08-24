# การสร้างจากซอร์สโค้ด

[aftman]: <https://github.com/LPGhatguy/aftman>
[environment variables]: <https://www.howtogeek.com/787217/how-to-edit-environment-variables-on-windows-10-or-11/>
[cd]: <https://en.wikipedia.org/wiki/Cd_(command)>
[KIDzUIx3 repository]: <https://github.com/KIDZ5/KIDzUIx3>
[ProCMP]: <https://github.com/Proton-Utilities/ProCMP>

ก่อนเริ่ม ให้เปิด Terminal แล้ว [cd] ไปยังโฟลเดอร์ซอร์สของ KIDzUIx3 คุณสามารถดาวน์โหลด Release ได้จาก [KIDzUIx3 repository] อย่างเป็นทางการ
!!! tip "เคล็ดลับ"
    หากติดตั้ง `git` แล้ว สามารถใช้ `#!bash git clone "https://github.com/KIDZ5/KIDzUIx3.git"` ได้

## การติดตั้ง [aftman] และ dependencies

Aftman เป็น package manager ที่ช่วยติดตั้ง dependencies ที่จำเป็นสำหรับการ build KIDzUIx3 โดยอัตโนมัติ

1. ขั้นแรกให้ติดตั้ง [aftman] หากยังไม่มีในเครื่อง

    > ตรวจสอบว่า [aftman] อยู่ใน [environment variables] เพื่อให้เรียกใช้งานจาก Terminal ได้

2. รัน `aftman install` ภายในโฟลเดอร์ KIDzUIx3 เพื่อติดตั้ง dependencies ที่จำเป็นทั้งหมด

## การสร้าง Release

KIDzUIx3 ใช้ [ProCMP] สำหรับประกอบไฟล์ในขั้นตอน build

- หากต้องการ build Release ด้วย [ProCMP] ให้ใช้ `pcmp pipeline/.pcmp.json` เพื่อรัน compositor ด้วย PCMP config จากนั้นเลือก build configuration ที่ต้องการ เช่น debug
- Artifacts ที่สร้างเสร็จจะอยู่ใน `generated/`

## ปัญหาที่พบบ่อย

??? question "ดาวน์โหลดซอร์ส KIDzUIx3 ได้อย่างไร?"
    ดาวน์โหลด ZIP จากหน้า Releases ของ [KIDzUIx3 repository] หรือหากมี `git` ให้รัน:

    ```bash
    git clone "https://github.com/KIDZ5/KIDzUIx3.git"
    ```

??? question "Terminal ไม่รู้จักคำสั่ง `#!bash aftman`"
    สาเหตุส่วนใหญ่มาจาก aftman ยังไม่อยู่ใน [environment variables] ให้เพิ่ม aftman ลงใน PATH แล้วเปิด Terminal ใหม่เพื่อให้ระบบอ่านค่าที่เปลี่ยน

??? question "`#!bash aftman install` ไม่ทำงานหรือเกิด error"
    ตรวจสอบว่า Terminal [cd] อยู่ในโฟลเดอร์ KIDzUIx3 เพราะ aftman จะค้นหา `aftman.toml` ในโฟลเดอร์ปัจจุบัน

??? question "Terminal ไม่รู้จักคำสั่ง `#!bash pcmp` เช่นกัน"
    เช่นเดียวกับ aftman หลัง `aftman install` เสร็จ เครื่องมือที่ติดตั้งต้องอยู่ใน PATH ให้เปิด Terminal ใหม่แล้วลองอีกครั้ง

??? question "ปัญหา `#!bash darklua` / Build error: `#!bash generated/release/dist.luau — system cannot find path`"
    darklua อาจติดตั้งไม่สมบูรณ์แม้ `aftman install` จะสำเร็จ ให้ตรวจสอบด้วยคำสั่ง:

    ```bash
    darklua --version
    ```

    หากคำสั่งเกิด error แสดงว่า aftman ติดตั้งแล้วแต่ยังไม่อยู่ใน PATH ให้เปิด Terminal ใหม่และลองอีกครั้ง

    หากยังไม่ทำงาน ให้ติดตั้ง darklua ด้วยตนเองจาก [หน้า Release v0.18.0](https://github.com/seaofvoices/darklua/releases/tag/v0.18.0) แล้วเพิ่มลงใน [environment variables]

??? question "Build เสร็จแล้วแต่หาไฟล์ output ไม่เจอ"
    ตรวจสอบโฟลเดอร์ `generated/` ภายใน KIDzUIx3 เพราะ artifacts จะถูกสร้างไว้ที่นี่เมื่อ pipeline ทำงานสำเร็จ
