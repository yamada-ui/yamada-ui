import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileCheck2 as LucideFileCheck2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileCheck2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCheck2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileCheck2Icon} {...props} />,
)

/**
 * @deprecated Use `FileCheck2Icon` instead.
 */
export const FileCheck2 = FileCheck2Icon
