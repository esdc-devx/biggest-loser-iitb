const truncateDecimal  = env => {
  env.addFilter('truncateDecimal', (num, digits) => {
    const str = num.toString();
    const decPos = str.indexOf('.');
    const substrLength = decPos === -1 ? str.length : 1 + decPos + digits;
    const trimmedResult = str.substr(0, substrLength);
    const finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

    return parseFloat(finalResult);
  })
}

module.exports = { 
  truncateDecimal,
}