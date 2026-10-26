"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UsersCollaboration as OriginalUsersCollaborationIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UsersCollaborationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UsersCollaborationIcon = component(Icon)({
  as: OriginalUsersCollaborationIcon,
}) as Component<"svg", IconProps>
