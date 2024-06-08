import { forwardRef } from "@yamada-ui/core"
import { Cookie as CookieIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CookieProps = LucideIconProps

/**
 * `Cookie` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cookie = forwardRef<CookieProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CookieIcon} {...props} />
))
