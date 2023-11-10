import { spaces } from "./spaces"

export type Sizes = typeof sizes

export const sizes = {
  ...spaces,
  max: "max-content",
  min: "min-content",
  full: "100%",
  "9xs": "1rem",
  "8xs": "1.5rem",
  "7xs": "2rem",
  "6xs": "3rem",
  "5xs": "4.5rem",
  "4xs": "6rem",
  "3xs": "7.5rem",
  "2xs": "10rem",
  xs: "15rem",
  sm: "20rem",
  md: "24rem",
  lg: "28rem",
  xl: "32rem",
  "2xl": "36rem",
  "3xl": "42rem",
  "4xl": "48rem",
  "5xl": "56rem",
  "6xl": "64rem",
  "7xl": "72rem",
  "8xl": "80rem",
  "9xl": "90rem",
}
