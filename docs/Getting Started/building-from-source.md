# Building From Source

[aftman]: <https://github.com/LPGhatguy/aftman>
[environment variables]: <https://www.howtogeek.com/787217/how-to-edit-environment-variables-on-windows-10-or-11/>
[cd]: <https://en.wikipedia.org/wiki/Cd_(command)>
[KIDzUIx3 repository]: <https://github.com/KIDZ5/KIDzUIx3>
[ProCMP]: <https://github.com/Proton-Utilities/ProCMP>

Before we do anything, open a terminal and set its [cd] to the KIDzUIx3 source repo. You can download a release from the official [KIDzUIx3 repository].
!!! tip
    You can use `#!bash git clone "https://github.com/KIDZ5/KIDzUIx3.git"` if you have `git` installed

## Installing [aftman] & dependencies

Aftman is a package manager, it will help you automatically install all the required dependencies that are needed to build KIDzUIx3.

1. First, you must install [aftman] if you don't already have it.

    > Ensure it's in your [environment variables], this lets us access [aftman] from a terminal.

2. Run `aftman install` in the KIDzUIx3 directory to install all required dependencies

## Building a release

KIDzUIx3 uses [ProCMP] for build composition.

- To build a release with [ProCMP], use `pcmp pipeline/.pcmp.json`, this will run the compositor program using our PCMP config. After this, you can select from a build configuration, such as debug.
- Artifacts will appear in `generated/`.

## Common mistakes

??? question "How do I get the KIDzUIx3 source downloaded?"
    Either download the zip from the [KIDzUIx3 repository] releases page, or if you have `git` just run:

    ```bash
    git clone "https://github.com/KIDZ5/KIDzUIx3.git"
    ```

??? question "`#!bash aftman` isn't being recognized in my terminal"
    It's probably not in your [environment variables]. Add aftman to your PATH and restart your terminal, it won't pick up the change otherwise.

??? question "`#!bash aftman install` isn't doing anything / errors out"
    Make sure your terminal is [cd]'d into the KIDzUIx3 directory, not just somewhere on your system. aftman looks for `aftman.toml` in the current folder.

??? question "`#!bash pcmp` isn't recognized either"
    Same deal as aftman, after `aftman install` finishes, the tools it installed need to be in your PATH. Restart your terminal and try again.

??? question "`#!bash darklua` issues / Build error: `#!bash generated/release/dist.luau — system cannot find path`"
    darklua probably didn't install properly even if `aftman install` ran fine. Check by running:

    ```bash
    darklua --version
    ```

    If that errors out, aftman installed it but it's not in your PATH yet. Try restarting your terminal first and running it again.

    If it still doesn't work, just install darklua manually from the [v0.18.0 release page](https://github.com/seaofvoices/darklua/releases/tag/v0.18.0) and add it to your [environment variables] yourself.

??? question "build finished but I can't find the output"
    Check `generated/` in the KIDzUIx3 directory, that's where artifacts land after a successful pipeline run.
