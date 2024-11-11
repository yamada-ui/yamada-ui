import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BriefcaseMedical as OriginalBriefcaseMedical } from "lucide-react"

/**
 * `BriefcaseMedicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseMedicalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBriefcaseMedical} {...props} />,
)

/**
 * `BriefcaseMedical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BriefcaseMedicalIcon` instead.
 */
export const BriefcaseMedical = BriefcaseMedicalIcon
