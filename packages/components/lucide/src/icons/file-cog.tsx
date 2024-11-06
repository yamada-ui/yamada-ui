import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileCog as LucideFileCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCogIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileCogIcon} {...props} />
))

/**
 * @deprecated Use `FileCogIcon` instead.
 */
export const FileCog = FileCogIcon
