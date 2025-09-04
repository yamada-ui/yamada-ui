"use client"

import type { HTMLProps, ThemeProps, WithoutThemeProps } from "../../core"
import type { IconButtonProps } from "../button"
import type { CloseButtonStyle } from "./close-button.style"
import { createComponent } from "../../core"
import { useI18n } from "../../providers/i18n-provider"
import { IconButton } from "../button"
import { XIcon } from "../icon"
import { closeButtonStyle } from "./close-button.style"

export interface CloseButtonProps
  extends Omit<
      WithoutThemeProps<IconButtonProps, CloseButtonStyle>,
      "aria-label"
    >,
    Pick<HTMLProps<"button">, "aria-label">,
    ThemeProps<CloseButtonStyle> {}

const {
  PropsContext: CloseButtonPropsContext,
  usePropsContext: useCloseButtonPropsContext,
  withContext,
} = createComponent<CloseButtonProps, CloseButtonStyle>(
  "close-button",
  closeButtonStyle,
)

export { CloseButtonPropsContext, useCloseButtonPropsContext }

/**
 * `CloseButton` is a component used primarily to trigger the close functionality of a component.
 *
 * @see https://yamada-ui.com/docs/components/close-button
 */
export const CloseButton = withContext<"button", CloseButtonProps>(IconButton)(
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
