import { Icon, IconProps } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Check = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1.25em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
        {...rest}
      >
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
      </Icon>
    )
  },
)

Check.displayName = "Check"
