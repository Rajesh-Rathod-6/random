// let n = 5;

// for(let i=0;i<=n; i++){
//     console.log("hello",i);
// }

let argv = process.argv;

for(let i=2; i<argv.length; i++){
    console.log("hello and welcome to",argv[i]);
}