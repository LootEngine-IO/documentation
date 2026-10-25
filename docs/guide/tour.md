# A tour of the editor

Once a mission is open, LootEngine shows three panels under the top bar:

| Panel | Where | What it’s for |
| --- | --- | --- |
| **Filters** | Left | Search, narrow down and sort the items |
| **Card grid** | Middle | Every item, as a card |
| **Inspector** | Right | The selected item’s loot settings, ready to edit |

## The top bar

From left to right:

- **The mission name** and how many types files it loaded. Click it to switch to another mission. Hover over it to see the folder’s full path.
- **Scan summary**: how many game items were found, how many mods were read and how long the scan took.
- **Undo** and **Redo**.
- **Save**: reads **Save 2 files** (for example) when you have unsaved changes, and **Saved** when everything is on disk. Hover over it to see which files have changes.
- **Update**: appears when a new version of LootEngine is available.
- **Settings**: the cog.

## The card grid

The grid shows one card per item. The count above the grid says how many items match your filters.

Each card shows the item’s icon, name and class name, then:

- **Nom** and **Min**: its nominal and minimum counts.
- Its first **usage** (grey) and first **value** (green), with **+2** (for example) when there are more.
- The mod it comes from, in blue, when it isn’t a vanilla item.

The card’s look tells you its state at a glance:

| You see | It means |
| --- | --- |
| A solid border | The item is in a loot file |
| A dashed border and **Add to loot** | The item is in the game but in no loot file, so it never spawns |
| A red border and **Not in game data** | The item is in a loot file but wasn’t found in the game or your ticked mods |
| A blue dot, top left | You’ve edited it and haven’t saved yet |
| A red or amber dot, top right | It has an error or a warning. Hover over the dot to read it |

### Icons

Icons are rendered from each item’s 3D model the first time its card scrolls into view, then kept in a cache so they appear straight away next time.

When an item’s model can’t be drawn, the card shows the item’s inventory size as a grid of slots instead, with an icon for its kind (weapon, clothing, food and so on).

## The inspector

Select a card to open it in the inspector. At the top you’ll find:

- A larger icon, the item’s name and its class name. Select the copy button to copy the class name.
- Tags for the mod it comes from, its kind, its inventory size and the file and line its loot entry is on.
- The item’s in-game description.
- Any problems LootEngine found with its entry.

Below that are the loot settings. See [Editing loot items](./editing-items).

## Moving around

- Use the **arrow keys** to move the selection through the grid.
- Press **Esc** to clear the selection.
- Press **Ctrl**+**F** to jump to the search box.

All the shortcuts are on [Keyboard shortcuts](../reference/shortcuts).
