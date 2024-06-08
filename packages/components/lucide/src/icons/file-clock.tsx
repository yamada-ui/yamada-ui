import { forwardRef } from "@yamada-ui/core"
import { FileClock as FileClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileClockProps = LucideIconProps

/**
 * `FileClock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileClock = forwardRef<FileClockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileClockIcon} {...props} />
))
