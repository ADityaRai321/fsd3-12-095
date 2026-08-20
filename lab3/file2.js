import { readFile, writeFile, appendFile } from "fs/promises";

const readData = async (filename) => {
    const content = await readFile(filename, "utf-8");
    return content;
};

const writeData = async (filename, content) => {
    await writeFile(filename, content);
};

const appendData = async (filename, content) => {
    await appendFile(filename, content);
};

const data = await readData("file1.js");
console.log(data);
