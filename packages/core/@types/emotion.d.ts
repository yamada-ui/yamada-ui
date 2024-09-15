import type { StyledTheme } from "../src"

declare module "@emotion/react" {
  interface Theme extends StyledTheme {}
}
