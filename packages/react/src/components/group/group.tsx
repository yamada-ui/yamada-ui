import type { ThemeProps } from "../../core"
import type { FlexProps } from "../flex"
import type { GroupStyle } from "./group.style"
import { dataAttr } from "@yamada-ui/utils"
import { createComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
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

    return (
      <Flex
        aria-orientation={orientation}
        data-attached={dataAttr(attached)}
        data-orientation={orientation}
        role="group"
        {...rest}
      >
        {children}
      </Flex>
    )
  },
  { transferProps: ["attached", "orientation"] },
)()
