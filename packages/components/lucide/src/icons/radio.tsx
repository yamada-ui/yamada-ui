import { forwardRef } from "@yamada-ui/core"
import { Radio as RadioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RadioProps = LucideIconProps

/**
 * `Radio` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Radio = forwardRef<RadioProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RadioIcon} {...props} />
))
