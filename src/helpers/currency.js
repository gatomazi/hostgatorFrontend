const CalcValues = (originalPrice, divisor, pctDiscount) => {
  let arrCalc = [];
  arrCalc["valueWDDiscount"] = originalPrice * pctDiscount;
  arrCalc["valueMonth"] = arrCalc["valueWDDiscount"] / divisor;
  arrCalc["valueTotalDiscount"] = originalPrice - arrCalc["valueWDDiscount"];
  arrCalc["originalPrice"] = originalPrice;
  Object.keys(arrCalc).map((element, index) => {
    arrCalc[element] = formatCurrency(arrCalc[element]);
  });

  return arrCalc;
};

const formatCurrency = value => {
  let newValue = value;
  if (typeof value != "string") {
    newValue = parseFloat(value).toFixed(2);
  }
  return "R$ " + String(newValue).replace(".", ",");
};

export { CalcValues };
