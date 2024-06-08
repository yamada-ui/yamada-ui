import { forwardRef } from "@yamada-ui/core"
import { FilePlus as FilePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilePlusProps = LucideIconProps

/**
 * `FilePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePlus = forwardRef<FilePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilePlusIcon} {...props} />
))
