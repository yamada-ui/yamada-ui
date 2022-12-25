import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  WithTransitionProps,
} from '@yamada-ui/core'
import { createDescendant, useControllableState } from '@yamada-ui/hooks'
import { ChevronIcon, IconProps } from '@yamada-ui/media-and-icons'
import { Collapse, CollapseProps } from '@yamada-ui/transitions'
import {
  ariaAttr,
  createContext,
  cx,
  findChildren,
  getValidChildren,
  handlerAll,
  isArray,
  isEmpty,
  mergeRefs,
  omitChildren,
  PropGetter,
} from '@yamada-ui/utils'
import {
  Dispatch,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLButtonElement>()

type AccordionContext = Pick<
  AccordionOptions,
  'isMultiple' | 'isToggle' | 'icon' | 'iconHidden'
> & {
  index: ExpandedIndex
  setIndex: Dispatch<SetStateAction<ExpandedIndex>>
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: Record<string, CSSUIObject>
}

const [AccordionProvider, useAccordionContext] = createContext<AccordionContext>({
  name: 'AccordionContext',
  errorMessage: `useAccordionContext returned is 'undefined'. Seems you forgot to wrap the components in "<Accordion />"`,
})

type AccordionItemContext = Omit<AccordionItemOptions, 'children'> & {
  isOpen: boolean
  getLabelProps: PropGetter
  getPanelProps: PropGetter
}

const [AccordionItemProvider, useAccordionItemContext] = createContext<AccordionItemContext>({
  name: 'AccordionItemContext',
  errorMessage: `useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`,
})

type ExpandedIndex = number | number[]

type AccordionOptions = {
  index?: ExpandedIndex
  defaultIndex?: ExpandedIndex
  isMultiple?: boolean
  isToggle?: boolean
  iconHidden?: boolean
  icon?: ReactNode | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  onChange?: (index: ExpandedIndex) => void
}

export type AccordionProps = Omit<HTMLUIProps<'div'>, 'onChange'> &
  ThemeProps<'Accordion'> &
  AccordionOptions

export const Accordion = forwardRef<AccordionProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Accordion', props)
  const {
    className,
    index: value,
    defaultIndex: defaultValue,
    isMultiple,
    isToggle,
    iconHidden,
    icon,
    onChange,
    ...rest
  } = omitThemeProps(props)

  if ((value || defaultValue) != null && !isArray(value || defaultValue) && isMultiple) {
    console.warn(`If 'isMultiple' is passed, then 'index' or 'defaultIndex' must be an array.`)
  }

  if (isMultiple && isToggle) {
    console.warn(
      `If 'isMultiple' is passed, 'isToggle' will be ignored. Either remove 'isToggle' or 'isMultiple' depending on whether you want isMultiple accordions visible or not`,
    )
  }

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const [index, setIndex] = useControllableState({
    value,
    defaultValue: () => (isMultiple ? defaultValue ?? [] : defaultValue ?? -1),
    onChange,
  })

  useEffect(() => {
    return () => setFocusedIndex(-1)
  }, [])

  const css: CSSUIObject = { w: 'full', ...styles.container }

  return (
    <DescendantsContextProvider value={descendants}>
      <AccordionProvider
        value={{
          index,
          setIndex,
          focusedIndex,
          setFocusedIndex,
          isMultiple,
          isToggle,
          iconHidden,
          icon,
          styles,
        }}
      >
        <ui.div ref={ref} className={cx('ui-accordion', className)} __css={css} {...rest}></ui.div>
      </AccordionProvider>
    </DescendantsContextProvider>
  )
})

type AccordionItemOptions = {
  isDisabled?: boolean
  label?: ReactNode | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  icon?: ReactNode | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  children?: ReactNode | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
}

export type AccordionItemProps = Omit<HTMLUIProps<'div'>, 'children'> & AccordionItemOptions

