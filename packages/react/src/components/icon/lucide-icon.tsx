"use client"

import type { IconNode } from "lucide-react"
import type { IconProps } from "./icon"
import { Icon as OriginalIcon } from "lucide-react"
import { Icon, withContext } from "./icon"

export interface LucideIconProps extends IconProps {
  /**
   * The icon of the [Lucide lab](https://github.com/lucide-icons/lucide-lab).
   */
  iconNode?: IconNode
}

/**
 * `LucideIcon` is a component for using [Lucide lab](https://github.com/lucide-icons/lucide-lab) icons.
 *
 * @see https://yamada-ui.com/components/icon
 */
export const LucideIcon = withContext<"svg", LucideIconProps>((props) => (
  <Icon as={OriginalIcon} {...props} />
))()
