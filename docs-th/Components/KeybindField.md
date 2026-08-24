# KeybindField — คอมโพเนนต์ KeybindField

`KeybindField` เป็นช่องสำหรับรับและเก็บ `Enum.KeyCode` จาก `InputObject` และเรียก callback เมื่อผู้ใช้กด KeyCode ที่บันทึกไว้

![Component preview](../assets/component_field.png)

## สรุป

### คุณสมบัติ

 | คุณสมบัติ | ชนิด | คำอธิบาย | 
 | ------------- | ---------------------- | ----------------------------------------------------------------------------- | 
 | `Placeholder` | `#!luau string?` | ข้อความ placeholder ที่ใช้บอกผู้ใช้ว่าควรโต้ตอบกับคอมโพเนนต์อย่างไร | 
 | `Value` | `#!luau Enum.KeyCode?` | KeyCode เริ่มต้นที่ `KeybindField` จะผูกไว้ | 

[ดูรายการทั้งหมดที่สืบทอดจาก `BaseComponent`](./index.md/#properties)

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-properties)

### เมธอด

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-methods)

### อีเวนต์

 | อีเวนต์ | รูปแบบ | คำอธิบาย | 
 | -------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | 
 | `BindPressed` | `#!luau ((self: KeybindField, value: Enum.KeyCode, inputComplete: boolean, gameProcessedEvent: boolean) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อกด KeyCode ที่อยู่ใน `Value` | 
 | `ValueChanged` | `#!luau ((self: KeybindField, value: Enum.KeyCode) -> unknown)?` | ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ property `Value` ถูกเปลี่ยน | 

[ดูรายการทั้งหมดที่สืบทอดจาก `Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame#summary-events)

## ชนิดข้อมูล

```luau
type KeybindFieldProperties = Frame & {
    Placeholder: string?,
    Value: Enum.KeyCode?,
    BindPressed: ((
        self: KeybindField,
        value: Enum.KeyCode,
        inputComplete: boolean,
        gameProcessedEvent: boolean
    ) -> unknown)?,
    ValueChanged: ((self: KeybindField, value: Enum.KeyCode) -> unknown)?,
}

type KeybindField = BaseComponent & Components & KeybindFieldProperties
```

### รูปแบบฟังก์ชัน

```luau
function(self, properties: KeybindFieldProperties?): KeybindField
```

## ตัวอย่าง

```luau
local keybindField = row:Right():KeybindField({
    ValueChanged = function(self, value: Enum.KeyCode)
        print("Value changed:", value)
    end,
    BindPressed = function(
        self,
        value: Enum.KeyCode,
        inputComplete: boolean,
        gameProcessedEvent: boolean
    )
        if not inputComplete or gameProcessedEvent then
            return
        end

        print("Pressed bind:", value)
    end,
})

print(keybindField:IsA("Frame")) --> true
print(keybindField.ClassName) --> "Frame"
print(keybindField.Type) --> "KeybindField"

keybindField.Value = Enum.KeyCode.Z --> Value changed: Enum.KeyCode.Z
```
