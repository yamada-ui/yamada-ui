import "react"

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: number | string
  }

  interface DataAttributes {
    [key: `data-${string}`]: string | undefined
  }
}
