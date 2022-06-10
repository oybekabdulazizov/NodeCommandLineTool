const fs = require('fs');
const { cwd } = require('process');
// or 
// const process = require('process');
// and place the below cwd() with process.cwd() and this should work too

fs.readdir(cwd(), (err, fileNames) => {
    if (err) {
        throw new Error(err);
    }

    console.log(fileNames); 
})