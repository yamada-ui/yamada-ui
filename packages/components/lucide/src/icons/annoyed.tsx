import { forwardRef } from "@yamada-ui/core"
import { Annoyed as AnnoyedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AnnoyedProps = LucideIconProps

/**
 * `Annoyed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Annoyed = forwardRef<AnnoyedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AnnoyedIcon} {...props} />
))
