import { forwardRef } from "@yamada-ui/core"
import { Home as HomeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HomeProps = LucideIconProps

/**
 * `Home` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Home = forwardRef<HomeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HomeIcon} {...props} />
))
