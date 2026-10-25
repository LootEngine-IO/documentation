# Loading a mission folder

Every time LootEngine starts, it opens on the start screen, where you choose the mission to edit.

## What a mission folder is

A mission folder holds a map’s Central Economy files. On a DayZ server they live in `mpmissions`, one folder per map:

```text
DayZServer/
└── mpmissions/
    ├── dayzOffline.chernarusplus/   ← a mission folder
    ├── dayzOffline.enoch/
    └── dayzOffline.sakhal/
```

Open the mission folder itself (such as `dayzOffline.chernarusplus`), not `mpmissions`. LootEngine expects a `cfgeconomycore.xml` or a `db/types.xml` inside it.

::: tip Try it on a copy first
Copy your mission folder and open the copy the first time you use LootEngine. When you’re happy with the result, copy the files back or point your server at the copy. Every save also keeps a [backup](./backups).
:::

## Opening a mission

The start screen gives you a few ways in:

- **Open recent mission** reopens the mission you used last.
- **Open mission folder** lets you browse for a folder.
- **Recent missions** lists the last eight missions you opened, newest first. Click one to open it. Hover over a mission and select **×** to remove it from the list. This doesn’t touch the folder.
- **In your DayZ Server install** appears when DayZ Server is installed next to the game in Steam. It lists that install’s missions you haven’t opened yet.

LootEngine then scans the game and your ticked mods. You’ll see it open the archives, read the configs and build the item catalogue. This takes a few seconds, depending on how many mods you use. Scanning only reads files; nothing is changed.

## What gets loaded

From the mission folder, LootEngine reads:

| File | What it’s used for |
| --- | --- |
| `db/types.xml` | The main loot table |
| Types files listed in `cfgeconomycore.xml` | Extra loot tables, usually added for mods |
| `cfgeconomycore.xml` | Which types files to load, and the economy’s root classes |
| `cfglimitsdefinition.xml` | The categories, usages, values and tags you can pick from |
| `cfglimitsdefinitionuser.xml` | Named groups of usages and values |

The top bar then shows the mission’s name and how many types files it loaded, followed by how many game items were found, how many mods were read and how long the scan took.

### Extra types files

Mods often come with their own types file, which you add to the mission and list in `cfgeconomycore.xml`:

```xml
<economycore>
    <!-- … -->
    <ce folder="custom">
        <file name="mymod_types.xml" type="types" />
    </ce>
</economycore>
```

LootEngine loads every file listed with `type="types"`, so these items appear alongside the vanilla ones. When an item is defined in more than one file, the server uses the last definition, and LootEngine edits that one too.

If `cfgeconomycore.xml` lists a file that doesn’t exist, LootEngine tells you when the mission opens and carries on without it.

## Switching to another mission

Click the mission name in the top bar to go back to the start screen, then open another mission.

You need to [save](./saving) or undo your changes first. LootEngine won’t switch missions while there are unsaved changes.

## If the mission won’t open

LootEngine shows what went wrong, with buttons to go **Back to start**, **Change settings** or **Try again**. The most common causes are covered in [Troubleshooting](../help/troubleshooting#opening-a-mission).
