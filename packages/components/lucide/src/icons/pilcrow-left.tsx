import { forwardRef } from "@yamada-ui/core"
import { PilcrowLeft as PilcrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PilcrowLeftProps = LucideIconProps

/**
 * `PilcrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowLeft = forwardRef<PilcrowLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PilcrowLeftIcon} {...props} />
))
