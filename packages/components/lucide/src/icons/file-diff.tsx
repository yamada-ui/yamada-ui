import { forwardRef } from "@yamada-ui/core"
import { FileDiff as FileDiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileDiffProps = LucideIconProps

/**
 * `FileDiff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDiff = forwardRef<FileDiffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileDiffIcon} {...props} />
))
