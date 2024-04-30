import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Patreon = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        viewBox="0 0 569 546"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <circle cx="362.589996" cy="204.589996" r="204.589996" fill="#f96854" />
        <rect fill="#052d49" height="545.799988" width="100" x="0" y="0" />
      </Icon>
    )
  },
)

Patreon.displayName = "Patreon"
