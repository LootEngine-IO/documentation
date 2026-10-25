# Checking for problems

LootEngine checks every loot entry against your mission’s limits files and the game data as you work. It catches what the server would complain about, or silently ignore, before you restart it.

## Where problems show

- **On the card**: a red dot (error) or amber dot (warning) at the top right. Hover over it to read the first problem.
- **In the inspector**: problems about the whole entry are listed under the item’s description. Problems with one field show under that field, which turns red or amber.
- **In the filters**: select **Has problems** to see every item with an error or a warning.

There are three levels:

| Level | Meaning |
| --- | --- |
| **Error** | The server will reject or misread this value. Fix it |
| **Warning** | It probably doesn’t do what you want |
| **Info** | Worth knowing, but often intended. Info doesn’t count toward **Has problems** |

Problems don’t stop you saving. LootEngine saves what you’ve entered, so you can fix things in whatever order suits you.

## What LootEngine checks

### The item itself

| Message | What to do |
| --- | --- |
| Not found in the scanned game data. Check the spelling, or enable the mod that adds it. | The class name is misspelt, or the mod it comes from isn’t ticked in **Settings**. See [Loading mods](./mods) |
| The class exists but has scope *N*, so the economy won’t spawn it. | The class is a base class or hidden item that can’t spawn. Usually you’ll want a different class name |
| Defined *N* times (*files*). The last one is used. | Keep one definition. See [Items defined more than once](./adding-items#items-defined-more-than-once) |

### Numbers

| Message | What to do |
| --- | --- |
| &lt;*field*&gt; must be a whole number. | The XML has something that isn’t a whole number. Fix it in a text editor |
| &lt;*field*&gt; can’t be negative. | Nominal, min, lifetime, restock and cost must be `0` or more |
| &lt;*field*&gt; is missing. | The entry has no value for this field. Type one in to add it |
| min (*x*) is greater than nominal (*y*). | Lower **Min** or raise **Nominal** |
| Lifetime 0 means spawned items are cleaned up straight away. | Give it a lifetime in seconds, such as `14400` for 4 hours |
| quantmin and quantmax must be -1 or between 0 and 100. | Use a percentage, or `-1` for items without a quantity |
| quantmin and quantmax should both be -1, or both be set. | Set both to `-1`, or both to a percentage |
| quantmin is greater than quantmax. | Lower **Quant min** or raise **Quant max** |

### Names from your limits files

| Message | What to do |
| --- | --- |
| Category "*name*" isn’t defined in cfglimitsdefinition.xml. | Pick a category from the list, or add it to `cfglimitsdefinition.xml` |
| Usage, Value or Tag "*name*" isn’t defined in cfglimitsdefinition.xml. | Remove the red chip and pick a defined name, or add it to the limits file |
| Usage or Value "*name*" isn’t defined in cfglimitsdefinitionuser.xml. | The group doesn’t exist. Remove it, or define it in `cfglimitsdefinitionuser.xml` |
| No usage or tag, so it only spawns through events or as cargo and attachments. (info) | Fine for items that only come with other items. Add a usage if it should spawn on its own |

Names are checked without regard to case, so `military` and `Military` are the same.

::: info
The limits checks only run when your mission has a `cfglimitsdefinition.xml`. Without one, LootEngine can’t tell which names are valid.
:::
