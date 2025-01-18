const databaseType = {
    userType: "admin",
    TypeData: "datalocal",
}

async function connectToDatabase(dataName) {
    //Logica...
    console.log(`conectado ao banco ${dataName}`);
}

async function disconnectToDatabase() {
    //Logica...
    console.log(`desconectando do banco`);
}

export {connectToDatabase, disconnectToDatabase, 
    databaseType, };

// module.export = {
//     ...
// }