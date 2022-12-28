import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  layoutStylesProperties,
} from '@yamada-ui/core'
import { ChevronIcon } from '@yamada-ui/media-and-icons'
import {
  createContext,
  cx,
  splitObject,
  getValidChildren,
  omitObject,
  isValidElement,
  isUndefined,
  isArray,
} from '@yamada-ui/utils'
import {
  cloneElement,
  DetailedHTMLProps,
  FC,
  OptionHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'
import { FormControlOptions, useFormControlProps, formControlProperties } from '.'

type Value = DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>['value']

export type UINativeOption = Omit<
  DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>,
  'label' | 'children' | 'value'
> & { label?: ReactNode; value?: Value | UINativeOption[] }

type NativeSelectContext = Record<string, CSSUIObject>

const [NativeSelectProvider, useNativeSelect] = createContext<NativeSelectContext>({
  strict: false,
  name: 'NativeSelectContext',
})

type NativeSelectOptions = {
  data?: UINativeOption[]
  placeholder?: string
  isPlaceholderHidden?: boolean
  focusBorderColor?: string
  errorBorderColor?: string
  container?: Omit<HTMLUIProps<'div'>, 'children'>
  icon?: HTMLUIProps<'div'>
}

export type NativeSelectProps = Omit<HTMLUIProps<'select'>, 'size'> &
  ThemeProps<'Select'> &
  NativeSelectOptions &
  FormControlOptions

export const NativeSelect = forwardRef<NativeSelectProps, 'select'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    children,
    isPlaceholderHidden = true,
    color,
    h,
    height,
    minH,
    minHeight,
    data = [],
    value,
    placeholder,
    isRequired,
    container,
    icon,
    ...rest
  } = omitThemeProps(props)

  rest = useFormControlProps({ ...rest, isRequired: isRequired ?? !isUndefined(placeholder) })

  const formControlProps = omitObject(rest, formControlProperties)
  const computedProps = splitObject(rest, layoutStylesProperties)

  let computedChildren: ReactElement[] = []

  if (!children && data.length) {
    computedChildren = data.map(({ label, value, ...props }, i) => {
      if (!isArray(value)) {
        return (
          <NativeOption key={i} value={value} {...props}>
            {label}
          </NativeOption>
        )
      } else {
        return (
          <NativeOptionGroup key={i} label={label as string} {...props}>
            {value.map(({ label, value, ...props }, i) =>
              !isArray(value) ? (
                <NativeOption key={i} value={value} {...props}>
                  {label}
                </NativeOption>
              ) : null,
            )}
          </NativeOptionGroup>
        )
      }
    })
  }

  return (
    <NativeSelectProvider value={styles}>
      <ui.div
        className='ui-native-select-container'
        __css={{ position: 'relative', w: '100%', h: 'fit-content', color }}
        {...computedProps[0]}
        {...container}
        {...formControlProps}
      >
        <ui.select
          ref={ref}
          className={cx('ui-native-select', className)}
          value={value}
          __css={{ paddingEnd: '2rem', h: h ?? height, minH: minH ?? minHeight, ...styles.field }}
          {...computedProps[1]}
        >
          {placeholder ? (
            <NativeOption value='' hidden={isPlaceholderHidden}>
              {placeholder}
            </NativeOption>
          ) : null}
          {children ?? computedChildren}
        </ui.select>

        <NativeSelectIcon {...icon} {...formControlProps} />
      </ui.div>
    </NativeSelectProvider>
  )
})

type NativeSelectIconProps = HTMLUIProps<'div'>

const NativeSelectIcon: FC<NativeSelectIconProps> = ({ className, children, ...rest }) => {
  const styles = useNativeSelect()

  const css: CSSUIObject = {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    top: '50%',
    transform: 'translateY(-50%)',
    ...styles.icon,
  }

  const validChildren = getValidChildren(children)

  const cloneChildren = validChildren.map((child) =>
    cloneElement(child, {
      focusable: false,
      'aria-hidden': true,
      style: {
        width: '1em',
        height: '1em',
        color: 'currentColor',
      },
    }),
  )

  return (
    <ui.div className={cx('ui-native-select-icon', className)} __css={css} {...rest}>
      {isValidElement(children) ? cloneChildren : <ChevronIcon />}
    </ui.div>
  )
}

export type NativeOptionGroupProps = HTMLUIProps<'optgroup'>

export const NativeOptionGroup = forwardRef<NativeOptionGroupProps, 'optgroup'>((props, ref) => (
  <ui.optgroup ref={ref} {...props} />
))

export type NativeOptionProps = HTMLUIProps<'option'>

export const NativeOption = forwardRef<NativeOptionProps, 'option'>((props, ref) => (
  <ui.option ref={ref} {...props} />
))
