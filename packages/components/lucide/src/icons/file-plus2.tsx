import { forwardRef } from "@yamada-ui/core"
import { FilePlus2 as FilePlus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilePlus2Props = LucideIconProps

/**
 * `FilePlus2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePlus2 = forwardRef<FilePlus2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilePlus2Icon} {...props} />
))
