# การนำเข้าไลบรารี

## โหลดผ่าน HTTP

!!! note "หมายเหตุ"
    วิธีนี้ใช้ได้เฉพาะ environment ที่รองรับ `loadstring`

!!! warning "คำเตือน"
    หากนำเข้าจาก Release ล่าสุดตลอด อาจได้รับผลกระทบจาก deprecation หรือการเปลี่ยนแปลงของ API

วิธีนี้จะดาวน์โหลด Release แบบ dynamic ด้วย `loadstring` และ `HttpGet`

=== "Latest release"
    ```luau
    local function importRelease(owner, repo, version, file)
        local tag = (version == "latest" and "latest/download" or "download/"..version)

        return loadstring(game:HttpGetAsync(("https://github.com/%s/%s/releases/%s/%s"):format(owner, repo, tag, file)), file)()
    end

    local KIDzUIx3 = importRelease("KIDZ5", "KIDzUIx3", "latest", "dist.luau")
    ```

=== "Specific release"
    ```luau
    local function importRelease(owner, repo, version, file)
        local tag = (version == "latest" and "latest/download" or "download/"..version)

        return loadstring(game:HttpGetAsync(("https://github.com/%s/%s/releases/%s/%s"):format(owner, repo, tag, file)), file)()
    end

    local KIDzUIx3 = importRelease("KIDZ5", "KIDzUIx3", "{{LATEST_VERSION}}", "dist.luau")
    ```

=== "Cached loading"
    !!! warning "คำเตือน"
        environment ต้องรองรับ `writefile`, `readfile` และ `makefolder` หรือฟังก์ชัน filesystem ที่เทียบเท่า จึงจะใช้วิธีนี้ได้

    ```luau
    local function importReleaseCached(owner, repo, version, file)
        local tag = (version == "latest" and "latest/download" or "download/" .. version)
        local url = ("https://github.com/%s/%s/releases/%s/%s"):format(owner, repo, tag, file)

        local cacheFolder = ".cache"
        if not isfolder(cacheFolder) then
            makefolder(cacheFolder)
        end

        local cacheVersion = version:gsub("[^%w%-_%.]", "-")
        local cacheFile = file:gsub("[^%w%-_%.]", "-")
        local cachePath = ("%s/%s-%s"):format(cacheFolder, cacheVersion, cacheFile)

        if not isfile(cachePath) then
            writefile(cachePath, game:HttpGetAsync(url))
        end

        return loadstring(readfile(cachePath), file)()
    end

    local KIDzUIx3 = importReleaseCached("KIDZ5", "KIDzUIx3", "latest", "dist.luau")
    ```

> `importRelease` เป็นเพียง helper function หากไม่ต้องการใช้ สามารถใช้ `loadstring` กับ `HttpGet` เพื่อโหลด raw link ของ Release ได้โดยตรง

## Build ภายในเครื่อง

1. ดาวน์โหลด Release ที่ถูกต้องจาก [KIDzUIx3 Releases](https://github.com/KIDZ5/KIDzUIx3/releases)
2. นำโมดูล `luau` ไปวางในโปรเจกต์ เช่น ภายใต้ `packages/`

## การสร้างจากซอร์สโค้ด

อ่านต่อที่ [การสร้างจากซอร์สโค้ด](./building-from-source.md)
