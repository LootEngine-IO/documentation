# Files and folders

What LootEngine reads, what it writes, and where it keeps its own files.

## Your game folder

LootEngine only **reads** from your DayZ game folder. It never changes anything there.

| What | Where |
| --- | --- |
| Game items, names and models | The PBO files in `Addons` (and `dta`) |
| Mods | Folders starting with `@` in `!Workshop`, or in the game folder itself |

## Your mission folder

| File | Read | Written |
| --- | --- | --- |
| `db/types.xml` | ✓ | When you save changes to it |
| Types files listed in `cfgeconomycore.xml` | ✓ | When you save changes to them |
| `cfgeconomycore.xml` | ✓ | Never |
| `cfglimitsdefinition.xml` | ✓ | Never |
| `cfglimitsdefinitionuser.xml` | ✓ | Never |
| `.loot-editor-backups/` | | A new folder each time you save |

Files have to be UTF-8 text, which is what DayZ’s own files and most text editors use.

While saving, LootEngine briefly writes a temporary file next to each file it saves, named like `.types.xml.1234.tmp`, then renames it into place. If you ever find one left over, for example after a power cut, it’s safe to delete.

### Backups

Each save adds a folder to `.loot-editor-backups` named after its date and time, holding the previous versions of the files that save changed. The newest 20 are kept. See [Restoring from a backup](../guide/backups).

## LootEngine’s own files

### Settings

Your game folder, ticked mods, recent missions and update channel are stored in `settings.json`:

::: code-group

```text [Windows]
%APPDATA%\com.dayzlooteditor.desktop\settings.json
```

```text [Linux]
~/.config/com.dayzlooteditor.desktop/settings.json
```

:::

To start again from first-time setup, close LootEngine and delete this file.

### Icon cache

Rendered item icons are cached as PNG files, so they only need drawing once:

::: code-group

```text [Windows]
%LOCALAPPDATA%\com.dayzlooteditor.desktop\icons
```

```text [Linux]
~/.cache/com.dayzlooteditor.desktop/icons
```

:::

The cache knows which model, textures and PBO each icon came from, so game and mod updates are re-rendered automatically. You can delete the folder at any time to free up space; icons are drawn again as you scroll.
