import { forwardRef } from "@yamada-ui/core"
import { NotebookText as NotebookTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NotebookTextProps = LucideIconProps

/**
 * `NotebookText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookText = forwardRef<NotebookTextProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={NotebookTextIcon} {...props} />,
)
