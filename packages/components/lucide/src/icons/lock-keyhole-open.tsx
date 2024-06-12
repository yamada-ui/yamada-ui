import { forwardRef } from "@yamada-ui/core"
import { LockKeyholeOpen as LockKeyholeOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LockKeyholeOpenProps = LucideIconProps

/**
 * `LockKeyholeOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeOpen = forwardRef<LockKeyholeOpenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LockKeyholeOpenIcon} {...props} />,
)
