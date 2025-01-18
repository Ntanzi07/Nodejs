import connectToDatabase from "./database/data.js";

async function main() {
    await connectToDatabase("Nathan","@1234");
}

main();