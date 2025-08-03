export interface FormatCurrencyProps {
  amount: number | string | null | undefined;
  denominator?: number;
  currency?: string;
  showDecimals?: boolean;
}

export const formatToCurrency = ({
  amount,
  denominator = 100,
  currency = `NGN`,
  showDecimals = false,
}: FormatCurrencyProps): string => {
  if (typeof window === 'undefined') return '-';

  const defaultCurrency: string | undefined = currency;

  const locale: string = defaultCurrency === 'USD' ? 'en-US' : 'en-NG';
  // : countries.find(item => item.abbreviation === defaultCurrency)?.locale || 'en-US';

  try {
    const cleanedAmount: number =
      typeof amount === 'string'
        ? Number(amount.replace(/,/g, '')) / denominator
        : Number(amount?.toString().replace(/,/g, '')) / denominator || 0; // Default to 0 if amount is null/undefined

    if (isNaN(cleanedAmount)) throw new Error('Invalid amount');

    const formattedString: string = cleanedAmount.toLocaleString(locale, {
      style: 'currency',
      currency: defaultCurrency ?? '',
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
    });

    if (formattedString.includes('NaN')) {
      throw new Error('Formatted as NaN');
    }
    return formattedString;
  } catch (error) {
    console.error(error);
    return '-';
  }
};
