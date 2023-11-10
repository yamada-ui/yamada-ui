import { Icon, IconProps } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Npm = forwardRef<SVGSVGElement, IconProps>(({ boxSize = "1.3em", ...rest }, ref) => {
  return (
    <Icon
      ref={ref}
      boxSize={boxSize}
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 576 512"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
    </Icon>
  )
})

Npm.displayName = "Npm"
