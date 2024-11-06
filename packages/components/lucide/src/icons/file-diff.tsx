import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileDiff as LucideFileDiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileDiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDiffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileDiffIcon} {...props} />
))

/**
 * @deprecated Use `FileDiffIcon` instead.
 */
export const FileDiff = FileDiffIcon
