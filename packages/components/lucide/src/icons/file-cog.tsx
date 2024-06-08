import { forwardRef } from "@yamada-ui/core"
import { FileCog as FileCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileCogProps = LucideIconProps

/**
 * `FileCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCog = forwardRef<FileCogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileCogIcon} {...props} />
))
