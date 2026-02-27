"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Umbrella as OriginalUmbrellaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UmbrellaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UmbrellaIcon = component(Icon)({
  as: OriginalUmbrellaIcon,
}) as Component<"svg", IconProps>
