async function getBaseEmail(senderName : String) : Promise<string>{
    
    let base = `Hello ${senderName}`;

    base += "\nthis is my email";

    return base;
}

export { getBaseEmail }