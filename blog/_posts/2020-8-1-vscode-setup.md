---
date: 2020-8-1
tags:
  - vscode
author: Aaron So
location: Seoul
meta:
  - name: description
    content: vscode extension
  - name: keywords
    content: vscode extension
---

# VSCode Extension

- [VSCode Extension](#vscode-extension)
  - [�⺻ ����](#�⺻-����)
  - [MS provided](#ms-provided)
  - [Theme](#theme)
  - [Git](#git)
  - [Language](#language)
    - [Markdown](#markdown)
    - [HTML](#html)
    - [TypeScript](#typescript)
    - [Python](#python)
  - [Service](#service)

ũ�ұ��� �� ���������� ���� VSCode�� Terminal�� ���Ҵ�. VSCode�� ũ�Ҹ�ŭ ����ȭ�� �ڵ����� ������ ������, �ణ�� �������� �����ϰ� �� �� �ִ�. �Ʒ� Extensions

## �⺻ ����

**�ּ� ����: TODO Highlight / Comment Anchors**

<div style="display: flex">
  <div style="flex: 1;">
    <img src="../_img/vscode/todo-highlight.png" alt="TODO Highlight">
    <p style="text-align: center">TODO Highlight Github �̹���</p>
  </div>
  <div style="flex: 1;">
    <img src="../_img/vscode/anchors.png" alt="Comment Anchors">
    <p style="text-align: center">Comment Anchors Github �̹���</p>
  </div>
</div>

�������� TODO Highlight�� ���� ���������, �ֱٿ��� Comment Anchors�� ���ٰ� ������. TODO�� Highlight�� �Ǽ� ���� Ȯ �� ������, ��ü ������Ʈ�� � ���� �ִ��� Ȯ���Ϸ��� �˻����� �ϰų�, `List highlighted annotations`�� �ؾ� �Ѵ�. �̿� �ݸ鿡 Comment Anchors�� ����ϸ� ���� sidebar���� �� ������Ʈ�� �߰��� ������� ���δ�.

�� ������Ʈ �� �ڵ尡 Github�� ������, �ð��� �ɶ� TODO Hightlight�� ��Ÿ�ϰ� Comment Anchors�� sidebar view�� ���ĺ��� ���� �� ����.

**Bracket ���ü�: Bracket Pair Colorizer / Rainbow Brackets**

![Bracket Pair Colorizer](../_img/vscode/bracket-colorizer.png)

<p>Bracket Pair Colorizer Github �̹���</p>

��ȣ�� ���� ������ �� �ְ� �����ִ� Extension. ������ Rainbow Brackets�� ����ߴµ�, Bracket Pair Colorizer�� ver.2�� ������, ��� �������� �ϰ� �ִ� �� ���Ƽ� �ٲپ���. �׷��� �ΰ� �� ���⿡, ��� ���� �����ص� ū ��� ����.

**Path Intellisense**

<img src="https://i.giphy.com/iaHeUiDeTUZuo.gif">
<p>Path Intellisense Github �̹���</p>

��θ� �����Ҷ� �ڵ����� �������� �����ݴϴ�. ����ο� ������ ��� �� �۵��ϸ�, ���� ���Ŀ� ũ�� ������ �ʰ� �� ��õ�� ���ݴϴ�.

**Setting Sync**

�� ��ǻ���� VSCode�� ��ġ�� Extension�� �ٸ� ��ǻ�Ϳ����� ��� �����ϰ� ���ִ� Extension�̴�. ���� �� �����ʹ� Gist�� ����ǹǷ� �ٸ� ������� ������ �����ϴ�. ���� ������Ʈ������ `.vscode/extensions.json`�� Ȱ���ϸ� �� ����� ��ü�� �� �ִ�.

```json
{
  "recommendations": [
    "eamodio.gitlens",
    "esbenp.prettier-vscode",
    "2gua.rainbow-brackets",
    "msjsdiag.vscode-react-native",
    "wayou.vscode-todo-highlight",
    "visualstudioexptteam.vscodeintellicode"
  ]
}
```

## MS provided

- Live Share
- Docker
- koean language pack for visual studio code

## Theme

- vscode-icon
- Material Theme / Material Icon Theme
- Monokai or Monokai Pro

## Git

- Git History (�ǿܷ� �� �Ⱦ��� ��, GitKraken�� �� �̻���,,,)
- Git Lens (�⺻���� ������ �͵� ������ �ڷ� ������ ���) ����� ���� ����� �Ѵ�

## Language

### Markdown

- markdown to pdf
- Markdown All in One

### HTML

- Auto Close Tag
- Auto Rename Tag
- Snapshot-tools
- Color Highlight / vscode-styled-components
- Live Server
- Emmet (ul>li>)
- Debugger for Chrome
- **Prettier**: �ſ� �������� Formatter.

### TypeScript

- TypeScript Extension Pack or Tslint
- jest

### Python

- Notebook Support (.ipynb)
- autoDocstring
- AREPL (�ٷ� ������ ��� Ȯ��)
- indent-rainbow �����̽� ���� Ȯ��

## Service

- WakaTime
- Dash (�������� ����, ���� �� �Ⱦ�)
