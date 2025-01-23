import type { IconButtonProps } from "../button"
import { createComponent } from "../../core"
import { IconButton } from "../button"
import { XIcon } from "../icon"

export const {
  PropsContext: IconButtonPropsContext,
  usePropsContext: useIconButtonPropsContext,
  withContext,
} = createComponent<IconButtonProps>("close-button")

/**
 * `CloseButton` is a component used primarily to trigger the close functionality of a component.
 *
 * @see Docs https://yamada-ui.com/components/other/close-button
 */

export const CloseButton = withContext(IconButton)(
  undefined,
  ({ children, icon, ...rest }) => ({
    colorScheme: "gray",
    variant: "ghost",
    children: children || icon || <XIcon />,
    ...rest,
  }),
)
