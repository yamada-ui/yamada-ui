import { forwardRef } from "@yamada-ui/core"
import { Key as KeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type KeyProps = LucideIconProps

/**
 * `Key` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Key = forwardRef<KeyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeyIcon} {...props} />
))
