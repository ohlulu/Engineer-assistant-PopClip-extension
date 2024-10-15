# Engineer assistant PopClip extension

Engineer Assistant is a convenient PopClip extension to help you work through [Claude 3.5 Sonnet](https://www.anthropic.com/). 

## Features
- [x] Correct the grammar and typos in the commit message.
- [ ] Correct the grammar and typos in the function nameing.

## Configuration

### API Key

Accessing the API
The API is made available via our web [Console](https://console.anthropic.com/). You can use the [Workbench](https://console.anthropic.com/workbench/3b57d80a-99f2-4760-8316-d3bb14fbfb1e) to try out the API in the browser and then generate API keys in [Account Settings](https://console.anthropic.com/account/keys). Use [workspaces](https://console.anthropic.com/settings/workspaces) to segment your API keys and [control spend](https://docs.anthropic.com/en/api/rate-limits) by use case.

## Demos

- Correction git commit message
![Correction git commit message](/asset/git-message-demo.gif)

## Acknowledgements

Original Extention:

- [ChatGPT-Grammar-Check-PopClip-Extension](https://github.com/hirakujira/ChatGPT-Grammar-Check-PopClip-Extension)

Icons:

- "tool" by [SVG Repo](https://www.svgrepo.com/).

## Requirements

Requires PopClip 2022.12 and an Anthropic account.

## Changelog

### 2024-10-15

1. Improve prompt by list.
2. Migration to `claude-3-5-sonnet-20240620`.

### 2023-09-25

1. Improve prompt.
2. Add model config (default is `gpt-3.5-turbo`).

### 2023-09-22

1. Initial release.