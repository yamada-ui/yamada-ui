import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { PropsWithChildren, ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-context"

interface AccordionLabelOptions {
  /**
   * The accordion icon to use.
   */
  icon?:
    | ((props: { isDisabled: boolean; isExpanded: boolean }) => ReactNode)
    | ReactNode
  /**
   * Props the container element.
   */
  containerProps?: HTMLUIProps
}

export interface AccordionLabelProps
  extends HTMLUIProps<"button">,
    AccordionLabelOptions {}

export const AccordionLabel = forwardRef<AccordionLabelProps, "button">(
  ({ className, children, icon: customIcon, containerProps, ...rest }, ref) => {
    const {
      icon: supplementIcon,
      isDisabled = false,
      isOpen,
      getLabelProps,
    } = useAccordionItemContext()
    const { icon: generalIcon, iconHidden, styles } = useAccordionContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
      outline: 0,
      width: "100%",
      ...styles.button,
    }

    const cloneCustomIcon =
      typeof customIcon === "function"
        ? customIcon({
            isDisabled,
            isExpanded: isOpen,
          })
        : customIcon

    const cloneSupplementIcon =
      typeof supplementIcon === "function"
        ? supplementIcon({
            isDisabled,
            isExpanded: isOpen,
          })
        : supplementIcon

    const cloneGeneralIcon =
      typeof generalIcon === "function"
        ? generalIcon({
            isDisabled,
            isExpanded: isOpen,
          })
        : generalIcon

    return (
      <ui.div aria-level={3} role="heading" {...containerProps}>
        <ui.button
          {...getLabelProps(rest, ref)}
          className={cx("ui-accordion__label", className)}
          __css={css}
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
  },
)

AccordionLabel.displayName = "AccordionLabel"
AccordionLabel.__ui__ = "AccordionLabel"

const AccordionIcon: FC<PropsWithChildren<IconProps>> = ({
  className,
  children,
  ...rest
}) => {
  const { isDisabled, isOpen } = useAccordionItemContext()
  const { styles } = useAccordionContext()

  const css: CSSUIObject = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : undefined,
    transformOrigin: "center",
    transition: "transform 0.2s",
    ...styles.icon,
  }

  if (children)
    return (
      <ui.span
        className={cx("ui-accordion__icon", className)}
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
      __css={css}
      {...rest}
    />
  )
}

AccordionIcon.displayName = "AccordionIcon"
AccordionIcon.__ui__ = "AccordionIcon"
