export const radsToDegrees = (radians) => {
  return (radians * 180) / Math.PI;
};

export const roundToPlaces = (value, places) => {
  const mult = Math.pow(10, places);
  return Math.round(value * mult) / mult;
};

/*Let's say we have grid size of 40 and we get a input value 113
How do we round the value 113 to a nearest value that is a multiple of 40
The nearest value that is multiple of 40 for 113 is 120
To calculate that divide 113/40, now round that value, multiply that rounded value by 40*/
export const roundNearest = (value, nearest) => {
  return Math.round(value / nearest) * nearest;
};
