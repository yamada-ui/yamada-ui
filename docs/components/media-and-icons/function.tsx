import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Function = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1.5em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...rest}
      >
        <path d="M8 21s-4-3-4-9 4-9 4-9" />
        <path d="M16 3s4 3 4 9-4 9-4 9" />
      </Icon>
    )
  },
)

Function.displayName = "Function"
