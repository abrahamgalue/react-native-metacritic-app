export const months = {
  1: 'JAN',
  2: 'FEB',
  3: 'MAR',
  4: 'APR',
  5: 'MAY',
  6: 'JUN',
  7: 'JUL',
  8: 'AUG',
  9: 'SEP',
  10: 'OCT',
  11: 'NOV',
  12: 'DEC',
}

export const getColors = ({ score, maxScore }) => {
  const percentage = (score / maxScore) * 100

  if (percentage < 40) return '#ff6874'
  if (percentage < 65) return '#ffbd3f'
  return '#00ce7a'
}
