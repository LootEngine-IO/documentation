# Editing loot items

Select an item’s card to open its loot settings in the inspector on the right. Changes apply as you make them, and stay unsaved until you [save](./saving).

Hover over any field’s label to see what it does. There’s also a full list on [Loot fields](../reference/fields).

## Numbers

The inspector groups the numbers into two sections:

- **Spawning**: **Nominal**, **Min**, **Lifetime** and **Restock**
- **Quantity and cost**: **Quant min**, **Quant max** and **Cost**

To change one, click the field and type a whole number. Then:

- press **Enter** or click elsewhere to apply it
- press **Esc** to put back the value you started with
- press **↑** or **↓** to go up or down by 1, or hold **Shift** to go by 10

**Lifetime** and **Restock** are in seconds. LootEngine shows them in friendlier units next to the field, so `14400` reads as **4 h** and `3888000` as **45 d**.

For **Quant min** and **Quant max**, `-1` means the item has no quantity, and shows as **n/a**. Otherwise they’re a percentage from `0` to `100`.

When a number breaks a rule, such as **Min** being higher than **Nominal**, the field turns red or amber and explains what’s wrong underneath. See [Checking for problems](./problems).

## Flags

Under **Flags**, switch each flag on or off:

| Flag | When it’s on |
| --- | --- |
| **Count in map** | Items lying in the world count toward nominal |
| **Count in cargo** | Items inside containers (backpacks, crates, vehicles) count toward nominal |
| **Count in hoarder** | Items in stashes, tents and barrels count toward nominal |
| **Count in player** | Items in player inventories count toward nominal |
| **Crafted** | The item is made by crafting and isn’t spawned by the economy |
| **Dynamic event loot** | The item spawns only at dynamic events, such as helicopter crashes |

## Category

Pick a category from the list, or **No category**. The list comes from your mission’s `cfglimitsdefinition.xml`.

## Usage, value and tag

These three decide where an item can spawn:

- **Usage**: the kinds of places, such as Military, Police or Farm
- **Value (map tier)**: the map’s tiers, such as Tier1 near the coast to Tier4 inland
- **Tag (placement)**: where in a building, such as floor or shelves

Each one shows the current names as chips:

- To add a name, select **+ Add**, start typing to find it, then click it or press **Enter** to add the first match.
- To remove a name, select **×** on its chip.

The list only offers names your mission defines in `cfglimitsdefinition.xml`, so you can’t add a typo. Groups from `cfglimitsdefinitionuser.xml` appear with a people icon and list the names they contain. Hover over a group’s chip to see them again.

A chip turns red when its name isn’t defined in your limits files. Remove it, or add the name to your limits file.

::: tip
If your mission has no `cfglimitsdefinition.xml`, there’s nothing to offer. Type the name and press **Enter** to add it as you typed it.
:::

## Undo and redo

Every change can be undone, in order, across all your types files:

- **Undo**: **Ctrl**+**Z**, or the undo button in the top bar
- **Redo**: **Ctrl**+**Y** or **Ctrl**+**Shift**+**Z**, or the redo button

When you undo or redo, LootEngine selects the item that changed, so you can see what happened.

Undoing your way back to how a file was when you last saved marks it as saved again.

## When you can’t edit an item

- **The item isn’t in a loot file yet.** The inspector shows **Add to loot file** instead of the fields. See [Adding and removing items](./adding-items).
- **Its types file has an XML error.** The fields are greyed out. LootEngine opens a file with broken XML read-only, so it can’t make things worse. When the mission opens, it tells you the file and the line to look at. Fix it in a text editor, then restart LootEngine.
