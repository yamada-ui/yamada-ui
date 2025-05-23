import type { ChangeEventHandler, ReactElement, Ref } from "react"
import type {
  HTMLProps,
  HTMLStyledProps,
  RequiredPropGetter,
  ThemeProps,
} from "../../core"
import type { SegmentedControlStyle } from "./segmented-control.style"
import type { UseSegmentedControlProps } from "./use-segmented-control"
import { createSlotComponent, styled } from "../../core"
import { getValidChildren, mergeRefs } from "../../utils"
import { segmentedControlStyle } from "./segmented-control.style"
import {
  DescendantsContext,
  useDescendant,
  useSegmentedControl,
} from "./use-segmented-control"

export interface SegmentedControlItem extends SegmentedControlButtonProps {
  label?: string
}

export interface SegmentedControlRootProps
  extends Omit<HTMLStyledProps, "defaultValue" | "onChange" | "value">,
    ThemeProps<SegmentedControlStyle>,
    UseSegmentedControlProps {
  /**
   * If provided, generate segmented control buttons but based on items.
   *
   * @default '[]'
   */
  items?: SegmentedControlItem[]
}

interface SegmentedControlContext {
  getInputProps: RequiredPropGetter<HTMLProps<"input">, { index: number }>
  getLabelProps: RequiredPropGetter<
    HTMLProps<"label">,
    {
      index: number
      value: string
      disabled?: boolean
      readOnly?: boolean
    }
  >
}

export const {
  ComponentContext: SegmentedControlContext,
  PropsContext: SegmentedControlPropsContext,
  useComponentContext: useSegmentedControlContext,
  usePropsContext: useSegmentedControlPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  SegmentedControlRootProps,
  SegmentedControlStyle,
  SegmentedControlContext
>("segmented-control", segmentedControlStyle)

/**
 * `SegmentedControl` is a component used for allowing users to select one option from multiple choices.
 *
 * @see https://yamada-ui.com/components/segmented-control
 */
export const SegmentedControlRoot = withProvider<
  "div",
  SegmentedControlRootProps
>(({ children, items = [], ...rest }) => {
  const {
    defaultValue,
    descendants,
    setValue,
    value,
    getInputProps,
    getLabelProps,
    getRootProps,
  } = useSegmentedControl(rest)

  const validChildren = getValidChildren(children)
  let computedChildren: ReactElement<any>[] = []

  if (!validChildren.length && items.length) {
    computedChildren = items.map(({ label, value, ...props }, i) => (
      <SegmentedControlButton key={i} value={value} {...props}>
        {label}
      </SegmentedControlButton>
    ))
  } else {
    computedChildren = validChildren
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (value == null && defaultValue == null) {
    for (const child of computedChildren) {
      if (child.type !== SegmentedControlButton)
        if (
          (child.type as any).displayName !== SegmentedControlButton.displayName
        )
          continue

      const value = child.props.value

      setValue(value)

      break
    }
  }

  return (
    <DescendantsContext value={descendants}>
      <SegmentedControlContext value={{ getInputProps, getLabelProps }}>
        <styled.div {...getRootProps()}>{computedChildren}</styled.div>
      </SegmentedControlContext>
    </DescendantsContext>
  )
}, "root")()

export interface SegmentedControlButtonProps
  extends Omit<HTMLStyledProps<"label">, "onChange" | "ref">,
    Pick<SegmentedControlRootProps, "disabled" | "readOnly"> {
  /**
   * The value of the segmented control button.
   */
  value: string
  /**
   * Ref of Input element.
   */
  ref?: Ref<HTMLInputElement>
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const SegmentedControlButton = withContext<
  "input",
  SegmentedControlButtonProps
>(({ ref, children, disabled, readOnly, value, onChange, ...rest }) => {
  const { getInputProps, getLabelProps } = useSegmentedControlContext()
  const { index, register } = useDescendant({
    disabled: disabled || readOnly,
  })
  const props = {
    disabled,
    index,
    readOnly,
    value,
  }

  return (
    <styled.label {...getLabelProps(props)} {...rest}>
      <styled.input
        {...getInputProps({
          ref: mergeRefs(register, ref),
          onChange,
          ...props,
        })}
      />

      <styled.span zIndex="1">{children}</styled.span>
    </styled.label>
  )
}, "button")()
