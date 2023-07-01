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
import {
  FormControlOptions,
  useFormControlProps,
  formControlProperties,
} from '@yamada-ui/form-control'
import { ChevronIcon } from '@yamada-ui/icon'
import {
  createContext,
  cx,
  splitObject,
  getValidChildren,
  isValidElement,
  isArray,
  pickObject,
} from '@yamada-ui/utils'
import { cloneElement, DetailedHTMLProps, FC, OptionHTMLAttributes, ReactElement } from 'react'

type Value = DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>['value']

export type UINativeOption = Omit<
  DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>,
  'label' | 'children' | 'value'
> & { label?: string; value?: Value | UINativeOption[] }

type NativeSelectContext = Record<string, CSSUIObject>

const [NativeSelectProvider, useNativeSelect] = createContext<NativeSelectContext>({
  name: 'NativeSelectContext',
  errorMessage: `useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`,
})

type NativeSelectOptions = {
  /**
   * If provided, generate options based on data.
   *
   * @default '[]'
   */
  options?: UINativeOption[]
  /**
   * The placeholder for select.
   */
  placeholder?: string
  /**
   * If `true`, include placeholders in options.
   *
   * @default true
   */
  placeholderInOptions?: boolean
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for container element.
   */
  containerProps?: Omit<HTMLUIProps<'div'>, 'children'>
  /**
   * Props for icon element.
   */
  iconProps?: HTMLUIProps<'div'>
}

export type NativeSelectProps = Omit<HTMLUIProps<'select'>, 'size'> &
  ThemeProps<'Select'> &
  NativeSelectOptions &
  FormControlOptions

export const NativeSelect = forwardRef<NativeSelectProps, 'select'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Select', props)
  let {
    className,
    children,
    placeholderInOptions = true,
    color,
    h,
    height,
    minH,
    minHeight,
    options = [],
    value,
    placeholder,
    isRequired,
    containerProps,
    iconProps,
    ...rest
  } = omitThemeProps(mergedProps)

  rest = useFormControlProps(rest)

  const formControlProps = pickObject(rest, formControlProperties)
  const [layoutProps, selectPorps] = splitObject(rest, layoutStylesProperties)

  let computedChildren: ReactElement[] = []

  if (!children && options.length) {
    computedChildren = options.map(({ label, value, ...props }, i) => {
      if (!isArray(value)) {
        return (
          <NativeOption key={i} value={value} {...props}>
            {label}
          </NativeOption>
        )
      } else {
        return (
          <NativeOptionGroup key={i} label={label} {...props}>
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
        className='ui-native-select'
        __css={{
          position: 'relative',
          w: '100%',
          h: 'fit-content',
          color,
          ...styles.container,
        }}
        {...layoutProps}
        {...containerProps}
        {...formControlProps}
      >
        <ui.select
          ref={ref}
          className={cx('ui-native-select-field', className)}
          value={value}
          __css={{ paddingEnd: '2rem', h: h ?? height, minH: minH ?? minHeight, ...styles.field }}
          {...selectPorps}
        >
          {placeholder ? (
            <NativeOption value='' hidden={!placeholderInOptions}>
              {placeholder}
            </NativeOption>
          ) : null}
          {children ?? computedChildren}
        </ui.select>

        <NativeSelectIcon {...iconProps} {...formControlProps} />
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

export type NativeOptionProps = Omit<HTMLUIProps<'option'>, 'children'> & { children?: string }

export const NativeOption = forwardRef<NativeOptionProps, 'option'>((props, ref) => (
  <ui.option ref={ref} {...props} />
))
