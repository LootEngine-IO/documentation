# Files, saving and problems

What the [Loadout Editor](./) reads and writes, how its changes are saved, and what it checks.

## Which files it edits

LootEngine loads `cfgspawnabletypes.xml` from the mission folder, plus any files listed in `cfgeconomycore.xml` with `type="spawnabletypes"`, such as a mod’s:

```xml
<ce folder="custom">
    <file name="mod_spawnable.xml" type="spawnabletypes" />
</ce>
```

The header above the 3D view, and the **Attachments** section of the Loot Editor’s inspector, show the file and line the item’s entry is on, such as `cfgspawnabletypes.xml:2674`.

If an item has more than one entry across these files, LootEngine shows and edits the last one, and says so with a warning on the item.

### New entries

When you add an attachment or a damage range to an item that has no spawnable entry yet, LootEngine creates one:

- in the spawnable types file in the same folder as the item’s types file, when there is one, so a mod’s files stay together
- otherwise in `cfgspawnabletypes.xml`

## Undo, save and backups

Loadout changes work like any other edit in LootEngine:

- <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes them and <kbd>Ctrl</kbd>+<kbd>Y</kbd> redoes them. Undoing a change to another weapon opens that weapon.
- An edited weapon gets a blue dot in the weapon list, and the **Save** button in the top bar counts the files with changes.

![The top bar’s Save 1 file button, next to Undo and Redo](/images/loadout-editor/save-button.webp){.screenshot width=330}

- <kbd>Ctrl</kbd>+<kbd>S</kbd> or **Save** saves every changed file, spawnable types files and types files together.

Saving backs up the spawnable types files along with your types files, in `.loot-editor-backups`. See [Restoring from a backup](../backups).

Only the characters you change are written. Everything else in the file, including comments, formatting and entries LootEngine doesn’t edit, stays exactly as it was.

## Problems

The Loadout Editor checks each item’s entry for:

- spawn chances outside 0% to 100%, and attachment chances below 0
- damage outside 0% to 100%, or a lowest damage above the highest
- numbers that aren’t numbers
- groups with no items, which never spawn anything
- attachments that aren’t in the scanned game data, or that can’t spawn
- attachments that don’t fit any slot on the item
- a second group for a slot that already has one, and mixed groups, which are fine but worth knowing about
- items with more than one entry

Problems show under the group or section they’re about, and in the **Attachments** section of the inspector. Errors are red, warnings are amber, and notes that aren’t problems are blue. See [Checking for problems](../problems) for problems with your loot settings.

## If you can’t edit attachments

When attachments can’t be edited, the right-hand column says why, and the controls are switched off.

- **This mission has no cfgspawnabletypes.xml, so attachments can’t be added.** Add a `cfgspawnabletypes.xml` to the mission folder. The vanilla missions all have one.
- ***File* has an XML error on line *N*. Fix it to edit attachments.** Fix it in a text editor, then restart LootEngine.
