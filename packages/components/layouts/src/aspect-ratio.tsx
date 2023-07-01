import { ui, forwardRef, HTMLUIProps, CSSUIObject, Token } from '@yamada-ui/core'
import { cx, replaceObject } from '@yamada-ui/utils'
import { Children } from 'react'

type AspectRatioOptions = {
  /**
   * The aspect ratio of the Box.
   *
   * @default '4 / 3'
   */
  ratio?: Token<number>
}

export type AspectRatioProps = HTMLUIProps<'div'> & AspectRatioOptions

export const AspectRatio = forwardRef<AspectRatioProps, 'div'>(
  ({ className, ratio = 4 / 3, children, ...rest }, ref) => {
    const child = Children.only(children)

    const css: CSSUIObject = {
      position: 'relative',
      _before: {
        content: `""`,
        display: 'block',
        h: 0,
        pb: replaceObject(ratio, (r) => `${(1 / r) * 100}%`),
      },
      '& > *:not(style)': {
        overflow: 'hidden',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        w: '100%',
        h: '100%',
      },
      '& > img, & > video': {
        objectFit: 'cover',
      },
    }

    return (
      <ui.div ref={ref} className={cx('ui-aspect-ratio', className)} __css={css} {...rest}>
        {child}
      </ui.div>
    )
  },
)
