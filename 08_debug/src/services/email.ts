async function getBaseEmail(senderName : String) : Promise<string>{
    
    let base = await getHeaderText();
    
    base += `Hello ${senderName}`;

    base += "\nthis is my email";

    return base;
}

async function getHeaderText() : Promise<string> {
    return "Email for you!"
}

export { getBaseEmail }