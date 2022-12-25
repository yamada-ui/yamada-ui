import { ui, forwardRef, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { useLazyDisclosure } from '@yamada-ui/hooks'
import { cx } from '@yamada-ui/utils'
import { useRef } from 'react'
import { useTabsContext, useTabPanelContext } from './'

export type TabPanelProps = HTMLUIProps<'div'>

export const TabPanel = forwardRef<TabPanelProps, 'div'>(
  ({ className, children, ...rest }, ref) => {
    const { isLazy: enabled, lazyBehavior: mode, styles } = useTabsContext()
    const { isSelected } = useTabPanelContext()

    const hasBeenSelected = useRef<boolean>(false)

    if (isSelected) hasBeenSelected.current = true

    const shouldRenderChildren = useLazyDisclosure({
      wasSelected: hasBeenSelected.current,
      isSelected,
      enabled,
      mode,
    })

    const css: CSSUIObject = { ...styles.tabPanel }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-tabs-panel', className)}
        __css={css}
        {...rest}
        hidden={!isSelected}
      >
        {shouldRenderChildren ? children : null}
      </ui.div>
    )
  },
)
