import { Icon, IconProps } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Logo = forwardRef<SVGSVGElement, IconProps>(({ boxSize = "1.25em", ...rest }, ref) => {
  return <Icon ref={ref} boxSize={boxSize} {...rest} />
})

Logo.displayName = "Logo"
