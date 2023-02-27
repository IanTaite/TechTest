import getPrice from "./getPricing";

describe("getPrice Test Suite", () => {
  test("should calculate annual price for Basic plan paid Monthly for 12 months", () => {
    // Arrange
    const titleLine = "Basic 500Mb Data - 12 Months";
    const priceLine = "£5.99(inc. VAT)Per Month";
    const discountLine = "";
    // Act
    const actualResult = getPrice(titleLine, priceLine, discountLine);
    // Assert
    expect(actualResult).toEqual({
      annualPrice: 71.88,
      discount: 0.0,
    });
  });
  test("should calculate annual price for Standard plan paid Monthly for 12 months", () => {
    // Arrange
    const titleLine = "Standard: 1GB Data - 12 Months";
    const priceLine = "£9.99(inc. VAT)Per Month";
    const discountLine = "";
    // Act
    const actualResult = getPrice(titleLine, priceLine, discountLine);
    // Assert
    expect(actualResult).toEqual({
      annualPrice: 119.88,
      discount: 0.0,
    });
  });
  test("should calculate annual price for Optimum plan paid Monthly for 12 months", () => {
    // Arrange
    const titleLine = "Optimum: 2GB Data - 12 Months";
    const priceLine = "£15.99(inc. VAT)Per Month";
    const discountLine = "";
    // Act
    const actualResult = getPrice(titleLine, priceLine, discountLine);
    // Assert
    expect(actualResult).toEqual({
      annualPrice: 191.88,
      discount: 0.0,
    });
  });
  test("should calculate annual price and discount for Basic plan paid Yearly", () => {
    // Arrange
    const titleLine = "Basic: 6GB Data - 1 Year";
    const priceLine = "£66.00(inc. VAT)Per Year\nSave £5.86 on the monthly price";
    const discountLine = "Save £5.86 on the monthly price";
    // Act
    const actualResult = getPrice(titleLine, priceLine, discountLine);
    // Assert
    expect(actualResult).toEqual({
      annualPrice: 66.0,
      discount: 5.86,
    });
  });
  test("should calculate annual price and discount for Standard plan paid Yearly", () => {
    // Arrange
    const titleLine = "Standard: 12GB Data - 1 Year";
    const priceLine = "£108.00(inc. VAT)Per YearSave £11.90 on the monthly price";
    const discountLine = "Save £11.90 on the monthly price";
    // Act
    const actualResult = getPrice(titleLine, priceLine, discountLine);
    // Assert
    expect(actualResult).toEqual({
      annualPrice: 108.0,
      discount: 11.9,
    });
  });
  test("should calculate annual price and discount for Optimum plan paid Yearly", () => {
    // Arrange
    const packageTitle = "Optimum: 24Gb Data - 1 Year";
    const packagePrice = "£174.00(inc. VAT)Per Year\nSave £17.90 on the monthly price";
    const discountLine = "Save £17.90 on the monthly price";
    // Act
    const actualResult = getPrice(packageTitle, packagePrice, discountLine);
    // Assert
    expect(actualResult).toEqual({
      annualPrice: 174.0,
      discount: 17.9,
    });
  });
});
