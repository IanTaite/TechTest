import getProducts from "./getProducts.js";

async function main() {
  const products = await getProducts("https://wltest.dns-systems.net/");
  console.log(JSON.stringify(products, null, 2));
}

main();