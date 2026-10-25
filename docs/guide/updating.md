# Updating LootEngine

LootEngine checks for a new version each time it starts, and installs it for you when you say so.

## When an update is available

When there’s a new version, LootEngine shows **Update available**, with the version you have, the new version, the date it was released and what’s new.

- Select **Install and restart** to download and install it. A progress bar shows the download, then LootEngine restarts on the new version.
- Select **Not now** to carry on. An **Update** button stays in the top bar, so you can install it later.

::: tip Save first
Installing restarts LootEngine, so it waits until you’ve saved or undone your changes. Your settings and recent missions are kept.
:::

On Windows, the installer runs on its own with a small progress window, then starts LootEngine again. On Linux, the AppImage is replaced with the new version.

## Checking by hand

Open **Settings** and select **Check for updates** under **Updates**. LootEngine tells you if you already have the latest version. The version you have is shown next to the **Updates** heading.

## Release channels

There are two release channels:

| Channel | What you get |
| --- | --- |
| **Stable** | Tested releases. Recommended for most people |
| **Beta** | New features first. Betas can have rough edges |

LootEngine follows the channel of the version you installed: stable versions look like `1.2.4`, and beta versions like `1.3.0-beta.1`.

### Switching channel

1. Open **Settings**.
2. Under **Updates**, select **Stable** or **Beta**.
3. Select **Save**.

LootEngine checks the new channel straight away and offers its latest release, titled **Switch to the beta channel** (or stable).

Switching from beta to stable offers the latest stable release even when it’s an earlier version than the beta you have, so you can get back onto stable. LootEngine warns you when that’s the case. Select **Stay on beta** to keep your current version and channel.

::: info
Betas are where new features such as the [loadout editor](./loadout-editor) appear first. Feedback on them is very welcome in the [Discord](https://discord.gg/N2tYjZuNNV).
:::

## “Updates are only available in installed builds”

In-app updates work in the Windows version installed with the installer, and in the Linux AppImage. If you see this message:

- **On Windows**, install LootEngine with the installer and start it from the Start menu.
- **On Linux**, run the `.AppImage` file itself, not a copy extracted from it.

## Your files and updates

Updates replace the app only. Your mission folders, backups and settings aren’t touched.
