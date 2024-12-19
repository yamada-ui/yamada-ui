import type { IconNode } from "lucide-react"
import type { FC } from "../../core"
import type { IconProps } from "./icon"
import { Icon as OriginalIcon } from "lucide-react"
import { cx } from "../../utils"
import { Icon } from "./icon"

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
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LucideIcon: FC<LucideIconProps> = ({
  className,
  icon,
  ...rest
}) => {
  return (
    <Icon
      as={OriginalIcon}
      className={cx("ui-lucide-icon", className)}
      iconNode={icon}
      {...rest}
    />
  )
}

LucideIcon.__ui__ = "LucideIcon"
