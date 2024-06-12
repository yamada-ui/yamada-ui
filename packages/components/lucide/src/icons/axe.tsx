import { forwardRef } from "@yamada-ui/core"
import { Axe as AxeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AxeProps = LucideIconProps

/**
 * `Axe` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Axe = forwardRef<AxeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AxeIcon} {...props} />
))
