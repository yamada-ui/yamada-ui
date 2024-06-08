import { forwardRef } from "@yamada-ui/core"
import { EyeOff as EyeOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EyeOffProps = LucideIconProps

/**
 * `EyeOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeOff = forwardRef<EyeOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EyeOffIcon} {...props} />
))
