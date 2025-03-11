import type { HTMLProps, ThemeProps } from "../../core"
import type { IconButtonProps } from "../icon-button"
import type { CloseButtonStyle } from "./close-button.style"
import { createComponent } from "../../core"
import { XIcon } from "../icon"
import { IconButton } from "../icon-button"
import { closeButtonStyle } from "./close-button.style"

export interface CloseButtonProps
  extends Omit<IconButtonProps, "aria-label">,
    Pick<HTMLProps<"button">, "aria-label">,
    ThemeProps<CloseButtonStyle> {}

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
 * @see Docs https://yamada-ui.com/components/close-button
 */
export const CloseButton = withContext(IconButton)(
  undefined,
  ({ children, icon, ...rest }) => ({
    "aria-label": "Close",
    children: children || icon || <XIcon />,
    ...rest,
  }),
)
