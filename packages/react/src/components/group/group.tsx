"use client"

import type { ThemeProps } from "../../core"
import type { FlexProps } from "../flex"
import type { GroupStyle } from "./group.style"
import { createComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { dataAttr } from "../../utils"
import { Flex } from "../flex"
import { groupStyle } from "./group.style"
import { useGroup } from "./use-group"

export interface GroupProps
  extends Omit<FlexProps, "grow">, ThemeProps<GroupStyle> {}

const {
  PropsContext: GroupPropsContext,
  usePropsContext: useGroupPropsContext,
  withContext,
} = createComponent<GroupProps, GroupStyle>("group", groupStyle)

export { GroupPropsContext, useGroupPropsContext }

/**
 * `Group` is a component that groups and attaches multiple elements together.
 *
 * @see https://yamada-ui.com/docs/components/group
 */
export const Group = withContext<"div", GroupProps, "attached" | "orientation">(
  Flex,
  { transferProps: ["attached", "orientation"] },
)(
  undefined,
  ({
    attached: attachedProp,
    children,
    orientation: orientationProp,
    ...rest
  }) => {
    const orientation = useValue(orientationProp)
    const attached = useValue(attachedProp)
    const cloneChildren = useGroup(children)

    return {
      "data-attached": dataAttr(attached),
      "data-orientation": orientation,
      children: cloneChildren,
      role: "group",
      ...rest,
    }
  },
)
