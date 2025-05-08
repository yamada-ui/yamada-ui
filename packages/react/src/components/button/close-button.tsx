import type { HTMLProps, ThemeProps } from "../../core"
import type { CloseButtonStyle } from "./close-button.style"
import type { IconButtonProps } from "./icon-button"
import { createComponent } from "../../core"
import { useI18n } from "../../providers/i18n-provider"
import { XIcon } from "../icon"
import { closeButtonStyle } from "./close-button.style"
import { IconButton } from "./icon-button"

export interface CloseButtonProps
  extends Omit<
      IconButtonProps,
      "aria-label" | keyof ThemeProps<CloseButtonStyle>
    >,
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
 * @see https://yamada-ui.com/components/close-button
 */
export const CloseButton = withContext(IconButton)(
  undefined,
  ({ children, icon, ...rest }) => {
    const { t } = useI18n("closeButton")

    return {
      "aria-label": t("Close"),
      children: children || icon || <XIcon />,
      ...rest,
    }
  },
)
