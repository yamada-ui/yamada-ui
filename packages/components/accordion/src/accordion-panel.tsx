import { ui, forwardRef, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { WithTransitionProps } from '@yamada-ui/motion'
import { Collapse, CollapseProps } from '@yamada-ui/transitions'
import { cx } from '@yamada-ui/utils'
import { useAccordionContext } from './accordion'
import { useAccordionItemContext } from './accordion-item'

export type AccordionPanelProps = Omit<
  WithTransitionProps<HTMLUIProps<'div'>>,
  'isOpen'
> &
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
      children,
      ...rest
    },
    ref,
  ) => {
    const { isOpen, getPanelProps } = useAccordionItemContext()
    const { styles } = useAccordionContext()

    const resolvedChildren =
      typeof children === 'string' ? <p>{children}</p> : children

    const css: CSSUIObject = { ...styles.panel }

    return (
      <Collapse
        {...{
          isOpen,
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
          className={cx('ui-accordion__panel', className)}
          __css={css}
        >
          {resolvedChildren}
        </ui.div>
      </Collapse>
    )
  },
)
