const yargs = require('yargs').argv
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const { isFunction : _isFunction } = require('lodash')

const task = yargs.task

if (task && !fs.existsSync(path.resolve(__dirname, `${task}.js`))) {
    throw new Error(`Task ${task} not found!`)
}

const startTask = taskName => {
    const module = require(`./${taskName}`)

    if (_isFunction(module)) {
        return Promise.resolve(module())
    } else {
        throw new Error(`Module ${taskName} not have module.exports = function`)
    }
}

(task ? [task] : glob.sync('*.js', { cwd: __dirname, ignore: 'index.js' }))
    .map(task => {
        console.log('Start', '\x1b[31m', `${task}`, '\x1b[0m', 'script!');
        startTask(task)
            .then(result => {
                result && console.log(`${task} result: ${result}`)
                console.log('\x1b[33m%s\x1b[0m', `${task} Done!`)
            })
            .catch(console.error)
    })
