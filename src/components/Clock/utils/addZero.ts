export const addZero = (value: number) => {
  if (value <= 9) {
    return "0" + value;
  }
  return String(value);
};
