"use client"

import type { HTMLProps, ThemeProps, WithoutThemeProps } from "../../core"
import type { IconButtonProps } from "../icon-button"
import type { CloseButtonStyle } from "./close-button.style"
import { createComponent } from "../../core"
import { useI18n } from "../../providers/i18n-provider"
import { XIcon } from "../icon"
import { IconButton } from "../icon-button"
import { closeButtonStyle } from "./close-button.style"

export interface CloseButtonProps
  extends Omit<
      WithoutThemeProps<IconButtonProps, CloseButtonStyle>,
      "aria-label"
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
