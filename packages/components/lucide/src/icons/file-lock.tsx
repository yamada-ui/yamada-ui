import { forwardRef } from "@yamada-ui/core"
import { FileLock as FileLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileLockProps = LucideIconProps

/**
 * `FileLock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileLock = forwardRef<FileLockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileLockIcon} {...props} />
))
