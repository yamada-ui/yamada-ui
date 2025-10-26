"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type {
  ComboboxItem,
  UseComboboxGroupProps,
} from "../../hooks/use-combobox"
import type { UseInputBorderProps } from "../input"
import type { PopupAnimationProps } from "../popover"
import type { AutocompleteStyle } from "./autocomplete.style"
import type {
  UseAutocompleteOptionProps,
  UseAutocompleteProps,
  UseAutocompleteReturn,
} from "./use-autocomplete"
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
import { CheckIcon, ChevronDownIcon, MinusIcon, XIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { Popover } from "../popover"
import { autocompleteStyle } from "./autocomplete.style"
import {
  AutocompleteContext,
  useAutocomplete,
  useAutocompleteOption,
} from "./use-autocomplete"

interface ComponentContext
  extends Pick<UseAutocompleteReturn, "getInputProps" | "getSeparatorProps">,
    Pick<
      AutocompleteRootProps,
      "emptyIcon" | "emptyProps" | "groupProps" | "inputProps" | "optionProps"
    > {}

export interface AutocompleteRootProps<Multiple extends boolean = false>
  extends Omit<
      HTMLStyledProps,
      "defaultValue" | "filter" | "offset" | "onChange" | "ref" | "value"
    >,
    UseAutocompleteProps<Multiple>,
    PopupAnimationProps,
    ThemeProps<AutocompleteStyle>,
    UseInputBorderProps {
  /**
   * If `true`, display the clear icon.
   *
   * @default true
   */
  clearable?: boolean
  /**
   * The icon to be used in the clear button.
   */
  clearIcon?: ReactNode
  /**
   * The icon to be used in the empty element.
   */
  emptyIcon?: ReactNode
  /**
   * The icon to be used in the autocomplete.
   */
  icon?: ReactNode
  /**
   * Props for content element.
   */
  contentProps?: AutocompleteContentProps
  /**
   * The props for the end element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * Props for empty element.
   */
  emptyProps?: AutocompleteEmptyProps
  /**
   * Props for group element.
   */
  groupProps?: Omit<AutocompleteGroupProps, "children" | "label">
  /**
   * Props for icon element.
   */
  iconProps?: AutocompleteIconProps
  /**
   * The props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for option element.
   */
  optionProps?: Omit<AutocompleteOptionProps, "children" | "value">
  /**
   * Props for root element.
   */
  rootProps?: InputGroup.RootProps
}

const {
  ComponentContext,
  PropsContext: AutocompletePropsContext,
  useComponentContext,
  usePropsContext: useAutocompletePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  AutocompleteRootProps,
  AutocompleteStyle,
  ComponentContext
>("autocomplete", autocompleteStyle)

export { AutocompletePropsContext, useAutocompletePropsContext }

/**
 * `Autocomplete` is a component used to display suggestions in response to user text input.
 *
 * @see https://yamada-ui.com/docs/components/autocomplete
 */
export const AutocompleteRoot = withProvider(
  <Multiple extends boolean = false>(
    props: AutocompleteRootProps<Multiple>,
  ) => {
    const [
      groupItemProps,
      {
        className,
        css,
        colorScheme,
        animationScheme = "block-start",
        children,
        clearable = true,
        clearIcon = <XIcon />,
        duration,
        emptyIcon,
        errorBorderColor,
        focusBorderColor,
        icon,
        items: itemsProp,
        contentProps,
        elementProps,
        emptyProps,
        groupProps,
        iconProps,
        inputProps,
        optionProps,
        rootProps,
        ...rest
      },
    ] = useGroupItemProps(props)
    const items = useMemo<ComboboxItem[]>(() => {
      if (itemsProp) return itemsProp

      return createComboboxItem(children, {
        Group: AutocompleteGroup,
        Label: AutocompleteLabel,
        Option: AutocompleteOption,
      })
    }, [itemsProp, children])
    const {
      children: fieldChildren,
      descendants,
      items: computedItems,
      max,
      value,
      getClearIconProps,
      getContentProps,
      getFieldProps,
      getIconProps,
      getInputProps,
      getRootProps,
      getSeparatorProps,
      popoverProps,
      onActiveDescendant,
      onClose,
      onSelect,
    } = useAutocomplete({ items, ...rest })
    const mergedPopoverProps = useMemo<Popover.RootProps>(
      () => ({
        animationScheme,
        duration,
        ...popoverProps,
      }),
      [animationScheme, duration, popoverProps],
    )
    const computedChildren = useMemo(
      () =>
        createComboboxChildren(computedItems, {
          Empty: AutocompleteEmpty,
          Group: AutocompleteGroup,
          Option: AutocompleteOption,
        }),
      [computedItems],
    )
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const comboboxContext = useMemo(
      () => ({ onActiveDescendant, onClose, onSelect }),
      [onActiveDescendant, onClose, onSelect],
    )
    const autocompleteContext = useMemo(() => ({ max, value }), [value, max])
    const componentContext = useMemo(
      () => ({
        emptyIcon,
        emptyProps,
        getInputProps,
        getSeparatorProps,
        groupProps,
        inputProps,
        optionProps,
      }),
      [
        emptyIcon,
        emptyProps,
        getInputProps,
        getSeparatorProps,
        groupProps,
        inputProps,
        optionProps,
      ],
    )
    const hasValue = isArray(value) ? !!value.length : !!value

    return (
      <ComboboxDescendantsContext value={descendants}>
        <ComboboxContext value={comboboxContext}>
          <AutocompleteContext value={autocompleteContext}>
            <ComponentContext value={componentContext}>
              <Popover.Root {...mergedPopoverProps}>
                <InputGroup.Root
                  className={className}
                  css={css}
                  colorScheme={colorScheme}
                  {...getRootProps({ ...groupItemProps, ...rootProps })}
                >
                  <Popover.Trigger>
                    <AutocompleteField {...getFieldProps(varProps)}>
                      {fieldChildren}
                    </AutocompleteField>
                  </Popover.Trigger>

                  <InputGroup.Element
                    {...{ clickable: clearable && hasValue, ...elementProps }}
                  >
                    {clearable && hasValue ? (
                      <AutocompleteIcon
                        icon={clearIcon}
                        {...getClearIconProps(iconProps)}
                      />
                    ) : (
                      <AutocompleteIcon
                        icon={icon}
                        {...getIconProps(iconProps)}
                      />
                    )}
                  </InputGroup.Element>
                </InputGroup.Root>

                <AutocompleteContent
                  {...cast<AutocompleteContentProps>(
                    getContentProps(cast<HTMLProps>(contentProps)),
                  )}
                >
                  {computedChildren}
                </AutocompleteContent>
              </Popover.Root>
            </ComponentContext>
          </AutocompleteContext>
        </ComboboxContext>
      </ComboboxDescendantsContext>
    )
  },
  "root",
)((props) => {
  const context = useInputPropsContext()

  return { ...context, ...props }
}) as GenericsComponent<{
  <Multiple extends boolean = false>(
    props: AutocompleteRootProps<Multiple>,
  ): ReactElement
}>

interface AutocompleteFieldProps extends HTMLStyledProps {}

const AutocompleteField = withContext<"div", AutocompleteFieldProps>(
  "div",
  "field",
)({ "data-group-propagate": "" }, ({ children, ...rest }) => {
  const { getInputProps, inputProps } = useComponentContext()

  return {
    ...rest,
    children: (
      <>
        {children}
        <AutocompleteInput {...getInputProps(inputProps)} />
      </>
    ),
  }
})

interface AutocompleteInputProps extends HTMLStyledProps<"input"> {}

const AutocompleteInput = withContext<"input", AutocompleteInputProps>(
  "input",
  "input",
)()

interface AutocompleteIconProps extends HTMLStyledProps {
  icon?: ReactNode
}

const AutocompleteIcon = withContext<"div", AutocompleteIconProps>(
  "div",
  "icon",
)(undefined, ({ children, icon, ...rest }) => ({
  children: icon || children || <ChevronDownIcon />,
  ...rest,
}))

interface AutocompleteContentProps extends Popover.ContentProps {}

const AutocompleteContent = withContext<"div", AutocompleteContentProps>(
  Popover.Content,
  "content",
)()

export interface AutocompleteLabelProps extends HTMLStyledProps<"span"> {}

export const AutocompleteLabel = withContext<"span", AutocompleteLabelProps>(
  "span",
  "label",
)(undefined, (props) => {
  const { getLabelProps } = useComboboxGroupContext()

  return getLabelProps(props)
})

export interface AutocompleteGroupProps
  extends UseComboboxGroupProps,
    HTMLStyledProps {
  /**
   * The label of the group.
   */
  label?: ReactNode
  /**
   * Props for the label component.
   */
  labelProps?: AutocompleteLabelProps
}

export const AutocompleteGroup = withContext<"div", AutocompleteGroupProps>(
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
          {label ? (
            <AutocompleteLabel {...labelProps}>{label}</AutocompleteLabel>
          ) : null}
          {children}
        </styled.div>
      </ComboboxGroupContext>
    )
  },
  "group",
)()

