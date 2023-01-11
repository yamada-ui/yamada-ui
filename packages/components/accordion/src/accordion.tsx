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
import { createContext, cx, isArray } from '@yamada-ui/utils'
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

const {
  DescendantsContextProvider,
  useDescendants,
  useDescendant: useAccordionDescendant,
} = createDescendant<HTMLButtonElement>()

export { useAccordionDescendant }

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

export { useAccordionContext }

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
