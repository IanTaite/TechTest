export default function getPricing(titleLine, priceLine, discountLine) {
  const priceLineMatches = priceLine.match(
    /£(\d+\.\d{2})\(inc. VAT\)Per (Month|Year)/
  );
  if (priceLineMatches === null) {
    throw new Error(
      `Regex cannot extract pricing from product with title "${titleLine}"`
    );
  }
  const intervalPrice = +priceLineMatches[1];
  const paymentInterval = priceLineMatches[2];
  const annualPrice = intervalPrice * (paymentInterval === "Month" ? 12 : 1);

  const discountMatches = discountLine.match(/£(\d+\.\d{2})/);
  const discount = discountMatches === null ? 0.0 : +discountMatches[1];

  return {
    annualPrice,
    discount,
  };
}
