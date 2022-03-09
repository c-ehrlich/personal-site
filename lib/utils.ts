export function getFullDate(date: string): string {
  if (!date.match(/^\d{4}\/\d{2}\/\d{2}$/))
    return 'getFullDate got invalid input';

  const [year, month, day] = date.split('/');
  const d = new Date(Number(year), Number(month), Number(day));
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${months[d.getMonth() - 1]} ${day}, ${year}`;
}

export function getMonthYearDate(date: string): string {
  if (!date.match(/^\d{4}\/\d{2}\/\d{2}$/))
    return 'getFullDate got invalid input';

  const [year, month, _] = date.split('/');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${months[Number(month)-1]} ${year}`;
}
