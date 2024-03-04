const fs = require('fs');
const { resolve } = require('path');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
// fs.readFile('./file-system/notes.txt', 'UTF-8', fileReadCallback);
fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);
// const data = fs.readFileSync('./file-system/notes.txt', 'UTF-8');
const data = fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8');
console.log(data);