import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BriefcaseConveyorBelt as OriginalBriefcaseConveyorBelt } from "lucide-react"

/**
 * `BriefcaseConveyorBeltIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseConveyorBeltIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalBriefcaseConveyorBelt} {...props} />
  ),
)

/**
 * `BriefcaseConveyorBelt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BriefcaseConveyorBeltIcon` instead.
 */
export const BriefcaseConveyorBelt = BriefcaseConveyorBeltIcon
