//console.log("Hello World");
//console.log("Hello Boolean");
const args = process.argv.slice(2);

const message = args.join(" ");

console.log(message || "Hello Boolean");