# youtube-dl-installer-ng

![Last version](https://img.shields.io/github/tag/insanity54/youtube-dl-installer-ng.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/insanity54/youtube-dl-installer-ng/master.svg?style=flat-square)](https://travis-ci.org/insanity54/youtube-dl-installer-ng)
[![Dependency status](https://img.shields.io/david/insanity54/youtube-dl-installer-ng.svg?style=flat-square)](https://david-dm.org/insanity54/youtube-dl-installer-ng)
[![Dev Dependencies Status](https://img.shields.io/david/dev/insanity54/youtube-dl-installer-ng.svg?style=flat-square)](https://david-dm.org/insanity54/youtube-dl-installer-ng#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/youtube-dl-installer-ng.svg?style=flat-square)](https://www.npmjs.org/package/youtube-dl-installer-ng)
[![GitHub issues](https://img.shields.io/github/issues/insanity54/youtube-dl-installer-ng.svg?style=flat-square)](https://github.com/insanity54/youtube-dl-installer-ng/issues)

> Platform independent binary installer of youtube-dl.

Fork of [Kikobeats/youtube-dl-installer](https://github.com/Kikobeats/youtube-dl-installer) which has gone unmaintained for some time.


## Install

```bash
$ npm install youtube-dl-installer-ng --save
```

## Usage

Require this module in your js application. Doing so will ensure that the latest version of youtube-dl is installed on your system. @todo add *where* it gets installed

```js
require('youtube-dl-installer')
```

Following that, you can directly invoke the youtube-dl binary using [child_process](https://nodejs.org/api/child_process.html), or indirectly using a module such as [youtube-dl](https://www.npmjs.com/package/youtube-dl) or [ytdl-run](https://www.npmjs.com/package/ytdl-run).

### child_process example

```js
'use strict'

require('youtube-dl-installer')
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


### ytdl-run example

```js
'use strict'

require('youtube-dl-installer');
var ytdl2 = require('ytdl-run');

const opts = [
  '-f', 'bestaudio', 'https://www.youtube.com/watch?v=IgbO5pilG5I'
];

ytdl.stream(opts)
  .stdout
  .pipe(fs.createWriteStream('video.mp4'))
```
