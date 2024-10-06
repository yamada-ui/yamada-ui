import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileOutput as FileOutputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileOutput` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileOutput = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileOutputIcon} {...props} />
))
