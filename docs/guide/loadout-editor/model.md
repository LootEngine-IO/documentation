# The 3D view

The middle of the [Loadout Editor](./) shows the item’s 3D model, read from the game files with its own textures. It starts from the same angle as the item’s icon, with a marker for each of its attachment slots and the attachments it spawns with drawn on it.

![The KA-M’s 3D view: a P1-87-L scope and a suppressor are drawn on the rifle, the Optics slot is selected, and the pointer is over the Suppressor marker so its name shows](/images/loadout-editor/model-callouts.webp){.screenshot}

## Slot markers

Each slot that has a place on the model gets a marker: a dot where the game puts the attachment, joined by a dotted line to a box beside the model. The icon in the box shows what goes in the slot, such as a sight, a magazine or a suppressor.

| The marker is | It means |
| --- | --- |
| Orange | Something is set to spawn in the slot |
| Grey | The slot is empty |
| Ringed in orange | It’s the selected slot |

- Hover over a marker to see the slot’s name. The slot’s card on the right lights up too, and hovering over a card lights up its marker.
- Click a marker to select its slot. The list on the right scrolls to it.
- Click the marker of an empty slot to open the list of attachments that fit it, ready to add one. See [Add an attachment](./attachments#add-an-attachment).

Some slots don’t have a place on the model. They’re still in the list on the right, where they’re marked **not shown on the model**, and you edit them the same way.

## Moving the view

- **Drag** to turn the model.
- **Right-drag** to move it.
- **Scroll** to zoom in and out.
- Select **Reset view** to go back to the starting view.

The controls are under the model, with a reminder of what each mouse button does.

## Attachments on the model

LootEngine draws what each filled slot spawns with on the model, where the game would put it, using the attachment’s own model and textures. A ghillie wrap is drawn at each of the places it covers.

When a slot has more than one choice, the model shows one at a time: the first in the slot’s list until you pick another.

- To see another choice on the model, click it in the slot’s list. An eye icon marks the attachment that’s on the model.
- A new attachment is drawn on the model as soon as you add it.
- Select **Attachments**, under the model, to hide them all and see the item on its own. Select it again to show them. Your choice stays as you move between weapons.

![The same KA-M with Attachments turned off: the bare rifle with its slot markers](/images/loadout-editor/model-no-attachments.webp){.screenshot}

Showing an attachment on the model doesn’t change what spawns. It’s only a preview.

## When the model can’t be shown

When the item’s model can’t be drawn, for example because its files can’t be read, the 3D view shows the item’s icon instead, with the reason underneath. The slots are still listed on the right and can be edited as usual. Only the markers are missing.
