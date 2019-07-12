---
title: Custom zsh command
date: "2019-07-12"
tags: ["regular"]
description: Custom zsh command to open dir in VS Code and exit terminal
---

If you use VS code, there is a built in terminal in there.
But sometimes its needed to use regular terminal (for example inital VS Code open).
And what I usually type is `code . && exit`. The inconvenience is to reach `&` key xD.
For me it's annoying so I wrote a little zsh func for this.
Just add it to your `~/.zshrc`

```rc
# open current dir (if not specified) in VS code and exit the terminal
codeandexit() {
    if [ "$1" != "" ]
    then
        code "$1"
    else
        code .
    fi
    exit
}
```
