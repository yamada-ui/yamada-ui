import { forwardRef } from "@yamada-ui/core"
import { PawPrint as PawPrintIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PawPrintProps = LucideIconProps

/**
 * `PawPrint` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PawPrint = forwardRef<PawPrintProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PawPrintIcon} {...props} />
))
