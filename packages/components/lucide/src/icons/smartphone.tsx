import { forwardRef } from "@yamada-ui/core"
import { Smartphone as SmartphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SmartphoneProps = LucideIconProps

/**
 * `Smartphone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Smartphone = forwardRef<SmartphoneProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SmartphoneIcon} {...props} />
))
