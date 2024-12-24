import type { ReactNode } from "react"
import type { FC, HTMLUIProps } from "../../core"
import type { IconProps } from "../icon"
import { ui } from "../../core"
import { cx } from "../../utils"
import { ChevronIcon } from "../icon"
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-context"

interface AccordionLabelOptions {
  /**
   * The accordion icon to use.
   */
  icon?:
    | ((props: {
        /**
         * @deprecated Use `disabled` instead.
         */
        isDisabled: boolean
        /**
         * @deprecated Use `expanded` instead.
         */
        isExpanded: boolean
        disabled?: boolean
        expanded?: boolean
      }) => ReactNode)
    | ReactNode
  /**
   * Props the container element.
   */
  containerProps?: HTMLUIProps
}

export interface AccordionLabelProps
  extends HTMLUIProps<"button">,
    AccordionLabelOptions {}

export const AccordionLabel: FC<AccordionLabelProps> = ({
  ref,
  className,
  children,
  icon: customIcon,
  containerProps,
  ...rest
}) => {
  const {
    isDisabled = false,
    disabled = isDisabled,
    icon: supplementIcon,
    open,
    getLabelProps,
  } = useAccordionItemContext()
  const { icon: generalIcon, iconHidden, styles } = useAccordionContext()

  const cloneCustomIcon =
    typeof customIcon === "function"
      ? customIcon({
          disabled,
          expanded: open,
          isDisabled: disabled,
          isExpanded: open,
        })
      : customIcon

  const cloneSupplementIcon =
    typeof supplementIcon === "function"
      ? supplementIcon({
          disabled,
          expanded: open,
          isDisabled: disabled,
          isExpanded: open,
        })
      : supplementIcon

  const cloneGeneralIcon =
    typeof generalIcon === "function"
      ? generalIcon({
          disabled,
          expanded: open,
          isDisabled: disabled,
          isExpanded: open,
        })
      : generalIcon

  return (
    <ui.div aria-level={3} role="heading" {...containerProps}>
      <ui.button
        {...getLabelProps(rest, ref)}
        className={cx("ui-accordion__label", className)}
        __css={styles.button}
      >
        {children}

        {!iconHidden ? (
          <AccordionIcon>
            {cloneCustomIcon ?? cloneSupplementIcon ?? cloneGeneralIcon}
          </AccordionIcon>
        ) : null}
      </ui.button>
    </ui.div>
  )
}

AccordionLabel.__ui__ = "AccordionLabel"

interface AccordionIconProps extends IconProps {}

const AccordionIcon: FC<AccordionIconProps> = ({
  className,
  children,
  ...rest
}) => {
  const { disabled, open } = useAccordionItemContext()
  const { styles } = useAccordionContext()

  if (children)
    return (
      <ui.span
        className={cx("ui-accordion__icon", className)}
        aria-hidden
        __css={{
          alignItems: "center",
          display: "inline-flex",
          justifyContent: "center",
          ml: "auto",
        }}
      >
        {children}
      </ui.span>
    )

  return (
    <ChevronIcon
      className={cx("ui-accordion__icon", className)}
      aria-hidden
      __css={{
        opacity: disabled ? 0.4 : 1,
        transform: open ? "rotate(-180deg)" : undefined,
        ...styles.icon,
      }}
      {...rest}
    />
  )
}

AccordionIcon.__ui__ = "AccordionIcon"
