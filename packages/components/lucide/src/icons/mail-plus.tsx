import { forwardRef } from "@yamada-ui/core"
import { MailPlus as MailPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailPlusProps = LucideIconProps

/**
 * `MailPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailPlus = forwardRef<MailPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailPlusIcon} {...props} />
))
