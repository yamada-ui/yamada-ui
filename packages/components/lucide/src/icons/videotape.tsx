import { forwardRef } from "@yamada-ui/core"
import { Videotape as VideotapeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VideotapeProps = LucideIconProps

/**
 * `Videotape` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Videotape = forwardRef<VideotapeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VideotapeIcon} {...props} />
))
