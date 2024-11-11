import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BriefcaseBusiness as OriginalBriefcaseBusiness } from "lucide-react"

/**
 * `BriefcaseBusinessIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseBusinessIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBriefcaseBusiness} {...props} />,
)

/**
 * `BriefcaseBusiness` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BriefcaseBusinessIcon` instead.
 */
export const BriefcaseBusiness = BriefcaseBusinessIcon
