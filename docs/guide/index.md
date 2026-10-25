# Introduction

LootEngine is a desktop editor for DayZ’s Central Economy. It reads every spawnable item from your game and mods, shows each one as a card with its rendered 3D icon next to its loot settings, and saves your changes back to `types.xml`.

You don’t need to run the game or a server. LootEngine works entirely offline, from the files on your PC.

## What it edits

DayZ decides what loot spawns, how much and where from the **types files** in a mission folder: `db/types.xml`, plus any extra types files your mission lists in `cfgeconomycore.xml` (mods usually add one).

LootEngine opens all of them together, so you edit one list of items rather than juggling files. For each item you can set:

- how many should be in the world (**nominal** and **min**)
- how long it stays before cleanup (**lifetime**) and how soon it comes back (**restock**)
- how full it spawns (**quant min** and **quant max**)
- which counts it’s part of (the **flags**)
- its **category**, and where it spawns (**usage**, **value** and **tag**)

The names you can pick from come from your mission’s own `cfglimitsdefinition.xml` and `cfglimitsdefinitionuser.xml`, so LootEngine only offers what your mission defines.

## Your files are safe

LootEngine is built so that saving never makes a mess of your files:

- **Only what you change, changes.** Comments, formatting, line endings and anything LootEngine doesn’t recognise stay exactly as they were.
- **Every save keeps a backup.** The previous version of each file goes into a timestamped folder in `.loot-editor-backups`, inside the mission folder.
- **No accidental overwrites.** If a file changed on disk after LootEngine opened it, saving stops rather than overwriting someone else’s work.

## What you need

- A Windows or Linux PC.
- DayZ installed through Steam. LootEngine reads item data, names and models from the game’s own files.
- The mission folder you want to edit, such as `dayzOffline.chernarusplus` from a DayZ Server install, or a copy of your server’s mission folder.

It works with any map that has a `types.xml`: Chernarus, Livonia, Sakhal and community maps alike.

## Where to next

1. [Install LootEngine](./installing)
2. [Set it up](./setup) with your DayZ folder and mods
3. [Open a mission](./missions) and [take a tour](./tour) of the editor
