#!/usr/bin/env node

import fs from 'fs';
import util from 'util';
import chalk from 'chalk';
import process from 'process';
import path from 'path';

const lstat = util.promisify(fs.lstat);
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, fileNames) => {
    if (err) {
        throw new Error(err);
    }

    const statPromises = fileNames.map(fileName => {
        return lstat(path.join(targetDir, fileName));
    })

    const readyStats = await Promise.all(statPromises);

    for (let stat of readyStats) {
        const index = readyStats.indexOf(stat);

        if (stat.isFile()) {
            console.log(fileNames[index]);
        } else {
            console.log(chalk.blueBright(fileNames[index]));
        } 
    }
    
});