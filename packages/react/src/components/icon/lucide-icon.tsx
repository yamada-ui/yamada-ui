import type { IconNode } from "lucide-react"
import type { IconProps } from "./icon"
import { Icon as OriginalIcon } from "lucide-react"
import { Icon, withContext } from "./icon"

interface LucideIconOptions {
  /**
   * The icon of the [Lucide lab](https://github.com/lucide-icons/lucide-lab).
   */
  icon: IconNode
}

export interface LucideIconProps extends IconProps, LucideIconOptions {}

/**
 * `LucideIcon` is a component for using [Lucide lab](https://github.com/lucide-icons/lucide-lab) icons.
 *
 * @see Docs https://yamada-ui.com/components/icon
 */
export const LucideIcon = withContext<"svg", LucideIconProps>((props) => (
  <Icon as={OriginalIcon} {...props} />
))()
