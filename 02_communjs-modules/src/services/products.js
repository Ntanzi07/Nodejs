// todas as functions que lidam com produto

const productType = {
    versio: "digital",
    tax: "x1",
}

async function getFullName(codeId, productName) {
    console.log(`\nproduct${codeId}--${productName} : ${productType.versio}`);
}

async function getProductLabel(productName) {
    console.log(`Product ${productName}`);
}

module.exports = {
    getFullName,
    getProductLabel,
};