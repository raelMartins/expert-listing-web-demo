export const formatNumberWithCommas = (
  prop: number | string | null | undefined,
  options: Intl.NumberFormatOptions = {}
): string => {
  const number = parseFloat(String(prop));

  if (!isNaN(number) && isFinite(number)) {
    return number.toLocaleString('en-US', options);
  }
  return '';
};

/**
 * Formats a number to an abbreviated string (e.g., 1000 to 1K, 1000000 to 1M).
 * @param amount The number to abbreviate.
 * @returns The abbreviated string.
 */

export const formatNumAbbrev = (amount: number): string => {
  if (amount >= 1000000) {
    return (amount % 1000000 === 0 ? amount / 1000000 : (amount / 1000000).toFixed(1)) + 'M';
  } else if (amount >= 1000) {
    return (amount % 1000 === 0 ? amount / 1000 : (amount / 1000).toFixed(1)) + 'K';
  } else {
    return amount.toString();
  }
};
