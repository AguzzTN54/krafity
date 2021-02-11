const formatPrice = (prices) => {
  const price = prices.toString();
  const l = price.length;

  if (l > 6) {
    const ratusRibu = price.substring(l - 6, l - 3);
    const koma = parseInt(ratusRibu, 10) > 0 ? ratusRibu : '';
    return `${price.substring(0, l - 6)},${koma} JT`;
  }
  if (l > 3) return `${price.substring(0, l - 3)}K`;
};

// prettier-ignore
export const formatNumber = (price) => price
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export default formatPrice;
