import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileMinus2 as LucideFileMinus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileMinus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMinus2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileMinus2Icon} {...props} />,
)

/**
 * @deprecated Use `FileMinus2Icon` instead.
 */
export const FileMinus2 = FileMinus2Icon
