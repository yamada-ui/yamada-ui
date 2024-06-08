import { forwardRef } from "@yamada-ui/core"
import { Medal as MedalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MedalProps = LucideIconProps

/**
 * `Medal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Medal = forwardRef<MedalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MedalIcon} {...props} />
))
