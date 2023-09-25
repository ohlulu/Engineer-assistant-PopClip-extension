# Engineer assistant PopClip extension

Engineer Assistant is a convenient PopClip extension to help you work through ChatGPT. [ChatGPT](https://openai.com/blog/chatgpt) 

## Features
- [x] Correct the grammar and typos in the commit message.
- [ ] Correct the grammar and typos in the function nameing.

## Configuration

### API Key

An API key of OpenAI account is required to use this extension. To get an API Key:

1. Sign up for an OpenAI account here: <https://platform.openai.com/>
2. Generate an API key here: <https://platform.openai.com/account/api-keys>
3. Copy and paste the API Key (it starts with `sk-`) into the _API Key_ field in the extension's settings.

> How can access gpt-4: https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4

## Demos

- Correction git commit message
![Correction git commit message](/asset/git-message-demo.gif)

## Acknowledgements

Original Extention:

- [ChatGPT-Grammar-Check-PopClip-Extension](https://github.com/hirakujira/ChatGPT-Grammar-Check-PopClip-Extension)

Icons:

- "tool" by [SVG Repo](https://www.svgrepo.com/).

## Requirements

Requires PopClip 2022.12 and an OpenAI Platform account.

## Changelog

### 2023-09-25

1. Improve prompt.
2. Add model config (default is `gpt-3.5-turbo`).

### 2023-09-22

1. Initial release.