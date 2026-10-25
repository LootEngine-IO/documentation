# Restoring from a backup

Every time you save, LootEngine first copies the files it’s about to overwrite into a backup folder. If a change didn’t work out, you can put an earlier version back.

## Where backups are kept

Backups go into a `.loot-editor-backups` folder inside your mission folder, with one folder per save, named after the date and time of the save:

```text
dayzOffline.chernarusplus/
├── .loot-editor-backups/
│   ├── 2026-10-24_19-02-11/
│   │   └── db/
│   │       └── types.xml
│   └── 2026-10-25_09-41-37/
│       ├── db/
│       │   └── types.xml
│       └── custom/
│           └── mymod_types.xml
├── db/
│   └── types.xml
└── cfgeconomycore.xml
```

A few things to know:

- **Each folder holds the files as they were just before that save.** So `2026-10-25_09-41-37` has the versions from before the save at 09:41:37.
- **Only the files that save changed are in it**, laid out the same way as in the mission folder.
- **The newest 20 saves are kept.** Older backup folders are deleted when you save again. If you want to keep a version for good, copy it somewhere else.

::: tip
The folder name starts with a dot, so your file manager may hide it. On Windows, turn on **View** › **Show** › **Hidden items** in File Explorer. On Linux, press **Ctrl**+**H** in most file managers.
:::

## Restoring a file

LootEngine doesn’t restore backups for you yet, but it only takes a copy:

1. **Save or undo any changes, then close LootEngine.** It reads the mission when you open it, so close it before changing files on disk.
2. **Find the backup you want.** Open `.loot-editor-backups` in the mission folder and pick the folder for the save you want to go back before.
3. **Copy the file back.** Copy it from the backup folder to the same place in the mission folder, replacing the current file. For example, copy `.loot-editor-backups/2026-10-25_09-41-37/db/types.xml` to `db/types.xml`.
4. **Open LootEngine again** and open the mission to check the result.

To undo several saves at once, restore from the oldest of them. A file that isn’t in a backup folder wasn’t changed by that save, so look for it in an older folder.

::: warning Don’t restore while LootEngine is open
If you replace a file while the mission is open in LootEngine, it keeps showing the version it opened. If you then edit that file and save, LootEngine stops with [“changed on disk since it was opened”](../help/troubleshooting#changed-on-disk-since-it-was-opened) rather than overwrite your restored copy. Restart LootEngine to see the restored version.
:::

## Comparing versions

To see exactly what a save changed, compare the backup with the current file in any diff tool, such as WinMerge or Visual Studio Code. Since LootEngine only changes what you edited, the differences are just your edits.