export interface AutocompleteOptionProps
  extends UseAutocompleteOptionProps,
    HTMLStyledProps {
  /**
   * The icon to be used in the autocomplete option.
   */
  icon?: ReactNode
}

export const AutocompleteOption = withContext<"div", AutocompleteOptionProps>(
  ({ children, icon: iconProp, ...rest }) => {
    const { optionProps: { icon, ...optionProps } = {} } = useComponentContext()
    const { getIndicatorProps, getOptionProps } = useAutocompleteOption({
      ...optionProps,
      ...rest,
    })

    return (
      <styled.div {...getOptionProps()}>
        <AutocompleteIndicator {...getIndicatorProps()}>
          {iconProp ?? icon ?? <CheckIcon />}
        </AutocompleteIndicator>
        {children}
      </styled.div>
    )
  },
  "option",
)()

interface AutocompleteEmptyProps extends HTMLStyledProps {
  /**
   * The icon to be used in the autocomplete option.
   */
  icon?: ReactNode
}

const AutocompleteEmpty = withContext<"div", AutocompleteEmptyProps>(
  ({ children, icon, ...rest }) => {
    const { emptyIcon, emptyProps } = useComponentContext()

    return (
      <styled.div {...emptyProps} {...rest}>
        <AutocompleteIndicator>
          {icon ?? emptyIcon ?? <MinusIcon />}
        </AutocompleteIndicator>
        {children}
      </styled.div>
    )
  },
  "empty",
)()

interface AutocompleteIndicatorProps extends HTMLStyledProps {}

const AutocompleteIndicator = withContext<"div", AutocompleteIndicatorProps>(
  "div",
  "indicator",
)()
