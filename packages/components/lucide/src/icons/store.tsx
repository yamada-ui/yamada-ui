import { forwardRef } from "@yamada-ui/core"
import { Store as StoreIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StoreProps = LucideIconProps

/**
 * `Store` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Store = forwardRef<StoreProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StoreIcon} {...props} />
))
