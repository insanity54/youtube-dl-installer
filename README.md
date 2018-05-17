# youtube-dl-installer

![Last version](https://img.shields.io/github/tag/Kikobeats/youtube-dl-installer.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/youtube-dl-installer/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/youtube-dl-installer)
[![Dependency status](https://img.shields.io/david/Kikobeats/youtube-dl-installer.svg?style=flat-square)](https://david-dm.org/Kikobeats/youtube-dl-installer)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/youtube-dl-installer.svg?style=flat-square)](https://david-dm.org/Kikobeats/youtube-dl-installer#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/youtube-dl-installer.svg?style=flat-square)](https://www.npmjs.org/package/youtube-dl-installer)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Platform independent binary installer of youtube-dl for node projects

## Install

```bash
$ npm install youtube-dl-installer --save
```

## Usage

```js
'use strict'

const { promisify } = require('util')
const execFile = promisify(require('child_process').execFile)

const getInfo = async url => {
  const args = [ '--dump-json', '-f', 'best', url ]
  const {stdout, stderr} = await execFile(youtubeDlPath, args)
  return stderr === '' ? JSON.parse(stdout) : {}
}

;(async () => {
  const payload = await getInfo('https://www.youtube.com/watch?v=hwMkbaS_M_c')
  console.log(payload)
})()
```

## License

**youtube-dl-installer** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/youtube-dl-installer/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/youtube-dl-installer/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
