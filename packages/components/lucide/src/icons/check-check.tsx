import { forwardRef } from "@yamada-ui/core"
import { CheckCheck as CheckCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CheckCheckProps = LucideIconProps

/**
 * `CheckCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckCheck = forwardRef<CheckCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CheckCheckIcon} {...props} />
))
