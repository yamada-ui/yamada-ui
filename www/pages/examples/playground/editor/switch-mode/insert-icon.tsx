import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const InsertIcon = forwardRef<SVGSVGElement, IconProps>(
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
        <path
          clipRule="evenodd"
          d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
          fillRule="evenodd"
        />
        <rect height="2" rx="1" width="3" x="4" y="15" />
        <rect height="2" rx="1" width="3" x="8.5" y="15" />
        <rect height="2" rx="1" width="3" x="13" y="15" />
      </Icon>
    )
  },
)

InsertIcon.displayName = "InsertIcon"
