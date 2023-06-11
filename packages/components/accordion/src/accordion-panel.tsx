import { ui, forwardRef, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { WithTransitionProps } from '@yamada-ui/motion'
import { Collapse, CollapseProps } from '@yamada-ui/transitions'
import { cx } from '@yamada-ui/utils'
import { useAccordionItemContext, useAccordionContext } from './'

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
          className={cx('ui-accordion-panel', className)}
          __css={css}
        />
      </Collapse>
    )
  },
)
