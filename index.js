const fs = require('fs');

//1. Ceate a folder named it Disha
fs.mkdirSync('Disha');

// 2. Create a file in it named bio.txt & data into it.
fs.writeFileSync('Disha/bio.txt',"My name is Disha Patel ");

//3. Add more data into the file at the end of the existing data
fs.appendFileSync('Disha/bio.txt',' And I am currently pursuing B.Tech Computer Engineering :)');

//4. Read the data without getting the buffer data at first
// with buffer data:-----
const data = fs.readFileSync('Disha/bio.txt');
console.log(data);

// without bufferdata:-
// file encoding
const data = fs.readFileSync('Disha/bio.txt', 'utf8');
console.log(data);

//5. Rename the file name to myBio.txt
fs.renameSync('Disha/bio.txt','Disha/myBio.txt');

//6. Now delete the file nd the folder
// delete file :---
fs.unlinkSync('Disha/myBio.txt');

// delete folder :---
fs.rmdirSync('Disha');