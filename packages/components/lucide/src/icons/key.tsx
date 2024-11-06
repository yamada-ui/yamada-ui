import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Key as LucideKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideKeyIcon} {...props} />
))

/**
 * @deprecated Use `KeyIcon` instead.
 */
export const Key = KeyIcon
