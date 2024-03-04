const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed;
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
/*
make sure move to directory process-object and run with command below!
command line to run : NODE_ENV=production node index.js Azis
*/