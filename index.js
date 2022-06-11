#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const lstat = util.promisify(fs.lstat);
// const { lstat } = fs.promises;    is another version of the above lstat
const { cwd } = require('process');
// or 
// const process = require('process');
// and replace the below cwd() with process.cwd() and this should work too

fs.readdir(cwd(), async (err, fileNames) => {
    if (err) {
        throw new Error(err);
    }

    const statPromises = fileNames.map(fileName => {
        return lstat(fileName);
    })

    const readyStats = await Promise.all(statPromises);

    for (let stat of readyStats) {
        const index = readyStats.indexOf(stat);

        console.log(fileNames[index], stat.isFile());
    }
    
});