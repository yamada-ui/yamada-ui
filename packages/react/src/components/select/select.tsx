"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type {
  ComboboxItem,
  UseComboboxGroupProps,
} from "../../hooks/use-combobox"
import type { UseInputBorderProps } from "../input"
import type { SelectStyle } from "./select.style"
import type {
  UseSelectOptionProps,
  UseSelectProps,
  UseSelectReturn,
} from "./use-select"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  ComboboxContext,
  ComboboxDescendantsContext,
  ComboboxGroupContext,
  createComboboxChildren,
  createComboboxItem,
  useComboboxGroup,
  useComboboxGroupContext,
} from "../../hooks/use-combobox"
import { cast, isArray } from "../../utils"
import { useGroupItemProps } from "../group"
import { CheckIcon, ChevronDownIcon, XIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { Popover, usePopoverProps } from "../popover"
import { selectStyle } from "./select.style"
import { SelectContext, useSelect, useSelectOption } from "./use-select"

interface ComponentContext
  extends Pick<UseSelectReturn, "getSeparatorProps">,
    Pick<SelectRootProps, "groupProps" | "optionProps"> {}

export interface SelectRootProps<Y extends string | string[] = string>
  extends Omit<
      HTMLStyledProps,
      "defaultValue" | "offset" | "onChange" | "value"
    >,
    UseSelectProps<Y>,
    Omit<
      WithoutThemeProps<Popover.RootProps, SelectStyle>,
      | "autoFocus"
      | "children"
      | "initialFocusRef"
      | "modal"
      | "transform"
      | "updateRef"
      | "withCloseButton"
    >,
    ThemeProps<SelectStyle>,
    UseInputBorderProps {
  /**
   * If `true`, display the clear icon.
   *
   * @default false
   */
  clearable?: boolean
  /**
   * The icon to be used in the clear button.
   */
  clearIcon?: ReactNode
  /**
   * The icon to be used in the select.
   */
  icon?: ReactNode
  /**
   * Props for content element.
   */
  contentProps?: SelectContentProps
  /**
   * The props for the end element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * Props for group element.
   */
  groupProps?: Omit<SelectGroupProps, "children" | "label">
  /**
   * Props for icon element.
   */
  iconProps?: SelectIconProps
  /**
   * Props for option element.
   */
  optionProps?: Omit<SelectOptionProps, "children" | "value">
  /**
   * Props for placeholder element.
   */
  placeholderProps?: Omit<SelectOptionProps, "children" | "value">
  /**
   * Props for root element.
   */
  rootProps?: InputGroup.RootProps
}

const {
  ComponentContext,
  PropsContext: SelectPropsContext,
  useComponentContext,
  usePropsContext: useSelectPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SelectRootProps, SelectStyle, ComponentContext>(
  "select",
  selectStyle,
)

export { SelectPropsContext, useSelectPropsContext }

/**
 * `Select` is a component used for allowing a user to choose one option from a list.
 *
 * @see https://yamada-ui.com/docs/components/select
 */
export const SelectRoot = withProvider<"div", SelectRootProps>(
  <Y extends string | string[] = string>(props: SelectRootProps<Y>) => {
    const [groupItemProps, mergedProps] = useGroupItemProps(props)
    const [
      popoverProps,
      {
        className,
        css,
        colorScheme,
        children,
        clearable,
        clearIcon = <XIcon />,
        errorBorderColor,
        focusBorderColor,
        icon,
        items: itemsProp,
        contentProps,
        elementProps,
        groupProps,
        iconProps,
        optionProps,
        placeholderProps,
        rootProps,
        ...rest
      },
    ] = usePopoverProps(mergedProps, [
      "disabled",
      "open",
      "defaultOpen",
      "onOpen",
      "onClose",
      "openOnClick",
    ])
    const items = useMemo<ComboboxItem[]>(() => {
      if (itemsProp) return itemsProp

      return createComboboxItem(children, {
        Group: SelectGroup,
        Label: SelectLabel,
        Option: SelectOption,
      })
    }, [itemsProp, children])
    const {
      descendants,
      includePlaceholder,
      interactive,
      items: computedItems,
      max,
      open,
      placeholder,
      value,
      getClearIconProps,
      getContentProps,
      getFieldProps,
      getIconProps,
      getRootProps,
      getSeparatorProps,
      onActiveDescendant,
      onChange,
      onClose,
      onOpen,
      onSelect,
    } = useSelect({ items, ...rest })
    const mergedPopoverProps = useMemo<Popover.RootProps>(
      () => ({
        animationScheme: "block-start",
        autoFocus: false,
        matchWidth: true,
        openOnClick: false,
        ...popoverProps,
        disabled: !interactive,
        open,
        onClose,
        onOpen,
      }),
      [interactive, onClose, onOpen, open, popoverProps],
    )
    const computedChildren = useMemo(() => {
      if (children)
        return (
          <>
            {placeholder ? (
              <SelectOption
                {...placeholderProps}
                hidden={!includePlaceholder}
                value=""
              >
                {placeholder}
              </SelectOption>
            ) : null}

            {children}
          </>
        )

      return createComboboxChildren(computedItems, {
        Group: SelectGroup,
        Option: SelectOption,
      })
    }, [
      children,
      computedItems,
      placeholder,
      includePlaceholder,
      placeholderProps,
    ])
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const comboboxContext = useMemo(
      () => ({ max, value, onActiveDescendant, onChange, onClose, onSelect }),
      [max, onActiveDescendant, onChange, onClose, onSelect, value],
    )
    const selectContext = useMemo(() => ({ max, value }), [max, value])
    const componentContext = useMemo(
      () => ({ getSeparatorProps, groupProps, optionProps }),
      [getSeparatorProps, groupProps, optionProps],
    )
    const hasValue = isArray(value) ? !!value.length : !!value

    return (
      <ComboboxDescendantsContext value={descendants}>
        <ComboboxContext value={comboboxContext}>
          <SelectContext value={selectContext}>
            <ComponentContext value={componentContext}>
              <Popover.Root {...mergedPopoverProps}>
                <InputGroup.Root
                  className={className}
                  css={css}
                  colorScheme={colorScheme}
                  {...getRootProps({ ...groupItemProps, ...rootProps })}
                >
                  <Popover.Trigger>
                    <SelectField {...getFieldProps(varProps)} />
                  </Popover.Trigger>

                  <InputGroup.Element
                    {...{ clickable: clearable && hasValue, ...elementProps }}
                  >
                    {clearable && hasValue ? (
                      <SelectIcon
                        icon={clearIcon}
                        {...getClearIconProps(iconProps)}
                      />
                    ) : (
                      <SelectIcon icon={icon} {...getIconProps(iconProps)} />
                    )}
                  </InputGroup.Element>
                </InputGroup.Root>

                <SelectContent
                  {...cast<SelectContentProps>(
                    getContentProps(cast<HTMLProps>(contentProps)),
                  )}
                >
                  {computedChildren}
                </SelectContent>
              </Popover.Root>
            </ComponentContext>
          </SelectContext>
        </ComboboxContext>
      </ComboboxDescendantsContext>
    )
  },
  "root",
)((props) => {
  const context = useInputPropsContext()

  return { ...context, ...props }
}) as GenericsComponent<{
  <Y extends string | string[] = string>(
    props: SelectRootProps<Y>,
  ): ReactElement
}>

interface SelectFieldProps extends HTMLStyledProps {}

const SelectField = withContext<"div", SelectFieldProps>("div", "field")(
  { "data-group-propagate": "" },
  ({ children, ...rest }) => ({
    ...rest,
    children: <SelectValueText>{children}</SelectValueText>,
  }),
)

interface SelectIconProps extends HTMLStyledProps {
  icon?: ReactNode
}

const SelectIcon = withContext<"div", SelectIconProps>("div", "icon")(
  undefined,
  ({ children, icon, ...rest }) => ({
    children: icon || children || <ChevronDownIcon />,
    ...rest,
  }),
)

interface SelectValueTextProps extends HTMLProps<"span"> {}

const SelectValueText = withContext<"span", SelectValueTextProps>(
  "span",
  "valueText",
)()

interface SelectContentProps extends Popover.ContentProps {}

const SelectContent = withContext<"div", SelectContentProps>(
  Popover.Content,
  "content",
)()

export interface SelectLabelProps extends HTMLStyledProps<"span"> {}

export const SelectLabel = withContext<"span", SelectLabelProps>(
  "span",
  "label",
)(undefined, (props) => {
  const { getLabelProps } = useComboboxGroupContext()

  return getLabelProps(props)
})

export interface SelectGroupProps
  extends UseComboboxGroupProps,
    HTMLStyledProps {
  /**
   * The label of the group.
   */
  label?: ReactNode
  /**
   * Props for the label component.
   */
  labelProps?: SelectLabelProps
}

export const SelectGroup = withContext<"div", SelectGroupProps>(
  ({ children, label, labelProps, ...rest }) => {
    const { groupProps } = useComponentContext()
    const { getGroupProps, getLabelProps } = useComboboxGroup({
      ...groupProps,
      ...rest,
    })
    const context = useMemo(() => ({ getLabelProps }), [getLabelProps])

    return (
      <ComboboxGroupContext value={context}>
        <styled.div {...getGroupProps()}>
          {label ? <SelectLabel {...labelProps}>{label}</SelectLabel> : null}
          {children}
        </styled.div>
      </ComboboxGroupContext>
    )
  },
  "group",
)()

export interface SelectOptionProps
  extends UseSelectOptionProps,
    HTMLStyledProps {
  /**
   * The icon to be used in the select option.
   */
  icon?: ReactNode
}

export const SelectOption = withContext<"div", SelectOptionProps>(
  ({ children, icon: iconProp, ...rest }) => {
    const { optionProps: { icon, ...optionProps } = {} } = useComponentContext()
    const { getIndicatorProps, getOptionProps } = useSelectOption({
      ...optionProps,
      ...rest,
    })

    return (
      <styled.div {...getOptionProps()}>
        <SelectIndicator {...getIndicatorProps()}>
          {iconProp ?? icon ?? <CheckIcon />}
        </SelectIndicator>
        {children}
      </styled.div>
    )
  },
  "option",
)()

interface SelectIndicatorProps extends HTMLStyledProps {}

const SelectIndicator = withContext<"div", SelectIndicatorProps>(
  "div",
  "indicator",
)()

export interface SelectSeparatorProps extends HTMLStyledProps<"hr"> {}

export const SelectSeparator = withContext<"hr", SelectSeparatorProps>(
  "hr",
  "separator",
)(undefined, (props) => {
  const { getSeparatorProps } = useComponentContext()

  return getSeparatorProps(props)
})
