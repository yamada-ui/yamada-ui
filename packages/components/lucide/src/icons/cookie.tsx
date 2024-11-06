import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cookie as LucideCookieIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CookieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CookieIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCookieIcon} {...props} />
))

/**
 * @deprecated Use `CookieIcon` instead.
 */
export const Cookie = CookieIcon
