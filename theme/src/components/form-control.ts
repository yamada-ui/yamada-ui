import { ComponentStyle } from '@yamada-ui/styled'

export const FormControl: ComponentStyle = {
  baseStyle: {
    container: {
      w: '100%',
      position: 'relative',
    },
    label: {
      fontSize: 'md',
      me: '3',
      mb: '2',
      fontWeight: 'medium',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      opacity: 1,
      _disabled: {
        opacity: 0.4,
      },
    },
    requiredIndicator: {
      ms: '1',
      color: ['red.500', 'red.300'],
    },
    helperMessage: {
      mt: '2',
      color: ['gray.600', 'whiteAlpha.600'],
      fontSize: 'sm',
    },
    errorMessage: {
      mt: '2',
      color: ['red.500', 'red.300'],
      fontSize: 'sm',
    },
  },
}
