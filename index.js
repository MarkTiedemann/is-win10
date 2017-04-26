const os = require('os')

const isWindows = process.platform === 'win32'
const isVersion10 = os.release().startsWith('10')

module.exports = isWindows && isVersion10