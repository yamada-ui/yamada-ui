import { forwardRef } from "@yamada-ui/core"
import { WheatOff as WheatOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WheatOffProps = LucideIconProps

/**
 * `WheatOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WheatOff = forwardRef<WheatOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WheatOffIcon} {...props} />
))