export const AccordionItem = forwardRef<AccordionItemProps, 'div'>(
  ({ className, isDisabled = false, label, icon, children, ...rest }, ref) => {
    const { index, setIndex, setFocusedIndex, isMultiple, isToggle, styles } = useAccordionContext()

    const { index: i, register, descendants } = useDescendant({ disabled: isDisabled })

    const isOpen = i !== -1 ? (isArray(index) ? index.includes(i) : index === i) : false

    if (isOpen && isDisabled) {
      console.warn(`Cannot open a disabled accordion item`)
    }

    const onChange = useCallback(
      (isOpen: boolean) => {
        if (i === -1) return

        if (isMultiple && isArray(index)) {
          console.log(isOpen, index, i)
          setIndex(isOpen ? index.concat(i) : index.filter((v) => v !== i))
        } else if (isOpen) {
          setIndex(i)
        } else if (isToggle) {
          setIndex(-1)
        }
      },
      [isMultiple, isToggle, i, index, setIndex],
    )

    const onFocus = useCallback(() => {
      setFocusedIndex(i)
    }, [setFocusedIndex, i])

    const onClick = useCallback(() => {
      onChange(!isOpen)
      setFocusedIndex(i)
    }, [i, setFocusedIndex, isOpen, onChange])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: Record<string, KeyboardEventHandler> = {
          ArrowDown: () => {
            const next = descendants.enabledNextValue(i)

            next?.node.focus()
          },
          ArrowUp: () => {
            const prev = descendants.enabledPrevValue(i)

            prev?.node.focus()
          },
          Home: () => {
            const first = descendants.enabledfirstValue()

            first?.node.focus()
          },
          End: () => {
            const last = descendants.enabledlastValue()

            last?.node.focus()
          },
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
      [descendants, i],
    )

    const getLabelProps: PropGetter = useCallback(
      (props = {}, ref = null) => ({
        ...props,
        ref: mergeRefs(register, ref),
        type: 'button',
        disabled: isDisabled,
        'aria-expanded': ariaAttr(isOpen),
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }),
      [isDisabled, isOpen, onClick, onFocus, onKeyDown, register],
    )

    const getPanelProps: PropGetter = useCallback(
      (props = {}, ref = null) => ({ ...props, ref }),
      [],
    )

    const css: CSSUIObject = { ...styles.item, overflowAnchor: 'none' }

    const cloneLabel =
      typeof label === 'function'
        ? label({
            isExpanded: isOpen,
            isDisabled,
          })
        : label

    if (typeof children === 'function') children = children({ isExpanded: isOpen, isDisabled })

    const validChildren = getValidChildren(children)

    const [customAccordionLabel] = findChildren(validChildren, AccordionLabel)
    const [customAccordionPanel] = findChildren(validChildren, AccordionPanel)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionLabel, AccordionPanel)
      : children

    return (
      <AccordionItemProvider value={{ isOpen, isDisabled, icon, getLabelProps, getPanelProps }}>
        <ui.div
          ref={ref}
          className={cx('ui-accordion-item', className)}
          aria-expanded={ariaAttr(isOpen)}
          __css={css}
          {...rest}
        >
          {customAccordionLabel ?? <AccordionLabel>{cloneLabel}</AccordionLabel>}
          {customAccordionPanel ?? <AccordionPanel>{cloneChildren}</AccordionPanel>}
        </ui.div>
      </AccordionItemProvider>
    )
  },
)

type AccordionLabelOptions = {
  icon?: ReactNode | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
}

export type AccordionLabelProps = HTMLUIProps<'button'> & AccordionLabelOptions

export const AccordionLabel = forwardRef<AccordionLabelProps, 'button'>(
  ({ className, icon: customIcon, children, ...rest }, ref) => {
    const {
      isOpen,
      isDisabled = false,
      icon: supplementIcon,
      getLabelProps,
    } = useAccordionItemContext()
    const { icon: generalIcon, iconHidden, styles } = useAccordionContext()

    const css: CSSUIObject = {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      outline: 0,
      ...styles.button,
    }

    const cloneCustomIcon =
      typeof customIcon === 'function'
        ? customIcon({
            isExpanded: isOpen,
            isDisabled,
          })
        : customIcon

    const cloneSupplementlIcon =
      typeof supplementIcon === 'function'
        ? supplementIcon({
            isExpanded: isOpen,
            isDisabled,
          })
        : supplementIcon

    const cloneGenerallIcon =
      typeof generalIcon === 'function'
        ? generalIcon({
            isExpanded: isOpen,
            isDisabled,
          })
        : generalIcon

    return (
      <ui.button
        {...getLabelProps(rest, ref)}
        className={cx('ui-accordion-label', className)}
        __css={css}
      >
        {children}
        {!iconHidden ? (
          <AccordionIcon>
            {cloneCustomIcon ?? cloneSupplementlIcon ?? cloneGenerallIcon}
          </AccordionIcon>
        ) : null}
      </ui.button>
    )
  },
)

const AccordionIcon: FC<PropsWithChildren<IconProps>> = ({ className, children, ...rest }) => {
  const { isOpen, isDisabled } = useAccordionItemContext()
  const { styles } = useAccordionContext()

  const css: CSSUIObject = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
    ...styles.icon,
  }

  if (children)
    return (
      <ui.span
        className={cx('ui-accordion-icon', className)}
        __css={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          ml: 'auto',
        }}
      >
        {children}
      </ui.span>
    )

  return <ChevronIcon className={cx('ui-accordion-icon', className)} __css={css} {...rest} />
}

export type AccordionPanelProps = Omit<WithTransitionProps<HTMLUIProps<'div'>>, 'isOpen'> &
  Pick<CollapseProps, 'animationOpacity' | 'startingHeight' | 'endingHeight'>

export const AccordionPanel = forwardRef<AccordionPanelProps, 'div'>(
  (
    {
      className,
      unmountOnExit,
      animationOpacity,
      startingHeight,
      endingHeight,
      transition,
      transitionEnd,
      delay,
      duration,
      ...rest
    },
    ref,
  ) => {
    const { isOpen, getPanelProps } = useAccordionItemContext()
    const { styles } = useAccordionContext()

    const css: CSSUIObject = { ...styles.panel }

    return (
      <Collapse
        isOpen={isOpen}
        {...{
          unmountOnExit,
          animationOpacity,
          startingHeight,
          endingHeight,
          transition,
          transitionEnd,
          delay,
          duration,
        }}
      >
        <ui.div
          {...getPanelProps(rest, ref)}
          className={cx('ui-accordion-panel', className)}
          __css={css}
        />
      </Collapse>
    )
  },
)
