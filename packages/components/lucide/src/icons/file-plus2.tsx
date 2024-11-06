import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FilePlus2 as LucideFilePlus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FilePlus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePlus2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFilePlus2Icon} {...props} />,
)

/**
 * @deprecated Use `FilePlus2Icon` instead.
 */
export const FilePlus2 = FilePlus2Icon
