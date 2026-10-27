# Loadout editor <Badge type="warning" text="In development" />

The loadout editor sets what an item spawns with: the optics, magazines, suppressors and other attachments that come on a weapon, and the condition it spawns in. It edits your mission’s `cfgspawnabletypes.xml`, with the item’s 3D model and attachment slots in front of you.

::: warning Not in the current build yet
The loadout editor isn’t in the current Early Access build of LootEngine yet. It will arrive in an Early Access update, first on the [beta channel](./updating#release-channels). This page describes how it works so far, and the details may change before it ships. Weapon loadouts come first, followed by zombie loadouts.
:::

## Opening the loadout editor

1. Select a weapon in the card grid.
2. In the inspector, find the **Attachments** section. It lists what the weapon spawns with now, one line per slot, with each slot’s chance. If the weapon has a damage range, that’s shown too.
3. Select **Edit attachments**, or **Add attachments** if the weapon doesn’t have a spawnable entry yet.

The **Attachments** section also appears for any other item that already has an entry in a spawnable types file.

The editor opens with the item’s 3D model on the left and its slots on the right. Select **Done** or press **Esc** to close it.

## The 3D model

The model shows a marker for each of the item’s attachment slots, linked to the slot’s name. Slots with something set to spawn in them are highlighted.

- **Drag** to turn the model.
- **Right-drag** to move it.
- **Scroll** to zoom.
- Select **Reset view** to go back to the starting view.

Click a slot’s marker to select it. If the slot is empty, the list of attachments that fit it opens straight away.

Some slots don’t have a place on the model. They’re still in the list, marked **not shown on the model**.

## Slots

The right-hand panel lists every attachment slot the item has in the game’s config, such as **Optics**, **Magazine** or **Muzzle**. Each slot shows its name in the game’s config (such as `weaponOptics`) and how many items fit it.

### Add an attachment

1. Select **+ Add** on an empty slot.
2. Search for an attachment. The list only shows items that fit that slot, with their icons.
3. Click one, or press **Enter** to add the first match.

The slot gets a spawn chance of 50%, which you can change.

### Spawn chance

Each filled slot has a **Spawn chance**: how likely it is that anything spawns in that slot at all. Drag the slider, or type a percentage from `0` to `100` in the box next to it.

### More than one choice

Select **+ Add another** to add more attachments to the same slot. When the slot spawns, the economy picks one of them.

Each attachment then has its own chance. These chances are weighed against each other, so what matters is each one’s share, which LootEngine shows as **% of picks**. For example, two optics at 30% and 10% get 75% and 25% of the picks. A new attachment starts with the average of the others, so it gets an equal share.

To take an attachment out, select **×** next to it. To empty the slot, select **Clear slot**.

### A second group for the same slot

Some entries have two groups for the same slot. The second only spawns something when the first doesn’t, so it works as a fallback. LootEngine shows these one under the other in the slot.

## Condition

Under **Condition**, set the range of damage the item spawns with. Select **Set a range** to start from 0% to 50%, then type the lowest and highest damage. 0% is pristine and 100% is ruined; each spawned item gets a damage somewhere in the range.

Select **Clear** to remove the range.

## Other groups

Groups that aren’t for one slot are listed under **Other groups**:

| Group | What it is |
| --- | --- |
| **Mixed group** | Its items fit different slots. Each item shows the slots it goes in |
| **Doesn’t fit this item** | None of its items fit any slot on this item |
| **Preset** | Uses a preset from `cfgrandompresets.xml`. Shown but not edited |
| **Cargo** | Items spawned in the item’s cargo rather than in a slot. Shown but not edited |

## Which file it edits

LootEngine loads `cfgspawnabletypes.xml` from the mission folder, plus any files listed in `cfgeconomycore.xml` with `type="spawnabletypes"`.

When you add attachments to an item that has no spawnable entry yet, LootEngine creates one:

- in the spawnable types file in the same folder as the item’s types file, when there is one (so a mod’s files stay together)
- otherwise in `cfgspawnabletypes.xml`

The editor’s header shows the file and line the entry is on.

## Undo, save and backups

Loadout changes work like any other edit. **Ctrl**+**Z** undoes them, **Ctrl**+**S** saves them, and saving backs up the spawnable types files along with your types files. Only the characters you change are written.

## Problems

The loadout editor checks:

- that chances are between 0% and 100%, and damage between 0% and 100%
- that the lowest damage isn’t above the highest
- that each group has at least one item
- that each attachment exists in the game data and can spawn

Problems show under the group or section they’re about, and in the **Attachments** section of the inspector.

## If you can’t edit attachments

- **This mission has no cfgspawnabletypes.xml, so attachments can’t be added.** Add a `cfgspawnabletypes.xml` to the mission folder. The vanilla missions all have one.
- **The file has an XML error on line *N*.** Fix it in a text editor, then restart LootEngine.
