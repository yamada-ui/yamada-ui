import { forwardRef } from "@yamada-ui/core"
import { Bot as BotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BotProps = LucideIconProps

/**
 * `Bot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bot = forwardRef<BotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BotIcon} {...props} />
))
