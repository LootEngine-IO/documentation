# Troubleshooting

If something here doesn’t help, ask in the [Discord](https://discord.gg/N2tYjZuNNV) or see [Support](./support).

## Setting up

### LootEngine didn’t find my game folder

LootEngine looks in Steam’s default install locations. If DayZ is in another Steam library, select **Browse** in **Settings** and pick the DayZ folder yourself. In Steam, right-click DayZ and choose **Manage** › **Browse local files** to find it.

### “game folder … has no Addons folder”

The folder you chose isn’t the DayZ game folder. Pick the folder that has `Addons` directly inside it, usually `steamapps/common/DayZ`.

### “No mods found in the game’s !Workshop folder”

LootEngine finds mods in the DayZ game folder’s `!Workshop` folder, which the DayZ Launcher fills with your Workshop subscriptions. Open the DayZ Launcher once after subscribing. For mods kept elsewhere, see [Where LootEngine looks for mods](../guide/mods#where-lootengine-looks-for-mods).

## Opening a mission

### “… is not a mission folder (no cfgeconomycore.xml or db/types.xml)”

You picked a folder above or below the mission. Choose the mission folder itself, such as `mpmissions/dayzOffline.chernarusplus`, not `mpmissions` or `db`.

### “… is not UTF-8 text; it can’t be edited safely”

A types file uses an older text encoding. Open it in a text editor such as Notepad++ or Visual Studio Code, save it with UTF-8 encoding, then try again.

### “cfgeconomycore.xml lists …, but the file doesn’t exist.”

`cfgeconomycore.xml` points at a types file that isn’t there. Check the `folder` and `name` in its `<ce>` block against the files in your mission folder. Folder and file names must match exactly on Linux servers, including upper and lower case. LootEngine carries on without the missing file.

### “… has an XML error on line …. It is read-only until fixed.”

The file has broken XML, such as a missing closing tag or a stray `<`. LootEngine opens it read-only so it can’t make things worse. Open the file in a text editor, go to the line it names (the mistake is often just above it), fix it, then restart LootEngine.

### The mission opens, but changes I made outside LootEngine don’t show

LootEngine reads the mission’s files when you first open it, and keeps that copy while it’s running. Restart LootEngine to read the files again.

## Items

### Lots of my loot shows as “Not in game data”

These entries are for classes LootEngine didn’t find in the game or your ticked mods. Usually:

- **The mod isn’t ticked.** Open **Settings**, tick the mod under **Mods** and select **Save and reload**.
- **The class name is misspelt** in the types file.
- **The class has been removed** by a game or mod update. You can safely remove these entries.

### A mod’s items show as “Not in loot files”

The mod’s items are loaded, but your mission has no loot entries for them. Add the mod’s types file to your mission (see [Load the mod’s types file](../guide/mods#load-the-mod-s-types-file)), or add the items one at a time with **Add to loot**.

### An item shows a grid of squares instead of an icon

LootEngine couldn’t draw the item’s model, so it shows the item’s inventory size instead. This happens with models that aren’t binarised and models whose files are missing. It doesn’t affect editing.

### Icons look out of date

Icons are re-rendered when the game or a mod updates. If one still looks wrong, close LootEngine and delete the [icon cache](../reference/files#icon-cache).

### Some game files couldn’t be read

When the mission opens, LootEngine may say that some game files couldn’t be read. Open **Settings** to see them under **Files that couldn’t be read**, with the mod each one came from and why.

This is usually a mod that protects or obfuscates its PBO files. LootEngine skips those files and carries on, so items from them may be missing or have no icon. Their loot entries can still be edited.

### A usage, value or tag I need isn’t in the list

The list only offers names defined in your mission’s `cfglimitsdefinition.xml` (and groups from `cfglimitsdefinitionuser.xml`). Add the name to that file in a text editor, then restart LootEngine.

## Saving

### “Changed on disk since it was opened”

A file you edited was changed by something else after LootEngine opened it: a text editor, another copy of LootEngine, a file sync tool or an upload from your server. LootEngine stops rather than overwrite those changes, and nothing is saved.

To carry on:

1. Make a note of the changes you made in LootEngine.
2. Close LootEngine and choose **Quit without saving**.
3. Open LootEngine and the mission again. It now has the file as it is on disk.
4. Make your changes again, and save.

To avoid this, don’t edit the same files elsewhere while they’re open in LootEngine.

### Saving fails with a permissions error

LootEngine can’t write to the mission folder. Check that:

- the folder isn’t read-only
- you have permission to write to it (on Windows, a folder under `Program Files` may need you to run LootEngine as administrator, or to copy the mission somewhere in your user folder)
- no other program has the file open and locked

### My changes don’t show up in game

The DayZ server reads its loot files when it starts. After saving:

- **Restart the server.**
- **Check it’s the same mission folder.** The folder name in LootEngine’s top bar should match the mission in your server’s `serverDZ.cfg`. Hover over it to see the full path.
- **For a hosted server**, upload the changed files to the server’s mission folder first.

Some changes, such as a higher nominal, take a while to show as the economy spawns new items over time.

## Updates

### “Updates are only available in installed builds”

See [Updating LootEngine](../guide/updating#updates-are-only-available-in-installed-builds).

### “Couldn’t check for updates”

LootEngine couldn’t reach the update server. Check your internet connection or firewall, then select **Check for updates** in **Settings** to try again. Everything else in LootEngine works offline.

### “Save or undo your changes first”

Installing an update restarts LootEngine. Save your changes with **Ctrl**+**S**, or undo them, then select **Install and restart**.

## Starting again

To reset LootEngine to how it was on first start, close it and delete its [settings file](../reference/files#settings). Your missions and backups aren’t affected.
