import {getBaseEmail} from './services/email'


async function main() {
    console.log(await getBaseEmail("Top@email.com"));

    console.log("Finalizando...")
}

main();