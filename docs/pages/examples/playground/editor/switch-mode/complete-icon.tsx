import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const CompleteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        stroke="none"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <rect x="4" y="3" width="12" height="2" rx="1" />
        <rect x="4" y="7" width="12" height="2" rx="1" />
        <rect x="4" y="11" width="3" height="2" rx="1" />
        <rect x="4" y="15" width="3" height="2" rx="1" />
        <rect x="8.5" y="11" width="3" height="2" rx="1" />
        <rect x="8.5" y="15" width="3" height="2" rx="1" />
        <rect x="13" y="11" width="3" height="2" rx="1" />
      </Icon>
    )
  },
)

CompleteIcon.displayName = "CompleteIcon"
