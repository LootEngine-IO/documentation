# Adding and removing items

An item only spawns when it’s in a loot file. LootEngine shows you every item in the game and your ticked mods, including the ones your loot files leave out, so you can add them.

## Finding items that aren’t in loot

Items that aren’t in any loot file have a dashed border and an **Add to loot** button. To see only these, select **Not in loot files** in the [filters](./finding-items).

These are often new items from a mod you’ve just installed, or items that Bohemia left out of the vanilla loot table on purpose.

## Adding an item

Either:

- select **Add to loot** on the item’s card, or
- select the item, then select **Add to loot file** in the inspector.

LootEngine starts the new entry from the closest relative that’s already in your loot files. For example, a new colour of a T-shirt copies the values of another colour. When it does, a message tells you which item the values were copied from.

When there’s no relative to copy, the new entry starts with these values:

| Field | Value |
| --- | --- |
| Nominal | `0` |
| Min | `0` |
| Lifetime | `14400` (4 hours) |
| Restock | `0` |
| Quant min, Quant max | `-1` |
| Cost | `100` |
| Flags | Count in map |
| Category | A suggestion from the item’s kind, such as `weapons` or `food`, when your mission defines it |

::: warning Set a nominal
An item with a nominal of `0` doesn’t spawn. After adding an item from defaults, set its **Nominal** and **Min**, and give it at least one **Usage** or **Tag** so the economy knows where to put it.
:::

### Which file it goes in

When your mission has more than one types file, the inspector lets you choose the file to add to. Leave it on **Choose a file automatically** and LootEngine uses the file its relative is in, or `db/types.xml` when there’s no relative.

Adding to a mod’s own types file keeps that mod’s items together, which makes them easier to find and to remove later.

New entries are added at the end of the file, with the same indentation and line endings as the rest of it.

## Removing an item

Select the item, then select **Remove from loot file** at the bottom of the inspector. The item’s entry is taken out of its types file, so the economy stops spawning it.

The item stays in the grid with a dashed border, so you can add it back. You can also undo the removal with **Ctrl**+**Z**.

If you remove an entry for a class that isn’t in the game data (a red card), it disappears from the grid, since there’s nothing left to show.

::: tip To stop an item spawning but keep its settings
Set its **Nominal** and **Min** to `0` instead of removing it. That keeps its entry, so you can bring it back later with the same values.
:::

## Items defined more than once

When the same class is in more than one types file, the server uses the last one it loads. LootEngine shows a warning listing the files, edits that last definition, and shows how many definitions there are at the bottom of the inspector.

**Remove from loot file** removes the definition in use, and the one before it then takes over. To keep one definition and drop the others, delete the extra entries in a text editor, then restart LootEngine.
