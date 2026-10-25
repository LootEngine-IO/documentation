# Loading mods

LootEngine reads modded items the same way as vanilla ones: their names, descriptions, sizes and 3D models come straight from the mod’s PBO files. Once a mod is loaded, its items appear in the grid with their icons, ready to add to your loot.

Loading a mod into LootEngine takes two parts:

1. **Tick the mod in Settings**, so LootEngine knows its items.
2. **List the mod’s types file in your mission**, if it has one, so LootEngine (and your server) loads its loot settings.

## Tick the mod in Settings

1. Subscribe to the mod in the Steam Workshop and let it download. The DayZ Launcher links Workshop mods into the game’s `!Workshop` folder, so if a mod doesn’t appear in the next step, open the DayZ Launcher once and try again.
2. Open **Settings** (the cog at the top right).
3. Under **Mods**, tick each mod your server runs. Each one shows its name, its folder (such as `@CF`) and how many PBO files it has.
4. Select **Save and reload**, or **Save** if you’re on the start screen.

LootEngine rescans the game with your mods. Mod items show the mod’s name in blue on their cards, and you can filter by mod under **Mod** in the [filters](./finding-items).

### Where LootEngine looks for mods

LootEngine lists mod folders whose names start with `@` and which have an `addons` folder inside, from:

- the `!Workshop` folder inside your DayZ game folder, where the DayZ Launcher keeps Workshop mods
- the DayZ game folder itself

If a mod lives somewhere else, such as only in your server’s folder, copy it (or make a link to it) into your DayZ game folder, keeping the `@` at the start of the name. It then shows up in **Settings**.

::: tip Tick only what your server runs
Ticking a mod your server doesn’t run makes its items show as **Not in loot files**, which is harmless but adds clutter. Leaving out a mod your server runs makes its loot entries show as **Not in game data**.
:::

## Load the mod’s types file

Many mods come with a types file of their own, such as `types.xml` in an `extras` or `ServerFiles` folder. To load it:

1. Copy it into your mission folder, for example as `custom/mymod_types.xml`.
2. List it in the mission’s `cfgeconomycore.xml`:

   ```xml
   <economycore>
       <!-- … -->
       <ce folder="custom">
           <file name="mymod_types.xml" type="types" />
       </ce>
   </economycore>
   ```

3. Open the mission in LootEngine. The top bar counts the extra types file, and the mod’s items appear **In loot files**.

Your server loads the same file, so the changes you make in LootEngine apply in game too.

If you open the mission before adding the file, restart LootEngine afterwards so it reads the new `cfgeconomycore.xml`.

::: info Mods without a types file
Some mods don’t include a types file. Their items show as **Not in loot files**. Select **Add to loot** on each one you want to spawn. See [Adding and removing items](./adding-items).
:::

## When a mod can’t be read

Some mods protect or obfuscate their PBO files. LootEngine skips files it can’t read rather than stopping, and tells you how many it skipped when the mission opens. You’ll find the list under **Files that couldn’t be read** in **Settings**.

Items from those files may be missing from the grid, or show without an icon. Their loot entries can still be edited; they’ll just show as **Not in game data**.

## Icons for mod items

Mod items get the same rendered icons as vanilla ones. When a model can’t be drawn, such as an unbinarised model, the card shows the item’s inventory size instead.

Icons are re-rendered automatically when a mod updates.
