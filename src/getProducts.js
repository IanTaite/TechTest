import * as cheerio from "cheerio";
import getHtml from "./getHtml.js";
import getPricing from "./getPricing.js";

export default async function getProducts(url) {
  // Grab the web page
  const page = await getHtml(url);

  // Load the html into the parser
  const $ = cheerio.load(page);

  // This selector finds a package
  const PACKAGE_SELECTOR = ".pricing-table .package";
  // Each of these selectors finds a particular property in a package
  const TITLE_SELECTOR = "h3";
  const DESCRIPTION_SELECTOR = ".package-name";
  const PRICE_SELECTOR = ".package-price"
  const DISCOUNT_SELECTOR = ".package-price p";

  // This is the final results array
  // The spec calls
  const products = [];

  // Find all packaes and iterate over each one
  $(PACKAGE_SELECTOR).each((index, packageEl) => {
    const titleLine = $(packageEl).find(TITLE_SELECTOR).text();
    const descriptionLine = $(packageEl).find(DESCRIPTION_SELECTOR).text();
    const priceLine = $(packageEl).find(PRICE_SELECTOR).text();
    const discountLine = $(packageEl).find(DISCOUNT_SELECTOR).text();
    // Extract the annual price and discount if there is any
    const pricing = getPricing(titleLine, priceLine, discountLine);
    // Push selected package properties onto the final results array
    products.push({
      "option title": titleLine,
      description: descriptionLine,
      ...pricing
    });
  });

  // Sort in descending order
  products.sort((a, b) => b.annualPrice - a.annualPrice);

  return products;
}
