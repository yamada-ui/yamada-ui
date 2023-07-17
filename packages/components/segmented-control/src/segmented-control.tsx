import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { createDescendant } from '@yamada-ui/use-descendant'
import { trackFocusVisible } from '@yamada-ui/use-focus-visible'
import { useResizeObserver } from '@yamada-ui/use-resize-observer'
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  getValidChildren,
  handlerAll,
  mergeRefs,
  omitObject,
  PropGetter,
  RequiredPropGetter,
  useCallbackRef,
} from '@yamada-ui/utils'
import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLButtonElement>()

type SegmentedControlContext = {
  getInputProps: RequiredPropGetter<{ index: number }>
  getLabelProps: RequiredPropGetter<{ index: number }>
  styles: Record<string, CSSUIObject>
}

const [SegmentedControlProvider, useSegmentedControl] =
  createContext<SegmentedControlContext>({
    strict: false,
    name: 'SegmentedControlContext',
  })

type SegmentedControlOptions = {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The value of the segmented control.
   */
  value?: string
  /**
   * The initial value of the segmented control.
   */
  defaultValue?: string
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: string) => void
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
  /**
   * If `true`, the segmented control will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
}

export type SegmentedControlProps = Omit<HTMLUIProps<'div'>, 'onChange'> &
  ThemeProps<'SegmentedControl'> &
  SegmentedControlOptions

export const SegmentedControl = forwardRef<SegmentedControlProps, 'div'>(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle(
      'SegmentedControl',
      props,
    )
    let { className, id, name, isReadOnly, isDisabled, children, ...rest } =
      omitThemeProps(mergedProps)

    id = id ?? useId()
    name = name ?? `segmented-control-${useId()}`

    rest.onChange = useCallbackRef(rest.onChange)

    const descendants = useDescendants()

    const [focusedIndex, setFocusedIndex] = useState<number>(-1)
    const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
    const [observerRef, containerRect] = useResizeObserver()
    const containerRef = useRef<HTMLDivElement>(null)
    const labelRefs = useRef<Map<string | number, HTMLLabelElement>>(new Map())

    const [activePosition, setActivePosition] = useState({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    })

    const [value, setValue] = useControllableState({
      value: rest.value,
      defaultValue: rest.defaultValue,
      onChange: rest.onChange,
    })

    useEffect(() => {
      return trackFocusVisible(setIsFocusVisible)
    }, [])

    useEffect(() => {
      const el = labelRefs.current.get(value)

      if (!el || !containerRef.current || !observerRef.current) return

      const { paddingLeft, paddingTop } = getComputedStyle(containerRef.current)

      const gutterX = parseFloat(paddingLeft) || 0
      const gutterY = parseFloat(paddingTop) || 0

      let { width, height } = el.getBoundingClientRect()
      const x = el.offsetLeft - gutterX
      const y = el.offsetTop - gutterY

      width = width * (el.offsetWidth / width) || 0
      height = height * (el.offsetWidth / width) || 0

      setActivePosition({ width, height, x, y })
    }, [focusedIndex, containerRect, labelRefs, observerRef, value])

    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
          ev.preventDefault()

          return
        }

        setValue(ev.target.value)
      },
      [isDisabled, isReadOnly, setValue],
    )

    const onFocus = useCallback(
      (index: number, skip: boolean) => {
        if (isDisabled) return

        if (skip) {
          const next = descendants.enabledNextValue(index)

          if (next) setFocusedIndex(next.index)
        } else {
          setFocusedIndex(index)
        }
      },
      [descendants, isDisabled],
    )

    const onBlur = useCallback(() => setFocusedIndex(-1), [])

    const getContainerProps: PropGetter = useCallback(
      (props = {}, ref = null) => ({
        ...omitObject(rest, ['value', 'defaultValue', 'onChange']),
        ...props,
        ref: mergeRefs(containerRef, observerRef, ref),
        id,
        'aria-disabled': ariaAttr(isDisabled),
        'aria-readonly': ariaAttr(isReadOnly),
        onBlur: handlerAll(props.onBlur, onBlur),
      }),
      [id, isDisabled, isReadOnly, observerRef, onBlur, rest],
    )

    const getActiveProps: PropGetter = useCallback(
      (props = {}, ref = null) => {
        const { width, height, x, y } = activePosition

        return {
          ...props,
          ref,
          style: {
            position: 'absolute',
            zIndex: 1,
            width,
            height,
            transform: `translate(${x}px, ${y}px)`,
          },
        }
      },
      [activePosition],
    )

    const getInputProps: RequiredPropGetter<{ index: number }> = useCallback(
      ({ index, ...props } = {}, ref = null) => {
        const disabled = props.disabled ?? props.isDisabled ?? isDisabled
        const readOnly = props.readOnly ?? props.isReadOnly ?? isReadOnly
        const checked = props.value === value

        return {
          ...omitObject(props, ['isDisabled', 'isReadOnly']),
          ref,
          id: `${id}-${index}`,
          type: 'radio',
          name,
          disabled: disabled || readOnly,
          readOnly,
          checked,
          'aria-disabled': ariaAttr(disabled),
          'aria-readonly': ariaAttr(readOnly),
          'data-checked': dataAttr(checked),
          'data-focus': dataAttr(index === focusedIndex),
          style: {
            border: '0px',
            clip: 'rect(0px, 0px, 0px, 0px)',
            height: '1px',
            width: '1px',
            margin: '-1px',
            padding: '0px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'absolute',
          },
          onChange: handlerAll(props.onChange, (ev) =>
            !disabled && !readOnly
              ? onChange(ev as ChangeEvent<HTMLInputElement>)
              : {},
          ),
        }
      },
      [isDisabled, isReadOnly, value, id, name, focusedIndex, onChange],
    )

    const getLabelProps: RequiredPropGetter<{ index: number }> = useCallback(
      ({ index, ...props } = {}, ref = null) => {
        const disabled = props.disabled ?? props.isDisabled ?? isDisabled
        const readOnly = props.readOnly ?? props.isReadOnly ?? isReadOnly
        const checked = props.value === value
        const focused = index === focusedIndex

        return {
          props,
          ref: mergeRefs(
            (node) => labelRefs.current.set(props.value, node),
            ref,
          ),
          'aria-disabled': ariaAttr(disabled),
          'aria-readonly': ariaAttr(readOnly),
          'data-checked': dataAttr(checked),
          'data-focus': dataAttr(focused),
          'data-focus-visible': dataAttr(focused && isFocusVisible),
          onFocus: handlerAll(props.onFocus, () =>
            onFocus(index, disabled || readOnly),
          ),
          ...(disabled || readOnly
            ? {
                _hover: {},
                _active: {},
                _focus: {},
                _invalid: {},
                _focusVisible: {},
              }
            : {}),
          style: { position: 'relative', zIndex: 2 },
        }
      },
      [focusedIndex, isDisabled, isFocusVisible, isReadOnly, onFocus, value],
    )

    const css: CSSUIObject = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      ...styles.container,
    }

    const validChildren = getValidChildren(children)

    if (value == null && rest.defaultValue == null) {
      for (const child of validChildren) {
        if (child.type !== SegmentedControlButton) continue

        const value = child.props.value

        setValue(value)

        break
      }
    }

    return (
      <DescendantsContextProvider value={descendants}>
        <SegmentedControlProvider
          value={{ getInputProps, getLabelProps, styles }}
        >
          <ui.div
            {...getContainerProps({}, ref)}
            className={cx('ui-segmented-control', className)}
            __css={css}
          >
            <ui.span
              className='ui-segmented-control-active'
              {...getActiveProps()}
              __css={styles.active}
            />
            {validChildren}
          </ui.div>
        </SegmentedControlProvider>
      </DescendantsContextProvider>
    )
  },
)

type SegmentedControlButtonOptions = {
  /**
   * The value of the segmented control button.
   */
  value: string | number
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type SegmentedControlButtonProps = Omit<
  HTMLUIProps<'label'>,
  'onChange'
> &
  Pick<SegmentedControlProps, 'isDisabled' | 'isReadOnly'> &
  SegmentedControlButtonOptions

export const SegmentedControlButton = forwardRef<
  SegmentedControlButtonProps,
  'input'
>(
  (
    {
      className,
      disabled,
      readOnly,
      isDisabled,
      isReadOnly,
      value,
      onChange,
      children,
      ...rest
    },
    ref,
  ) => {
    const { getInputProps, getLabelProps, styles } = useSegmentedControl()

    const { index, register } = useDescendant({
      disabled: isDisabled || isReadOnly,
    })

    const props = {
      index,
      value,
      onChange,
      disabled,
      readOnly,
      isDisabled,
      isReadOnly,
    }

    const css: CSSUIObject = {
      cursor: 'pointer',
      flex: '1 1 0%',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.button,
    }

    return (
      <ui.label
        {...getLabelProps(omitObject(props, ['onChange']))}
        className={cx('ui-segmented-control-button', className)}
        __css={css}
        {...rest}
      >
        <ui.input {...getInputProps(props, mergeRefs(register, ref))} />
        <ui.span>{children}</ui.span>
      </ui.label>
    )
  },
)
