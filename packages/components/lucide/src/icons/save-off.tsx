import { forwardRef } from "@yamada-ui/core"
import { SaveOff as SaveOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SaveOffProps = LucideIconProps

/**
 * `SaveOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveOff = forwardRef<SaveOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SaveOffIcon} {...props} />
))
