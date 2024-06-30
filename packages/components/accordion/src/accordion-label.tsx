import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import type { FC, PropsWithChildren, ReactNode } from "react"
import { useAccordionContext } from "./accordion"
import { useAccordionItemContext } from "./accordion-item"

type AccordionLabelOptions = {
  /**
   * Props the container element.
   */
  containerProps?: HTMLUIProps<"div">
  /**
   * The accordion icon to use.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
}

export type AccordionLabelProps = HTMLUIProps<"button"> & AccordionLabelOptions

export const AccordionLabel = forwardRef<AccordionLabelProps, "button">(
  ({ className, icon: customIcon, containerProps, children, ...rest }, ref) => {
    const {
      isOpen,
      isDisabled = false,
      icon: supplementIcon,
      getLabelProps,
    } = useAccordionItemContext()
    const { icon: generalIcon, iconHidden, styles } = useAccordionContext()

    const css: CSSUIObject = { ...styles.button }

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
      <ui.div role="heading" aria-level="3" {...containerProps}>
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
