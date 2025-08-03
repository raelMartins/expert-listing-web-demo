import {formatInTimeZone, format as formatTz} from 'date-fns-tz';

const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get user's local timezone as default

export const changeDateFormat = (string: string, extra?: string, timezone = defaultTimezone) => {
  try {
    if (!string) {
      return '-';
    }

    const date = new Date(string);
    //  parseISO(string);

    if (isNaN(date.getTime())) {
      return '-';
    }

    let formatString = "d'th' MMM, yyyy"; // Default format
    const getSuffix = () => {
      const day = date.getDate();

      let suffix = 'th';

      if (day === 1 || day === 21 || day === 31) {
        suffix = 'st';
      } else if (day === 2 || day === 22) {
        suffix = 'nd';
      } else if (day === 3 || day === 23) {
        suffix = 'rd';
      }

      return suffix;
    };
    const suffix = getSuffix();
    switch (extra) {
      case 'add_time':
        formatString = 'MMM yyyy, h:mm a';
        break;
      case 'monthandyear':
        formatString = 'MMM, yyyy';
        break;
      case 'month,day,year-no suffix':
        formatString = 'MMM d, yyyy';
        break;
      case 'monthandtime':
        formatString = 'MMMM d, h:mm a';
        break;
      case 'monthandday':
        formatString = 'MMM dd';
        break;
      case 'mm/dd/yyyy':
        formatString = 'MM/dd/yyyy';
        break;
      case 'mm-dd-yyyy':
        formatString = 'MM-dd-yyyy';
        break;
      case 'yyyy-mm-dd':
        formatString = 'yyyy-MM-dd';
        break;
      case 'timeZone offset':
        formatString = 'dd MMM yyyy | hh:mmaaa (OOOO) ';
        break;
      case 'timeZone offset comma':
        formatString = 'dd MMM yyyy, hh:mmaaa (OOOO) ';
        break;
      case 'monthFirst':
        formatString = `MMM d'${suffix}', yyyy`;
        break;
      default:
        formatString = `d'${suffix}' MMM, yyyy`;
        break;
    }

    let formattedDate;

    if (extra === 'timeZone offset comma' || extra === 'timeZone offset') {
      const formatString =
        extra === 'timeZone offset'
          ? 'dd MMM yyyy | hh:mmaaa (OOOO)'
          : 'dd MMM yyyy, hh:mmaaa (OOOO)';
      formattedDate = formatInTimeZone(string, timezone, formatString);
    } else if (extra == 'monthandtime') {
      const preFormattedDate = formatTz(date, formatString, {
        timeZone: timezone,
      }).replace(',', ' at');
      formattedDate = preFormattedDate;
    } else {
      formattedDate = formatTz(date, formatString, {timeZone: timezone});
    }

    return formattedDate;
  } catch (err) {
    console.error('Error formatting date:', err);
    return '-';
  }
};

export const dateOrTimeAgo = (time: string, extra?: string) => {
  const d = new Date(); // Gets the current time
  const ts = Math.floor(new Date(time).getTime() / 1000);
  const nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
  const seconds = nowTs - ts;

  // more that two days
  if (seconds >= 2 * 24 * 3600) {
    return changeDateFormat(time, extra);
  }
  // a day
  if (seconds > 24 * 3600) {
    return 'yesterday';
  }

  if (seconds > 3600) {
    const h = seconds / 3600;
    return `${Math.floor(h)} hour${Math.floor(h) == 1 ? '' : 's'} ago`;
  }

  if (seconds > 60) {
    const m = seconds / 60;
    return `${Math.floor(m)} minute${Math.floor(m) == 1 ? '' : 's'} ago`;
  }
  if (seconds < 60) {
    return `now`;
  }
};

export const formatDateStringDayFirst = (numericValue: string) => {
  const day = numericValue.substr(0, 2);
  const month = numericValue.substr(2, 2);
  const year = numericValue.substr(4);

  let formattedDate = parseInt(day) >= 31 ? `31` : `${day}`;

  if (month.length > 0) {
    formattedDate += parseInt(month) >= 12 ? `/12` : `/${month}`;
  }

  if (year.length > 0) {
    formattedDate +=
      parseInt(year.slice(0, 4)) >= new Date().getFullYear()
        ? `/${new Date().getFullYear()}`
        : `/${year.slice(0, 4)}`;
  }

  return formattedDate;
};
