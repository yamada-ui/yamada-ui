"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { UseComboboxGroupProps } from "../../hooks/use-combobox"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { SelectStyle } from "./select.style"
import type {
  SelectItem,
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
  useComboboxGroup,
  useComboboxGroupContext,
} from "../../hooks/use-combobox"
import {
  cast,
  findChild,
  getValidChildren,
  isArray,
  isSomeElement,
} from "../../utils"
import { useGroupItemProps } from "../group"
import { CheckIcon, ChevronDownIcon, XIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { Popover, usePopoverProps } from "../popover"
import { selectStyle } from "./select.style"
import { SelectContext, useSelect, useSelectOption } from "./use-select"

interface ComponentContext extends Pick<UseSelectReturn, "getSeparatorProps"> {}

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
    FieldProps,
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
   * Props for icon element.
   */
  iconProps?: SelectIconProps
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
 * @see https://yamada-ui.com/components/select
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
        iconProps,
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
    ])
    const items = useMemo<SelectItem[]>(() => {
      if (itemsProp) return itemsProp

      const validChildren = getValidChildren(children)

      return validChildren
        .filter(
          ({ type }) =>
            isSomeElement(type, SelectOption) ||
            isSomeElement(type, SelectGroup),
        )
        .map(({ type, props }) => {
          if (isSomeElement(type, SelectOption)) {
            return { label: props.children, value: props.value }
          } else {
            const validChildren = getValidChildren(props.children)
            const label = findChild(validChildren, SelectLabel)

            return {
              items: validChildren
                .filter(({ type }) => isSomeElement(type, SelectOption))
                .map(({ props }) => ({
                  label: props.children,
                  value: props.value,
                })),
              label: label?.props.children ?? props.label,
            }
          }
        })
    }, [itemsProp, children])
    const {
      descendants,
      interactive,
      items: computedItems,
      max,
      open,
      placeholder,
      placeholderInOptions,
      value,
      getClearIconProps,
      getContentProps,
      getFieldProps,
      getIconProps,
      getRootProps,
      getSeparatorProps,
      onActiveDescendant,
      onClose,
      onOpen,
      onSelect,
    } = useSelect({ items, ...rest })
    const mergedPopoverProps = useMemo<Popover.RootProps>(
      () => ({
        animationScheme: "block-start",
        autoFocus: false,
        matchWidth: true,
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
                hidden={!placeholderInOptions}
                value=""
              >
                {placeholder}
              </SelectOption>
            ) : null}

            {children}
          </>
        )

      return computedItems.map((item, index) => {
        if ("items" in item) {
          const { items = [], label, ...rest } = item

          return (
            <SelectGroup key={index} label={label} {...rest}>
              {items.map(({ label, ...rest }, index) => (
                <SelectOption key={index} {...rest}>
                  {label}
                </SelectOption>
              ))}
            </SelectGroup>
          )
        } else {
          const { label, ...rest } = item

          return (
            <SelectOption key={index} {...rest}>
              {label}
            </SelectOption>
          )
        }
      })
    }, [
      children,
      computedItems,
      placeholder,
      placeholderInOptions,
      placeholderProps,
    ])
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const comboboxContext = useMemo(
      () => ({ onActiveDescendant, onClose, onSelect }),
      [onActiveDescendant, onClose, onSelect],
    )
    const selectContext = useMemo(() => ({ max, value }), [max, value])
    const componentContext = useMemo(
      () => ({ getSeparatorProps }),
      [getSeparatorProps],
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
    const { getGroupProps, getLabelProps } = useComboboxGroup(rest)
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
  ({ children, icon = <CheckIcon />, ...rest }) => {
    const { getIndicatorProps, getOptionProps } = useSelectOption(rest)

    return (
      <styled.div {...getOptionProps()}>
        <SelectIndicator {...getIndicatorProps()}>{icon}</SelectIndicator>
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
