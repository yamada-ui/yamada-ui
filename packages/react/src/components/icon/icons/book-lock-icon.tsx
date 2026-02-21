"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookLock as OriginalBookLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookLockIcon = component(Icon)({
  as: OriginalBookLockIcon,
}) as Component<"svg", IconProps>
