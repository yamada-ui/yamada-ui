import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import type { FC, PropsWithChildren, ReactNode } from "react"
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-context"

interface AccordionLabelOptions {
  /**
   * Props the container element.
   */
  containerProps?: HTMLUIProps
  /**
   * The accordion icon to use.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
}

export interface AccordionLabelProps
  extends HTMLUIProps<"button">,
    AccordionLabelOptions {}

export const AccordionLabel = forwardRef<AccordionLabelProps, "button">(
  ({ className, icon: customIcon, containerProps, children, ...rest }, ref) => {
    const {
      isOpen,
      isDisabled = false,
      icon: supplementIcon,
      getLabelProps,
    } = useAccordionItemContext()
    const { icon: generalIcon, iconHidden, styles } = useAccordionContext()

    const css: CSSUIObject = {
      display: "inline-flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles.button,
    }

    const cloneCustomIcon =
      typeof customIcon === "function"
        ? customIcon({
            isExpanded: isOpen,
            isDisabled,
          })
        : customIcon

    const cloneSupplementIcon =
      typeof supplementIcon === "function"
        ? supplementIcon({
            isExpanded: isOpen,
            isDisabled,
          })
        : supplementIcon

    const cloneGeneralIcon =
      typeof generalIcon === "function"
        ? generalIcon({
            isExpanded: isOpen,
            isDisabled,
          })
        : generalIcon

    return (
      <ui.div role="heading" aria-level={3} {...containerProps}>
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

const AccordionIcon: FC<PropsWithChildren<IconProps>> = ({
  className,
  children,
  ...rest
}) => {
  const { isOpen, isDisabled } = useAccordionItemContext()
  const { styles } = useAccordionContext()

  const css: CSSUIObject = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
    ...styles.icon,
  }

  if (children)
    return (
      <ui.span
        className={cx("ui-accordion__icon", className)}
        __css={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
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
