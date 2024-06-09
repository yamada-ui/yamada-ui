import { forwardRef } from "@yamada-ui/core"
import { Laugh as LaughIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LaughProps = LucideIconProps

/**
 * `Laugh` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Laugh = forwardRef<LaughProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LaughIcon} {...props} />
))
