import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Component } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ComponentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ComponentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Component} className={cx("ui-lucide-icon", className)} {...rest} />
)
