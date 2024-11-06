import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Building2 as LucideBuilding2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Building2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Building2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBuilding2Icon} {...props} />,
)

/**
 * @deprecated Use `Building2Icon` instead.
 */
export const Building2 = Building2Icon
