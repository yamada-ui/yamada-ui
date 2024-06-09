import { forwardRef } from "@yamada-ui/core"
import { BriefcaseMedical as BriefcaseMedicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BriefcaseMedicalProps = LucideIconProps

/**
 * `BriefcaseMedical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseMedical = forwardRef<BriefcaseMedicalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BriefcaseMedicalIcon} {...props} />,
)
