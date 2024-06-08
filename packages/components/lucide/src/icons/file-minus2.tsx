import { forwardRef } from "@yamada-ui/core"
import { FileMinus2 as FileMinus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileMinus2Props = LucideIconProps

/**
 * `FileMinus2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMinus2 = forwardRef<FileMinus2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileMinus2Icon} {...props} />
))
