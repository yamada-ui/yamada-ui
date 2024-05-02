import { Icon } from "@yamada-ui/react"
import type { IconProps } from "@yamada-ui/react"
import { forwardRef } from "react"

export const MagnifyingGlass = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1.2em", ...rest }, ref) => {
    return (
      <Icon ref={ref} boxSize={boxSize} viewBox="0 0 24 24" {...rest}>
        <path
          fill="currentColor"
          d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
        />
      </Icon>
    )
  },
)

MagnifyingGlass.displayName = "MagnifyingGlass"
