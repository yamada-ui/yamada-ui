import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileQuestion as FileQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileQuestion` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileQuestion = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileQuestionIcon} {...props} />
))
