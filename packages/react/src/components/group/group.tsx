import type { ThemeProps } from "../../core"
import type { FlexProps } from "../flex"
import type { GroupStyle } from "./group.style"
import { cloneElement, useMemo } from "react"
import { createComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { dataAttr, isNull, isUndefined } from "../../utils"
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
    const omittedChildren = validChildren.filter((child) => {
      const ungrouped = child.props["data-ungrouped"]

      return isUndefined(ungrouped) || isNull(ungrouped)
    })
    const count = omittedChildren.length
    const cloneChildren = useMemo(
      () =>
        validChildren.map((child) => {
          const index = omittedChildren.indexOf(child)
          const ungrouped = index === -1

          if (ungrouped) return child

          return cloneElement(child, {
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
          })
        }),
      [validChildren, omittedChildren, count],
    )

    return (
      <Flex
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
