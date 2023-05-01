import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { Popover, PopoverTrigger } from '@yamada-ui/popover'
import { cx } from '@yamada-ui/utils'
import { AutocompleteIcon, AutocompleteIconProps } from './autocomplete-icon'
import { AutocompleteList, AutocompleteListProps } from './autocomplete-list'
import {
  AutocompleteProvider,
  useAutocomplete,
  UseAutocompleteProps,
  AutocompleteDescendantsContextProvider,
  useAutocompleteContext,
  useAutocompleteInput,
} from './use-autocomplete'
import { AutocompleteCreate, AutocompleteEmpty } from './'

type AutocompleteOptions = {
  focusBorderColor?: string
  errorBorderColor?: string
  container?: Omit<HTMLUIProps<'div'>, 'children'>
  list?: Omit<AutocompleteListProps, 'children'>
  input?: HTMLUIProps<'input'>
  icon?: AutocompleteIconProps
}

export type AutocompleteProps = ThemeProps<'Select'> &
  Omit<UseAutocompleteProps<string>, 'maxSelectedValues' | 'omitSelectedValues'> &
  AutocompleteOptions

export const Autocomplete = forwardRef<AutocompleteProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    defaultValue = '',
    color,
    h,
    height,
    minH,
    minHeight,
    container,
    list,
    input,
    icon,
    children,
    ...computedProps
  } = omitThemeProps(props)

  const {
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    createOption,
    isEmpty,
    searchValue,
    computedChildren,
    ...rest
  } = useAutocomplete({ ...computedProps, defaultValue, children })

  h = h ?? height
  minH = minH ?? minHeight

  const css: CSSUIObject = {
    position: 'relative',
    w: '100%',
    h: 'fit-content',
    color,
    ...styles.container,
  }

  return (
    <AutocompleteDescendantsContextProvider value={descendants}>
      <AutocompleteProvider
        value={{ ...rest, formControlProps, searchValue, createOption, isEmpty, styles }}
      >
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx('ui-autocomplete', className)}
            __css={css}
            {...getContainerProps(container)}
          >
            <PopoverTrigger>
              <AutocompleteField h={h} minH={minH} input={input} {...getFieldProps({}, ref)} />
            </PopoverTrigger>

            <AutocompleteIcon {...icon} {...formControlProps} />

            {!isEmpty ? (
              <AutocompleteList {...list}>
                {createOption ? <AutocompleteCreate /> : <AutocompleteEmpty />}

                {children ?? computedChildren}
              </AutocompleteList>
            ) : (
              <AutocompleteList {...list}>
                {createOption && searchValue ? <AutocompleteCreate /> : <AutocompleteEmpty />}
              </AutocompleteList>
            )}
          </ui.div>
        </Popover>
      </AutocompleteProvider>
    </AutocompleteDescendantsContextProvider>
  )
})

type AutocompleteFieldProps = HTMLUIProps<'div'> & Pick<AutocompleteProps, 'input'>

const AutocompleteField = forwardRef<AutocompleteFieldProps, 'div'>(
  ({ className, h, minH, placeholder, input, ...rest }, ref) => {
    const { displayValue, searchValue, styles } = useAutocompleteContext()

    const { getInputProps } = useAutocompleteInput()

    const css: CSSUIObject = {
      paddingEnd: '2rem',
      h,
      minH,
      display: 'flex',
      alignItems: 'center',
      ...styles.field,
      cursor: 'text',
    }

    return (
      <ui.div ref={ref} className={cx('ui-autocomplete-field', className)} __css={css} {...rest}>
        <ui.input
          className='ui-autocomplete-input'
          display='inline-block'
          w='full'
          placeholder={placeholder}
          {...getInputProps(input)}
          value={searchValue || displayValue || ''}
        />
      </ui.div>
    )
  },
)
