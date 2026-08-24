<!-- markdownlint-disable MD046 -->

# Themes

[KIDzUIx3 default dark theme]: <https://github.com/KIDZ5/KIDzUIx3/blob/main/src/themes/Dark.luau>
[KIDzUIx3 default light theme]: <https://github.com/KIDZ5/KIDzUIx3/blob/main/src/themes/Light.luau>

This section will teach you how to make your own Theme for KIDzUIx3.

## Getting started

The best way to get started, is simply copying an existing KIDzUIx3 theme. For example, if you wanted to make a dark-based theme you can copy the [KIDzUIx3 default dark theme], or, for a light-based theme, the [KIDzUIx3 default light theme].

Whichever one you choose, doing this pre-places all the required KIDzUIx3 theme keys to give you a starting point.

!!! tip
    Make sure to replace the imports with your actual references, for example, this:
    ```luau
    local creator = require("@modules/creator")
    ```

    might become:

    ```luau
    local KIDzUIx3 = require("@packages/KIDzUIx3")
    local creator = KIDzUIx3.Creator
    ```

## Using your own theme instead of a default theme

Now that you've created your theme, using it is very simple, find where you create your KIDzUIx3 `App`, and replace the Theme property with your new theme:

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

!!! tip
    It is not recommended to define your theme inline like it was done above. It's better practice to put your theme's in a seperate file, or simply defined somewhere else, this way your main definition dosen't get cluttered and polluted.
