import type { ThemeProps } from "../../core"
import type { FlexProps } from "../flex"
import type { GroupStyle } from "./group.style"
import { dataAttr } from "@yamada-ui/utils"
import { cloneElement, useMemo } from "react"
import { createComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { getValidChildren } from "../../utils"
import { Flex } from "../flex"
import { groupStyle } from "./group.style"

export interface GroupProps
  extends Omit<FlexProps, "grow">,
    ThemeProps<GroupStyle> {}

export const {
  PropsContext: GroupPropsContext,
  usePropsContext: useGroupPropsContext,
  withContext,
} = createComponent<GroupProps, GroupStyle>("group", groupStyle)

/**
 * `Group` is a component that groups and attaches multiple elements together.
 *
 * @see Docs https://yamada-ui.com/components/group
 */
export const Group = withContext(
  ({
    attached: attachedProp,
    children,
    orientation: orientationProp,
    ...rest
  }) => {
    const orientation = useValue(orientationProp)
    const attached = useValue(attachedProp)
    const validChildren = getValidChildren(children)
    const count = validChildren.length
    const cloneChildren = useMemo(
      () =>
        validChildren.map((child, index) =>
          cloneElement(child, {
            ...child.props,
            style: {
              "--group-count": count,
              "--group-index": index,
              ...(child.props?.style ?? {}),
            },
            "data-between": dataAttr(index > 0 && index < count - 1),
            "data-first": dataAttr(index === 0),
            "data-last": dataAttr(index === count - 1),
            "data-peer": "",
          }),
        ),
      [validChildren, count],
    )

    return (
      <Flex
        aria-orientation={orientation}
        data-attached={dataAttr(attached)}
        data-orientation={orientation}
        role="group"
        {...rest}
      >
        {cloneChildren}
      </Flex>
    )
  },
  { transferProps: ["attached", "orientation"] },
)()
