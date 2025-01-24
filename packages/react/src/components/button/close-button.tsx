import type { IconButtonProps } from "./icon-button"
import { createComponent } from "../../core"
import { IconButton } from "./icon-button"
import { XIcon } from "../icon"
import type { CloseButtonStyle } from "./close-button.style"
import { closeButtonStyle } from "./close-button.style"

export interface CloseButtonProps extends IconButtonProps {}

export const {
  PropsContext: CloseButtonPropsContext,
  usePropsContext: useCloseButtonPropsContext,
  withContext,
} = createComponent<CloseButtonProps, CloseButtonStyle>(
  "close-button",
  closeButtonStyle,
)

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
    "aria-label": "Close",
    children: children || icon || <XIcon />,
    ...rest,
  }),
)
