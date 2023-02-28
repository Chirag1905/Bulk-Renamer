const fs = require('fs');
const path = require('path');
const replaceThis = "siddharth";
const replaceWith = "chirag";
const preview = false;
const folder = __dirname;
try {
    fs.readdir(folder, (err, data) => {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldfile = path.join(folder, item);
            let newfile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
            if (!preview) {
                fs.rename(oldfile, newfile, () => {
                    console.log("Rename Success", item, newfile);
                })
            }
            else {
                if ("data/" + item !== newfile) console.log("" + item + "Will be renamed to " + newfile);
            }
        }
    })
} catch (err) {
    console.log(err);
}