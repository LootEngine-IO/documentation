# Saving your changes

Your edits stay in LootEngine until you save. The **Save** button at the top right shows how many files have changes. Hover over it to see which.

## How to save

Press **Ctrl**+**S**, or select **Save** in the top bar. If you were part-way through typing in a field, that value is applied first.

LootEngine confirms how many files it saved. The button then reads **Saved**, and the blue dots on edited cards go away.

Only files you changed are written. A mission with five types files and an edit in one saves just that one.

## What happens when you save

For each changed file, LootEngine:

1. **Checks it hasn’t changed on disk.** If the file was changed by something else since LootEngine opened it, such as a text editor or another copy of LootEngine, saving stops and nothing is written. See [“Changed on disk since it was opened”](../help/troubleshooting#changed-on-disk-since-it-was-opened).
2. **Backs up the current version** into a new folder in `.loot-editor-backups` inside the mission folder. See [Restoring from a backup](./backups).
3. **Writes the new version** to a temporary file, then swaps it into place. If something goes wrong part-way, such as the disk filling up, your original file is left as it was.

## Only what you changed

LootEngine edits your files as text, changing only the characters you edited. It keeps:

- comments, including commented-out entries
- spacing, indentation and blank lines
- Windows or Unix line endings
- the order of entries and of the values inside them
- anything it doesn’t recognise

So when you compare a saved file with its backup, the only differences are your edits. That also keeps your mission folder tidy in Git or any other version control.

## Undo after saving

Saving doesn’t clear the undo history. You can still undo a change after saving it, which marks the file as unsaved again. Save once more to write the undone version.

## Unsaved changes

LootEngine won’t let you lose changes by accident:

- **Closing the window** asks whether to **Quit without saving** or **Keep editing**.
- **Switching missions** waits until you save or undo your changes.
- **Installing an update** waits until you save or undo your changes, since it restarts LootEngine.

## Getting your changes onto the server

The DayZ server reads its loot files when it starts, so restart the server after saving for your changes to take effect.

If your server is hosted, download its mission folder from your host’s file manager or FTP, edit the copy on your PC with LootEngine, then upload the changed files and restart the server. You don’t need to upload the `.loot-editor-backups` folder.
