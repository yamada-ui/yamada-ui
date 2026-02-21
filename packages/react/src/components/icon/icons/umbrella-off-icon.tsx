"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UmbrellaOff as OriginalUmbrellaOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UmbrellaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UmbrellaOffIcon = component(Icon)({
  as: OriginalUmbrellaOffIcon,
}) as Component<"svg", IconProps>
