'use strict'

const path = require('path')

const isWin =
  process.platform === 'win32' || process.env.NODE_PLATFORM === 'windows'

const prefixPath = path => (isWin ? `${path}.exec` : path)

const binaryName = prefixPath('youtube-dl')
const binaryFolder = path.resolve(__dirname, '..', 'bin')
const binaryPath = path.join(binaryFolder, binaryName)

module.exports = { path: binaryPath }
module.exports.binaryName = binaryName
module.exports.binaryFolder = binaryFolder
module.exports.binaryPath = binaryPath
module.exports.prefixPath = prefixPath
