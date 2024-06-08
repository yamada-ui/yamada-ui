import { forwardRef } from "@yamada-ui/core"
import { Check as CheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CheckProps = LucideIconProps

/**
 * `Check` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Check = forwardRef<CheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CheckIcon} {...props} />
))
