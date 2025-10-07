import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const EditIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        aria-hidden="true"
        boxSize={boxSize}
        fill="currentColor"
        focusable="false"
        stroke="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <rect height="2" rx="1" width="12" x="4" y="3" />
        <rect height="2" rx="1" width="12" x="4" y="7" />
        <rect height="2" rx="1" width="3" x="4" y="11" />
        <rect height="2" rx="1" width="4" x="4" y="15" />
        <rect height="2" rx="1" width="3" x="8.5" y="11" />
        <path d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z" />
      </Icon>
    )
  },
)

EditIcon.displayName = "EditIcon"
