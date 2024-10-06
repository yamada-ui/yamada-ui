import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { KeyRound as KeyRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `KeyRound` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyRound = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeyRoundIcon} {...props} />
))
