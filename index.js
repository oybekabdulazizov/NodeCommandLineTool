#!/usr/bin/env node

import fs from 'fs';
import util from 'util';
import chalk from 'chalk';
import process from 'process';

const lstat = util.promisify(fs.lstat);

fs.readdir(process.cwd(), async (err, fileNames) => {
    if (err) {
        throw new Error(err);
    }

    const statPromises = fileNames.map(fileName => {
        return lstat(fileName);
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