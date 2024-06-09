import { forwardRef } from "@yamada-ui/core"
import { SignpostBig as SignpostBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SignpostBigProps = LucideIconProps

/**
 * `SignpostBig` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignpostBig = forwardRef<SignpostBigProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignpostBigIcon} {...props} />
))
