import {
  CSSUIObject,
  CSSUIProps,
  forwardRef,
  HTMLUIProps,
} from '@yamada-ui/core'
import { PopoverContent } from '@yamada-ui/popover'
import { cx } from '@yamada-ui/utils'
import { useSelectContext, useSelectList } from './use-select'

export type SelectListProps = HTMLUIProps<'ul'>

export const SelectList = forwardRef<SelectListProps, 'ul'>(
  ({ className, w, width, minW, minWidth, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const { getListProps } = useSelectList()

    w =
      w ?? width ?? ((styles.list?.w ?? styles.list?.width) as CSSUIProps['w'])
    minW =
      minW ??
      minWidth ??
      ((styles.list?.minW ?? styles.list?.minWidth) as CSSUIProps['minW'])

    const css: CSSUIObject = { ...styles.list }

    return (
      <PopoverContent
        className={cx('ui-select-list', className)}
        w={w}
        minW={minW}
        __css={css}
        {...getListProps(rest, ref)}
      />
    )
  },
)
