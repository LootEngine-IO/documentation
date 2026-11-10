# Attachments and spawn chances

The right-hand column of the [Loadout Editor](./) lists every attachment slot the item has, what spawns in each, and how likely it is. This page covers adding attachments, setting their chances, and the groups you may find in existing files.

## How DayZ picks attachments

An item’s entry in `cfgspawnabletypes.xml` is a list of groups. Each group has a chance, and a list of items with chances of their own:

```xml
<type name="AKM">
    <attachments chance="0.50">
        <item name="KashtanOptic" chance="0.30" />
        <item name="PSO11Optic" chance="0.20" />
    </attachments>
</type>
```

When the item spawns, the economy goes through its groups. For each one it rolls the group’s chance, and if that succeeds, it picks one of the group’s items and puts it on the item. The items’ chances decide which one: they’re weighed against each other, so only their sizes relative to each other matter.

LootEngine shows each group under the slot its items go in. Here, the KA-M (`AKM`) spawns with an optic half the time; when it does, it’s the P1-87-L (`KashtanOptic`) three times out of five and the PSO-1-1 (`PSO11Optic`) two times out of five.

## The slots

Under **Slots**, each card is one of the item’s attachment slots in the game’s config:

- Its icon and name, such as **Optics** or **Magazine**. The icon is orange when something is set to spawn in the slot.
- The slot’s spawn chance next to its name, such as **50%**. A slot with two groups shows both, such as **5% + 100%**.
- The slot’s name in the game’s config, such as `weaponOpticsAK`, and how many items in the game fit it.

Hover over a card to light up its marker on the [3D view](./model), and click it to select it.

## Add an attachment

1. Select **+ Add** on an empty slot, or click the slot’s marker on the model.
2. Type to search the list. It only has items that fit that slot, with their icons, and the search matches names and class names.
3. Click one, or press <kbd>Enter</kbd> to add the first match.

![The attachment list open on the Vaiga’s empty Optics slot, searched for “pso”, showing the PSO-1, PSO-1-1 and PSO-6 scopes](/images/loadout-editor/attachment-picker.webp){.screenshot width=447}

The slot gets a spawn chance of 50%, which you can change, and the attachment is drawn on the model. If the item had no spawnable entry, LootEngine creates one. See [New entries](./files#new-entries).

## Spawn chance

Each filled slot has a **Spawn chance**: how likely it is that anything spawns in the slot at all.

- Drag the slider, or
- type a percentage from `0` to `100` in the box next to it and press <kbd>Enter</kbd>. <kbd>Esc</kbd> puts back the value you started with, and <kbd>↑</kbd> or <kbd>↓</kbd> change it by 1 (by 10 with <kbd>Shift</kbd>).

Hover over **Spawn chance** for a reminder of what it means.

## More than one choice

Select **+ Add another** to add more attachments to a slot. The list shows the ones already in the slot as **Added**. When the slot spawns, the economy picks one of them.

![The KA-M’s Optics slot: a 50% spawn chance, with the P1-87-L Scope at 30% (60% of picks) and the PSO-1-1 Scope at 20% (40% of picks)](/images/loadout-editor/slot-choices.webp){.screenshot width=415}

Each attachment then has its own chance in the box next to it. These are weights rather than percentages of the whole: what matters is each one’s share, which LootEngine shows under its name as **% of picks**. In the example, 30% and 20% make 60% and 40% of the picks, so with the slot’s 50% spawn chance, a KA-M comes with the P1-87-L 30% of the time (50% × 60%).

- A new attachment starts with the average of the others, so it gets an equal share.
- Item chances don’t have to add up to 100%. Some of Bohemia’s own files use values like `40.00` and `30.00`, which work the same as `0.40` and `0.30`.
- Hover over a chance box for a reminder of how they’re weighed.

## Remove attachments

- Select **×** next to an attachment to take it out. Taking out the last one empties the slot.
- Select **Clear slot** to empty the slot in one go.

## A second group for the same slot

Some entries have two groups for the same slot. The second can only fill the slot when the first didn’t spawn anything, so it works as a fallback. LootEngine shows the second group under the first, with a note.

![The SG5-K’s Handguard slot: a first group with the SG5-K Rail Handguard at 5%, and a second group with the SG5-K Polymer Handguard at 100%, noted as only spawning when the one above doesn’t](/images/loadout-editor/second-group.webp){.screenshot width=415}

In the vanilla files, the SG5-K (`MP5K`) gets the rail handguard 5% of the time and the polymer one the rest of the time, so it always spawns with a handguard. You edit each group the same way as any other. LootEngine doesn’t add second groups itself: **+ Add another** adds to the slot’s first group.

## Other groups

Groups that aren’t for one slot are listed under **Other groups**:

| Group | What it is | Can you edit it? |
| --- | --- | --- |
| **Mixed group** | Its items fit different slots. Each item shows the slot it goes in, and only one of them spawns | Yes, and you can add any item that fits one of the item’s slots |
| **Doesn’t fit this item** | None of its items fit any slot on this item, so they never spawn on it | Yes. Select **Remove group** to take it out |
| **Preset** | Uses a preset from `cfgrandompresets.xml` | No, it’s shown but not edited |
| **Cargo** | Items spawned in the item’s cargo rather than in a slot | No, it’s shown but not edited |

![The Scout’s Other groups: a 25% mixed group of four optics that go in the Optics slot and a suppressor that goes in the Suppressor slot](/images/loadout-editor/other-groups-mixed.webp){.screenshot width=447}

![The SK 59/66’s Other groups: a 10% group with the PSO-1 Scope and Kobra Sights, each marked “Fits no slot on this item”, with warnings underneath](/images/loadout-editor/other-groups-unfit.webp){.screenshot width=447}

Under each item, LootEngine says which slot it goes in, or that it fits no slot on this item, or that it isn’t in the scanned game data.

Groups that hold anything LootEngine doesn’t recognise are also shown but not edited, so nothing in them is lost. Edit them in a text editor.
