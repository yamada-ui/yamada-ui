import { forwardRef } from "@yamada-ui/core"
import { Router as RouterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RouterProps = LucideIconProps

/**
 * `Router` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Router = forwardRef<RouterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RouterIcon} {...props} />
))
