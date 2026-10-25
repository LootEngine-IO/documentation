# Loot fields

Each item’s loot entry in a types file is a `<type>` block. This page lists each field, how it appears in LootEngine, and what it does.

```xml
<type name="ACOGOptic">
    <nominal>15</nominal>
    <lifetime>14400</lifetime>
    <restock>1800</restock>
    <min>8</min>
    <quantmin>-1</quantmin>
    <quantmax>-1</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="weapons"/>
    <usage name="Military"/>
    <value name="Tier3"/>
    <value name="Tier4"/>
</type>
```

## Spawning

| In LootEngine | In the XML | What it does |
| --- | --- | --- |
| **Nominal** | `<nominal>` | Target number of this item in the world. The economy spawns more while there are fewer |
| **Min** | `<min>` | When the count drops below this, the economy restocks up to nominal |
| **Lifetime** | `<lifetime>` | Seconds an untouched item stays in the world before it’s cleaned up |
| **Restock** | `<restock>` | Seconds to wait before respawning after the count drops below min. `0` means respawn straight away |

## Quantity and cost

| In LootEngine | In the XML | What it does |
| --- | --- | --- |
| **Quant min** | `<quantmin>` | Minimum fill (0–100%) for items with a quantity, like bottles or magazines. `-1` means not applicable |
| **Quant max** | `<quantmax>` | Maximum fill (0–100%). `-1` means not applicable |
| **Cost** | `<cost>` | Spawn priority. Rarely changed from `100` |

## Flags

All flags are on (`1`) or off (`0`), in one `<flags>` element.

| In LootEngine | In the XML | When it’s on |
| --- | --- | --- |
| **Count in map** | `count_in_map` | Items lying in the world count toward nominal |
| **Count in cargo** | `count_in_cargo` | Items inside containers (backpacks, crates, vehicles) count toward nominal |
| **Count in hoarder** | `count_in_hoarder` | Items in stashes, tents and barrels count toward nominal |
| **Count in player** | `count_in_player` | Items in player inventories count toward nominal |
| **Crafted** | `crafted` | The item is made by crafting and isn’t spawned by the economy |
| **Dynamic event loot** | `deloot` | Spawns only at dynamic events, such as helicopter crashes |

## Where it spawns

These take names defined in the mission’s limits files. An item has at most one category, and any number of usages, values and tags.

| In LootEngine | In the XML | What it does | Names come from |
| --- | --- | --- | --- |
| **Category** | `<category name="…"/>` | The kind of loot, such as weapons, food or tools | `<categories>` in `cfglimitsdefinition.xml` |
| **Usage** | `<usage name="…"/>` | The kinds of places it spawns, such as Military, Police or Farm | `<usageflags>` in `cfglimitsdefinition.xml` |
| **Value (map tier)** | `<value name="…"/>` | The map tiers it spawns in, such as Tier1 to Tier4 | `<valueflags>` in `cfglimitsdefinition.xml` |
| **Tag (placement)** | `<tag name="…"/>` | Where in a building it’s placed, such as floor or shelves | `<tags>` in `cfglimitsdefinition.xml` |

### User groups

`cfglimitsdefinitionuser.xml` defines named groups of usages or values, such as a `TownVillage` group that means both Town and Village. In the XML, an entry uses a group with `user` in place of `name`:

```xml
<usage user="TownVillage"/>
```

LootEngine shows groups with a people icon, and lists the names in each group when you add one.

## How LootEngine writes them

- When you set a field an entry doesn’t have yet, LootEngine adds it in the usual order (nominal, lifetime, restock, min and so on), with the file’s own indentation.
- Choosing **No category** removes the `<category>` element.
- Removing a usage, value or tag chip removes its element from the entry.
