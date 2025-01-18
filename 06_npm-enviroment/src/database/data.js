
async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE)
        console.log("Conectado!!");
    else
        console.log("Falha de login...");
    
}

export default connectToDatabase;