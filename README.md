katch
=====

Katch your idea now!

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/katch.svg)](https://npmjs.org/package/katch)
[![Downloads/week](https://img.shields.io/npm/dw/katch.svg)](https://npmjs.org/package/katch)
[![License](https://img.shields.io/npm/l/katch.svg)](https://github.com/xue-yuan/katch/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g katch
$ katch COMMAND
running command...
$ katch (-v|--version|version)
katch/0.0.0 darwin-x64 node-v13.8.0
$ katch --help [COMMAND]
USAGE
  $ katch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`katch hello [FILE]`](#katch-hello-file)
* [`katch help [COMMAND]`](#katch-help-command)
* [`katch idea [IDEA]`](#katch-idea-idea)
* [`katch list`](#katch-list)
* [`katch remove [FILE]`](#katch-remove-file)

## `katch hello [FILE]`

```
USAGE
  $ katch hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ katch hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/xue-yuan/katch/blob/v0.0.0/src/commands/hello.ts)_

## `katch help [COMMAND]`

```
USAGE
  $ katch help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `katch idea [IDEA]`

```
USAGE
  $ katch idea [IDEA]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/idea.ts](https://github.com/xue-yuan/katch/blob/v0.0.0/src/commands/idea.ts)_

## `katch list`

```
USAGE
  $ katch list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/list.ts](https://github.com/xue-yuan/katch/blob/v0.0.0/src/commands/list.ts)_

## `katch remove [FILE]`

```
USAGE
  $ katch remove [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/remove.ts](https://github.com/xue-yuan/katch/blob/v0.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
