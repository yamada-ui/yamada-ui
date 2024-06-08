import { forwardRef } from "@yamada-ui/core"
import { FileMinus as FileMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileMinusProps = LucideIconProps

/**
 * `FileMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMinus = forwardRef<FileMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileMinusIcon} {...props} />
))
