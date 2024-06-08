import { forwardRef } from "@yamada-ui/core"
import { LockOpen as LockOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LockOpenProps = LucideIconProps

/**
 * `LockOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockOpen = forwardRef<LockOpenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LockOpenIcon} {...props} />
))
