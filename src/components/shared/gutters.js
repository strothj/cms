import * as breakpoints from './breakpoints';

export default (bp, multiplier) => {
  let size = 16;
  if (bp === breakpoints.FOR_TABLET || bp === breakpoints.FOR_DESKTOP) size = 24;
  if (multiplier) size *= multiplier;
  return `${size}px`;
};
