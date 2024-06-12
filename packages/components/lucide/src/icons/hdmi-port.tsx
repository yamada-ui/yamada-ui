import { forwardRef } from "@yamada-ui/core"
import { HdmiPort as HdmiPortIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HdmiPortProps = LucideIconProps

/**
 * `HdmiPort` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HdmiPort = forwardRef<HdmiPortProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HdmiPortIcon} {...props} />
))
