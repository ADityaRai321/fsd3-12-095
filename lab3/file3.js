import{stat} from "fs/promises";
const fstat = await stat("file1.js");

console.log("file size is", fstat.size, "bytes");