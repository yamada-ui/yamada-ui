import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { Icon } from '@yamada-ui/media-and-icons'
import { FC, ReactNode } from 'react'

type TagnOptions = {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  onCloseClick?: () => void
  isDisabled?: boolean
}

export type TagProps = HTMLUIProps<'span'> & ThemeProps<'Tag'> & TagnOptions

export const Tag = forwardRef<TagProps, 'span'>((props, ref) => {
  const styles = useMultiComponentStyle('Tag', props)
  const { className, leftIcon, rightIcon, onCloseClick, isDisabled, children, ...rest } =
    omitThemeProps(props)

  const css: CSSUIObject = {
    maxW: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1',
    verticalAlign: 'top',
    ...styles.container,
  }

  return (
    <ui.span ref={ref} className={cx('ui-tag', className)} __css={css} {...rest}>
      {leftIcon}
      <TagLabel>{children}</TagLabel>
      {rightIcon}
      {onCloseClick ? (
        <CloseButton isDisabled={isDisabled} onClick={onCloseClick}>
          <CloseIcon />
        </CloseButton>
      ) : null}
    </ui.span>
  )
})

const TagLabel: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  const styles = useMultiComponentStyle('Tag', props)
  const css = styles.label

  return (
    <ui.span noOfLines={1} __css={css}>
      {children}
    </ui.span>
  )
}

const CloseIcon: FC = () => {
  return (
    <Icon verticalAlign='inherit' viewBox='0 0 512 512' fontSize='lg'>
      <path
        fill='currentColor'
        d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'
      />
    </Icon>
  )
}

const CloseButton: FC<{ isDisabled?: boolean; children: ReactNode; onClick: () => void }> = ({
  isDisabled,
  children,
  onClick,
  ...props
}) => {
  const styles = useMultiComponentStyle('Tag', props)

  const css: CSSUIObject = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: '0',
    ...styles.closeButton,
  }

  return (
    <ui.button type='button' aria-label='close' disabled={isDisabled} __css={css} onClick={onClick}>
      {children}
    </ui.button>
  )
}
