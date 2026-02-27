"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bone as OriginalBoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoneIcon = component(Icon)({ as: OriginalBoneIcon }) as Component<
  "svg",
  IconProps
>
