import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ShieldQuestion as OriginalShieldQuestion } from "lucide-react"

/**
 * `ShieldQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldQuestionIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalShieldQuestion} {...props} />
))

/**
 * `ShieldQuestion` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ShieldQuestionIcon` instead.
 */
export const ShieldQuestion = ShieldQuestionIcon
