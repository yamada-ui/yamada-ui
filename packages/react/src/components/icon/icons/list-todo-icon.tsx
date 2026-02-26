"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListTodo as OriginalListTodoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListTodoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListTodoIcon = component(Icon)({
  as: OriginalListTodoIcon,
}) as Component<"svg", IconProps>
