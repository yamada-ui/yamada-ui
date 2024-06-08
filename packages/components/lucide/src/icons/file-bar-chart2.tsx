import { forwardRef } from "@yamada-ui/core"
import { FileBarChart2 as FileBarChart2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileBarChart2Props = LucideIconProps

/**
 * `FileBarChart2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBarChart2 = forwardRef<FileBarChart2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileBarChart2Icon} {...props} />,
)
