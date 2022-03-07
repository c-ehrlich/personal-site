export function getDate(date: string): string {
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
  const dateString = `${months[d.getMonth() - 1]} ${day}, ${year}`;
  return dateString;
} 
