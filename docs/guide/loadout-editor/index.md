# Loadout Editor

The Loadout Editor sets what an item spawns with: the optics, magazines, suppressors and other attachments that come on a weapon, how likely each one is, and the condition the item spawns in. It edits your mission’s `cfgspawnabletypes.xml`, with the item’s 3D model and attachment slots in front of you.

[![The Loadout Editor with the M4-A1 open: the weapon list on the left, the rifle’s 3D model with a marker for each attachment slot in the middle, and its condition and slots on the right](/images/loadout-editor/loadout-editor.webp){.screenshot}](/images/loadout-editor/loadout-editor.webp)

## The Loadout Editor page

Once a mission is open, the top bar has two tabs: **Loot Editor**, for the loot settings in your types files, and **Loadout Editor**.

![The Loot Editor and Loadout Editor tabs in the top bar, with the Loadout Editor selected](/images/loadout-editor/page-tabs.webp){.screenshot width=414}

Select **Loadout Editor** to open it. The page has three columns:

| Column | Where | What it’s for |
| --- | --- | --- |
| **Weapons** | Left | Every weapon in the game data, to choose from |
| **3D view** | Middle | The weapon’s model, with a marker for each attachment slot. See [The 3D view](./model) |
| **Condition and slots** | Right | The damage the weapon spawns with, its slots and what spawns in each. See [Attachments and spawn chances](./attachments) and [Spawn condition](./condition) |

Both tabs share the selection: a weapon you select in the Loot Editor is already open when you switch to the Loadout Editor, and the other way round. If the item selected in the Loot Editor isn’t a weapon, the Loadout Editor asks you to choose one.

## Choosing a weapon

![The weapon list searched for “KA-”, showing the KA-74, KA-101 and KA-M rifles with the KA-M selected](/images/loadout-editor/weapon-list.webp){.screenshot width=320}

The list on the left has every weapon LootEngine found in the game and your ticked mods, sorted by name, whether or not it’s in your loot files. The count above it says how many weapons match your search.

- Type in **Search weapons** to narrow the list down. The search matches the weapon’s name and class name, and every word you type has to match.
- Select a weapon to open it. Use <kbd>↑</kbd> and <kbd>↓</kbd> to move through the list, from the search box too.
- The number on the right of a weapon is how many attachment groups it spawns with. Weapons with no number don’t spawn with anything yet.
- A blue dot means you’ve edited the weapon and haven’t saved yet.

The header above the 3D view shows the weapon’s name, its class name, and the file and line its entry is on, such as `cfgspawnabletypes.xml:2674`. A weapon that isn’t in a spawnable types file yet says so instead:

![The header for the KA-101 (AK101_Black): “Not in a spawnable types file yet. Adding an attachment creates its entry.”](/images/loadout-editor/no-entry-yet.webp){.screenshot width=720}

Adding an attachment or a damage range creates the entry. See [New entries](./files#new-entries) for which file it goes in.

## Editing items that aren’t weapons

The weapon list only has weapons. Other items with attachment slots, such as helmets, vests and vehicles, are edited from the Loot Editor:

1. Select the item in the card grid.
2. In the inspector, find the **Attachments** section. It lists what the item spawns with now, one line per slot with its chance, and its damage range if it has one.
3. Select **Edit attachments**, or **Add attachments** if it’s a weapon without a spawnable entry yet.

![The Attachments section of the inspector for the KA-M, listing its buttstock, handguard, optics, suppressor and magazine with their chances, the damage range, and the Edit attachments button](/images/loadout-editor/inspector-attachments.webp){.screenshot width=367}

The **Attachments** section appears for every weapon, and for any other item that already has an entry in a spawnable types file.

The editor opens in a window over the Loot Editor, with the same 3D view, condition and slots as the Loadout Editor page. Select **Done** or **×**, or press <kbd>Esc</kbd>, to close it.

[![The Tactical Helmet’s attachments open in the editor window, with night vision goggles drawn on the helmet and its Night Vision Goggles and Flashlight slots on the right](/images/loadout-editor/loadout-dialog.webp){.screenshot}](/images/loadout-editor/loadout-dialog.webp)

## A first loadout

As an example, here’s how to give the Vaiga shotgun a chance of spawning with a Kobra sight.

1. Select the **Loadout Editor** tab.
2. Type `saiga` in **Search weapons** and select **Vaiga**.
3. On the model, click the **Optics** marker. The slot is empty, so the list of optics that fit it opens straight away.
4. Type `kobra` and press <kbd>Enter</kbd>.

The **Optics** slot now has a 50% spawn chance with the Kobra Sights in it, and the sight is drawn on the model. The Vaiga gets a blue dot in the list, and the **Save** button shows that `cfgspawnabletypes.xml` has changes.

[![The Vaiga after adding the Kobra Sights: the sight is drawn on the shotgun, the Optics slot shows a 50% spawn chance, the Vaiga has a blue dot in the weapon list, and the top bar reads Save 1 file](/images/loadout-editor/attachment-added.webp){.screenshot}](/images/loadout-editor/attachment-added.webp)

5. Drag the **Spawn chance** slider, or type a percentage in the box next to it, to change how often the sight spawns.
6. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save.

## Keyboard shortcuts

| Shortcut | What it does |
| --- | --- |
| <kbd>↑</kbd> <kbd>↓</kbd> | Move between weapons. Works in the search box, and anywhere on the page except a text box or an open list |
| <kbd>Ctrl</kbd>+<kbd>F</kbd> | Jump to **Search weapons** |
| <kbd>Esc</kbd> | In **Search weapons**, clear the search. In the editor window, close it |
| <kbd>Enter</kbd> | In an attachment list, add the first match |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>+<kbd>Y</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Save every changed file |

The percentage boxes work like the number fields elsewhere in LootEngine. See [Keyboard shortcuts](../../reference/shortcuts#in-a-number-field).

## In this section

- [The 3D view](./model): turning the model, the slot markers and showing attachments on it
- [Attachments and spawn chances](./attachments): adding attachments, setting how likely they are, and the groups in your files
- [Spawn condition](./condition): the range of damage an item spawns with
- [Files, saving and problems](./files): which files are edited, saving, and what LootEngine checks
