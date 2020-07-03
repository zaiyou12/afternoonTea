---
date: 2020-6-26
tag:
  - ubuntu
  - brew
  - snap
author: Aaron So
location: Seoul
meta:
  - name: description
    content: ubuntu setup
  - name: keywords
    content: ubntu setup brew snap
---

# Ubuntu Setup

[[toc]]

�̻��ϰ� ubuntu�� ����ϴٺ��� �� ��ǻ��ó�� ������ ���¿��� ����ϰ� �;�����. �׷������� ���ϰ� �ٽ� ��ġ�Ϸ��� ����صд�.

## Essential

```bash
sudo apt-get install build-essential curl file git vim

## optional
sudo apt-get install htop tree wget
```

## Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

## For test
brew install hello
brew uninstall hello

## set PATH
echo 'eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)' >> ~/.profile
```

```bash
brew install
brew install zsh
brew install python3

## optional
brew install ansiweather
ansiweather -l seoul -a false -s true -f 3
```

### References

- [Homebrew Offical](!https://brew.sh/)
- [Homebrew-cask](!https://github.com/Homebrew/homebrew-cask)
- [Add Linux support to existing cask?](!https://discourse.brew.sh/t/add-linux-support-to-existing-cask/5766)
- [Mac with Homebrew](!https://youngmind.tistory.com/entry/%EB%82%B4%EA%B0%80-%EC%84%A4%EC%B9%98%ED%95%9C-%EB%A7%A5%EC%9A%A9-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%EB%93%A4)

## Chrome

- https://www.google.com/chrome/

## Snap

```bash
sudo snap install --classic slack
```

## Visual Code

Ubuntu���� snap���� VSCode ��ġ��, �ѱ� �Է��� �ȵ�. �ε����ϰ� snap�� �ƴ� �Ʒ� ���� Ȩ���������� `.deb`�� ��ġ

- https://code.visualstudio.com/download

��ġ �Ŀ��� `Ctrl + ,`(settings) �� ����, `windown.titleBarStyle` �� `custom` �� �ٲ۴�.

![VSCode with titleBar](../_img/with-titleBar.png)
![VSCode without titleBar](../_img/Without-titlebar.png)

### References

- [VS Code on Ubuntu](!https://gist.github.com/philoskim/a79440bd51ae40f04a4d7cafa472caf1)
- [VS Code titleBar](!https://www.reddit.com/r/vscode/comments/9624id/how_did_i_not_know_about_this_setting_its/)

## Notion

����� Linux�� App�� ���⿡ Chrome shortcut ����. �Ʒ� ��ũ�� ��� �������� ������, `settings > More tools > Create Shortcut` Ŭ����, Open as window �ɼ��� üũ�Ͽ� ����. ���� ����� Chrome â�� �ִ� ���¿���, Dock���� Add to Favorite�� �Ͽ� �����Ѵ�. ���� ������� �ٸ� ����Ʈ�鵵 ���� �����ϴ�.

- https://notion.so

![Ubuntu Dock](../_img/ubuntu-dock.png)
