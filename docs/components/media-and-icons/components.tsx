import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Components = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1.5em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...rest}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12l3 3l3 -3l-3 -3z" />
        <path d="M15 12l3 3l3 -3l-3 -3z" />
        <path d="M9 6l3 3l3 -3l-3 -3z" />
        <path d="M9 18l3 3l3 -3l-3 -3z" />
      </Icon>
    )
  },
)

Components.displayName = "Components"
