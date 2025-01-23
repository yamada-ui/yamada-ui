import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useCheckboxCardContext } from "./checkbox-context"

export interface CheckboxCardDescriptionProps extends HTMLUIProps {}

export const CheckboxCardDescription = forwardRef<
  CheckboxCardDescriptionProps,
  "div"
>(({ className, ...rest }, ref) => {
  const { styles } = useCheckboxCardContext()

  const css: CSSUIObject = { ...styles.description }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-checkbox-card__description", className)}
      __css={css}
      {...rest}
    />
  )
})

CheckboxCardDescription.displayName = "CheckboxCardDescription"
CheckboxCardDescription.__ui__ = "CheckboxCardDescription"
