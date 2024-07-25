import { forwardRef } from "@yamada-ui/core"
import { FileChartColumnIncreasing as FileChartColumnIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileChartColumnIncreasingProps = LucideIconProps

/**
 * `FileChartColumnIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumnIncreasing = forwardRef<
  FileChartColumnIncreasingProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={FileChartColumnIncreasingIcon} {...props} />
))
