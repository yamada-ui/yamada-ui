import { forwardRef } from "@yamada-ui/core"
import { ArrowLeft as ArrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowLeftProps = LucideIconProps

/**
 * `ArrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeft = forwardRef<ArrowLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowLeftIcon} {...props} />
))
