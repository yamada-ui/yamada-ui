import { forwardRef } from "@yamada-ui/core"
import { Microwave as MicrowaveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MicrowaveProps = LucideIconProps

/**
 * `Microwave` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Microwave = forwardRef<MicrowaveProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicrowaveIcon} {...props} />
))
