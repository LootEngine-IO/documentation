# Spawn condition

At the top of the [Loadout Editor](./)’s right-hand column, **Condition** sets the range of damage an item spawns with. Each time the item spawns, it gets a damage somewhere in the range.

![The KA-M’s Condition section: damage from 45% to 85%, with the note “0% is pristine and 100% is ruined”](/images/loadout-editor/condition.webp){.screenshot width=447}

## Set a damage range

1. If the item has no range yet, select **Set a range**. It starts at 0% to 50%.
2. Type the lowest damage in the first box and the highest in the second, as percentages from `0` to `100`, and press <kbd>Enter</kbd>.

0% is pristine and 100% is ruined. If you make the lowest damage higher than the highest, the highest moves up to match, and the other way round, so the range always makes sense.

Select **Clear** to take the range out of the item’s entry.

If the item has no spawnable entry yet, setting a range creates one, just like adding an attachment. See [New entries](./files#new-entries).

## What the numbers mean in the game

Damage is the share of the item’s health it has lost, so 45% damage leaves it with 55% health. Most DayZ items use these health levels:

| Damage | Health left | Condition in the game |
| --- | --- | --- |
| 0% to 30% | 100% to 70% | Pristine |
| 30% to 50% | 70% to 50% | Worn |
| 50% to 70% | 50% to 30% | Damaged |
| 70% to just under 100% | Under 30% | Badly damaged |
| 100% | None | Ruined |

For example, the vanilla M4-A1 spawns with 45% to 85% damage, so it’s found anywhere from worn to badly damaged.

## In the inspector

The **Attachments** section of the Loot Editor’s inspector shows the range under the item’s attachments, as **Damage 45% to 85%** (for example).
