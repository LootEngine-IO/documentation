# First-time setup

The first time you start LootEngine, it asks where DayZ is installed and which mods to read. You can change both later in **Settings** (the cog at the top right).

## Choose your DayZ game folder

LootEngine reads item names, descriptions, sizes and 3D models from the game’s own files, so it needs the folder DayZ is installed in. This is the game itself, not DayZ Server.

LootEngine fills this in for you when DayZ is in Steam’s default location. Otherwise, select **Browse** and pick the folder. It’s usually:

::: code-group

```text [Windows]
C:\Program Files (x86)\Steam\steamapps\common\DayZ
```

```text [Linux]
~/.steam/steam/steamapps/common/DayZ
```

:::

If you keep your Steam library on another drive, look for `steamapps\common\DayZ` there. In Steam you can also right-click DayZ and choose **Manage** › **Browse local files**.

The right folder has an `Addons` folder inside it.

## Tick the mods you use

Under **Mods**, LootEngine lists the mods it finds in the game’s `!Workshop` folder. Tick the ones your server runs, so their items show up with names and icons. Use **all** or **none** to tick or clear the whole list, and the filter box to find a mod by name.

You can skip this for now and come back to it. See [Loading mods](./mods) for more.

## Continue

Select **Continue**. LootEngine saves your settings and shows the start screen, where you [open a mission](./missions).

## Changing settings later

Open **Settings** from the cog in the top bar at any time. As well as the game folder and mods, it has:

- **Updates**: the release channel and a **Check for updates** button. See [Updating LootEngine](./updating).
- **Files that couldn’t be read**: shown only when some game or mod files couldn’t be read during the last scan. See [Troubleshooting](../help/troubleshooting#some-game-files-couldn-t-be-read).

When a mission is open and you change the game folder or mods, the button reads **Save and reload**. LootEngine rescans the game and keeps your open mission, including any unsaved changes.
