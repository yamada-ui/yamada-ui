import { forwardRef } from "@yamada-ui/core"
import { ShieldQuestion as ShieldQuestionIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldQuestionProps = LucideIconProps

/**
 * `ShieldQuestion` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldQuestion = forwardRef<ShieldQuestionProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ShieldQuestionIcon} {...props} />,
)
