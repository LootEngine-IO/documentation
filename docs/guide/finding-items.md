# Finding items

A vanilla mission has thousands of items, and mods add more. The filters on the left help you find the ones you want. Filters only change what you see; they never change your files.

## Search

Type in **Search items** (or press **Ctrl**+**F**) to match items by name or class name. Every word you type has to match, in any order, so `m4 mag` finds the M4 magazines.

Press **Esc** in the search box, or select **×**, to clear it.

## Status

The list under the search box narrows the grid by where an item stands. The number next to each shows how many items match your other filters.

| Status | Shows |
| --- | --- |
| **All items** | Everything |
| **In loot files** | Items that are in the game and in a loot file |
| **Not in loot files** | Items that are in the game but in no loot file, so they never spawn |
| **Not in game data** | Loot entries for classes that weren’t found in the game or your ticked mods |
| **Has problems** | Items with an error or a warning. See [Checking for problems](./problems) |

## Kind

Pick one or more kinds, such as **Weapons**, **Clothing** or **Food & drink**, to see only those items.

Buildings and characters aren’t loot, so LootEngine hides the ones that aren’t in a loot file. Tick **Show buildings and characters not in loot** to see them too.

## Category, usage, value and mod

Further down are lists you can tick to narrow the grid:

- **Category**: the categories from your mission’s `cfglimitsdefinition.xml`, plus **No category**.
- **Usage**: where an item spawns, such as Military or Town.
- **Value**: the map tier, such as Tier1 to Tier4.
- **Mod**: Vanilla or one of your ticked mods.

Within one list, an item has to match any of the ticked names. Across lists, it has to match all of them. For example, ticking **Military** under Usage and **Tier4** under Value shows the items that spawn in military areas in Tier4.

A section’s heading shows how many names you’ve ticked in it. Click a heading to collapse or expand it.

## Sorting

Use **Sort** at the bottom of the panel to order the grid by:

- **Name**
- **Class name**
- **Nominal**, highest first
- **Mod**

## Clearing filters

Select **Reset** at the bottom of the panel to clear every filter. Your sort order stays as it is. When nothing matches, the grid also offers **Clear filters**.
