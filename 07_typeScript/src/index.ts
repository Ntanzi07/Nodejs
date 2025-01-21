import app from "./app";
import server from "./server";
import utils from "./utils";

function main() {
    let myEmail: string = "exemple@email.com";
    console.log(myEmail);

    app();
    server();
    utils();
}
main();