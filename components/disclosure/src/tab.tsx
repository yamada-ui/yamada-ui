import { ui, forwardRef, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { useClickable, UseClickableProps } from '@yamada-ui/hooks'
import { ariaAttr, cx, handlerAll, mergeRefs } from '@yamada-ui/utils'
import { useTabsContext, useTabsDescendant } from './'

export type TabProps = HTMLUIProps<'button'> & Omit<UseClickableProps, 'ref' | 'color'>

export const Tab = forwardRef<TabProps, 'button'>(
  ({ className, isDisabled, isFocusable, clickOnEnter, clickOnSpace, ...props }, ref) => {
    const { selectedIndex, isManual, setSelectedIndex, setFocusedIndex, styles } = useTabsContext()

    const { index, register } = useTabsDescendant({
      disabled: isDisabled && !isFocusable,
    })

    const isSelected = index === selectedIndex

    const onClick = () => setSelectedIndex(index)

    const onFocus = () => {
      if (isDisabled) return

      setFocusedIndex(index)

      if (!isManual && !isFocusable) setSelectedIndex(index)
    }

    const rest = useClickable({
      ref: mergeRefs(register, ref),
      isDisabled,
      isFocusable,
      clickOnEnter,
      clickOnSpace,
      onClick: handlerAll(props.onClick, onClick),
    })

    const css: CSSUIObject = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: '0',
      ...styles.tab,
    }

    return (
      <ui.button
        className={cx('ui-tabs-tab', className)}
        __css={css}
        {...props}
        {...rest}
        type='button'
        tabIndex={isSelected ? 0 : -1}
        aria-selected={ariaAttr(isSelected)}
        onFocus={handlerAll(props.onFocus, onFocus)}
      />
    )
  },
)
