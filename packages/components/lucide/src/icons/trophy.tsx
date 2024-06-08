import { forwardRef } from "@yamada-ui/core"
import { Trophy as TrophyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TrophyProps = LucideIconProps

/**
 * `Trophy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trophy = forwardRef<TrophyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrophyIcon} {...props} />
))
