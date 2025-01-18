//const product  = require("./services/products");
const {getFullName, getProductLabel}  = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main(){
    console.log("Hello!!");
    database.connectToDatabase("topdatabase");
    
    getFullName(321, "Teclado");
    //product.getFullName(332, "Mouse");
    getProductLabel("Teclado");
    
    console.log(config.client.device);
    
    database.disconnectToDatabase();
}

main();