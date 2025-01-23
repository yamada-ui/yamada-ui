import { createComponent } from "../../core"
import { XIcon } from "../icon"
import { IconButton, type IconButtonProps } from "../button"

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
    children: children || icon || <XIcon />,
    variant: "ghost",
    colorScheme: "gray",
    ...rest,
  }),
)
