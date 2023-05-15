import { UITheme } from './ui-theme.types'

export interface GeneratedTheme extends UITheme {
  borders: string & {}
  breakpoints: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {})
  colors:
    | 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'link'
    | 'border'
    | 'whiteAlpha.50'
    | 'whiteAlpha.100'
    | 'whiteAlpha.200'
    | 'whiteAlpha.300'
    | 'whiteAlpha.400'
    | 'whiteAlpha.500'
    | 'whiteAlpha.600'
    | 'whiteAlpha.700'
    | 'whiteAlpha.800'
    | 'whiteAlpha.900'
    | 'blackAlpha.50'
    | 'blackAlpha.100'
    | 'blackAlpha.200'
    | 'blackAlpha.300'
    | 'blackAlpha.400'
    | 'blackAlpha.500'
    | 'blackAlpha.600'
    | 'blackAlpha.700'
    | 'blackAlpha.800'
    | 'blackAlpha.900'
    | 'gray.50'
    | 'gray.100'
    | 'gray.200'
    | 'gray.300'
    | 'gray.400'
    | 'gray.500'
    | 'gray.600'
    | 'gray.700'
    | 'gray.800'
    | 'gray.900'
    | 'red.50'
    | 'red.100'
    | 'red.200'
    | 'red.300'
    | 'red.400'
    | 'red.500'
    | 'red.600'
    | 'red.700'
    | 'red.800'
    | 'red.900'
    | 'orange.50'
    | 'orange.100'
    | 'orange.200'
    | 'orange.300'
    | 'orange.400'
    | 'orange.500'
    | 'orange.600'
    | 'orange.700'
    | 'orange.800'
    | 'orange.900'
    | 'yellow.50'
    | 'yellow.100'
    | 'yellow.200'
    | 'yellow.300'
    | 'yellow.400'
    | 'yellow.500'
    | 'yellow.600'
    | 'yellow.700'
    | 'yellow.800'
    | 'yellow.900'
    | 'green.50'
    | 'green.100'
    | 'green.200'
    | 'green.300'
    | 'green.400'
    | 'green.500'
    | 'green.600'
    | 'green.700'
    | 'green.800'
    | 'green.900'
    | 'teal.50'
    | 'teal.100'
    | 'teal.200'
    | 'teal.300'
    | 'teal.400'
    | 'teal.500'
    | 'teal.600'
    | 'teal.700'
    | 'teal.800'
    | 'teal.900'
    | 'blue.50'
    | 'blue.100'
    | 'blue.200'
    | 'blue.300'
    | 'blue.400'
    | 'blue.500'
    | 'blue.600'
    | 'blue.700'
    | 'blue.800'
    | 'blue.900'
    | 'cyan.50'
    | 'cyan.100'
    | 'cyan.200'
    | 'cyan.300'
    | 'cyan.400'
    | 'cyan.500'
    | 'cyan.600'
    | 'cyan.700'
    | 'cyan.800'
    | 'cyan.900'
    | 'purple.50'
    | 'purple.100'
    | 'purple.200'
    | 'purple.300'
    | 'purple.400'
    | 'purple.500'
    | 'purple.600'
    | 'purple.700'
    | 'purple.800'
    | 'purple.900'
    | 'pink.50'
    | 'pink.100'
    | 'pink.200'
    | 'pink.300'
    | 'pink.400'
    | 'pink.500'
    | 'pink.600'
    | 'pink.700'
    | 'pink.800'
    | 'pink.900'
    | 'linkedin.50'
    | 'linkedin.100'
    | 'linkedin.200'
    | 'linkedin.300'
    | 'linkedin.400'
    | 'linkedin.500'
    | 'linkedin.600'
    | 'linkedin.700'
    | 'linkedin.800'
    | 'linkedin.900'
    | 'facebook.50'
    | 'facebook.100'
    | 'facebook.200'
    | 'facebook.300'
    | 'facebook.400'
    | 'facebook.500'
    | 'facebook.600'
    | 'facebook.700'
    | 'facebook.800'
    | 'facebook.900'
    | 'messenger.50'
    | 'messenger.100'
    | 'messenger.200'
    | 'messenger.300'
    | 'messenger.400'
    | 'messenger.500'
    | 'messenger.600'
    | 'messenger.700'
    | 'messenger.800'
    | 'messenger.900'
    | 'whatsapp.50'
    | 'whatsapp.100'
    | 'whatsapp.200'
    | 'whatsapp.300'
    | 'whatsapp.400'
    | 'whatsapp.500'
    | 'whatsapp.600'
    | 'whatsapp.700'
    | 'whatsapp.800'
    | 'whatsapp.900'
    | 'twitter.50'
    | 'twitter.100'
    | 'twitter.200'
    | 'twitter.300'
    | 'twitter.400'
    | 'twitter.500'
    | 'twitter.600'
    | 'twitter.700'
    | 'twitter.800'
    | 'twitter.900'
    | 'line.50'
    | 'line.100'
    | 'line.200'
    | 'line.300'
    | 'line.400'
    | 'line.500'
    | 'line.600'
    | 'line.700'
    | 'line.800'
    | 'line.900'
    | 'instagram.50'
    | 'instagram.100'
    | 'instagram.200'
    | 'instagram.300'
    | 'instagram.400'
    | 'instagram.500'
    | 'instagram.600'
    | 'instagram.700'
    | 'instagram.800'
    | 'instagram.900'
    | 'youtube.50'
    | 'youtube.100'
    | 'youtube.200'
    | 'youtube.300'
    | 'youtube.400'
    | 'youtube.500'
    | 'youtube.600'
    | 'youtube.700'
    | 'youtube.800'
    | 'youtube.900'
    | (string & {})
  colorStyles:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'link'
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'line'
    | 'instagram'
    | 'youtube'
    | (string & {})
  fonts: 'heading' | 'body' | 'mono' | (string & {})
  fontSizes:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | (string & {})
  fontWeights:
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
    | (string & {})
  layerStyles: string & {}
  letterSpacings: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | (string & {})
  lineHeights:
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'normal'
    | 'none'
    | 'shorter'
    | 'short'
    | 'base'
    | 'tall'
    | 'taller'
    | (string & {})
  radii: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | (string & {})
  shadows:
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'outline'
    | 'inner'
    | 'none'
    | 'dark-md'
    | 'dark-lg'
    | (string & {})
  sizes:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '12'
    | '14'
    | '16'
    | '20'
    | '24'
    | '28'
    | '32'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56'
    | '60'
    | '64'
    | '70'
    | '72'
    | '80'
    | '84'
    | '96'
    | 'xs'
    | 'sm'
    | 'md'
    | 'normal'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'px'
    | '0.5'
    | '1.5'
    | '2.5'
    | '3.5'
    | 'max'
    | 'min'
    | 'full'
    | '9xs'
    | '8xs'
    | '7xs'
    | '6xs'
    | '5xs'
    | '4xs'
    | '3xs'
    | '2xs'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | (string & {})
  spaces:
    | '1'
    | '-1'
    | '2'
    | '-2'
    | '3'
    | '-3'
    | '4'
    | '-4'
    | '5'
    | '-5'
    | '6'
    | '-6'
    | '7'
    | '-7'
    | '8'
    | '-8'
    | '9'
    | '-9'
    | '10'
    | '-10'
    | '12'
    | '-12'
    | '14'
    | '-14'
    | '16'
    | '-16'
    | '20'
    | '-20'
    | '24'
    | '-24'
    | '28'
    | '-28'
    | '32'
    | '-32'
    | '36'
    | '-36'
    | '40'
    | '-40'
    | '44'
    | '-44'
    | '48'
    | '-48'
    | '52'
    | '-52'
    | '56'
    | '-56'
    | '60'
    | '-60'
    | '64'
    | '-64'
    | '70'
    | '-70'
    | '72'
    | '-72'
    | '80'
    | '-80'
    | '84'
    | '-84'
    | '96'
    | '-96'
    | 'xs'
    | '-xs'
    | 'sm'
    | '-sm'
    | 'md'
    | '-md'
    | 'normal'
    | '-normal'
    | 'lg'
    | '-lg'
    | 'xl'
    | '-xl'
    | '2xl'
    | '-2xl'
    | '3xl'
    | '-3xl'
    | '4xl'
    | '-4xl'
    | 'px'
    | '-px'
    | '0.5'
    | '-0.5'
    | '1.5'
    | '-1.5'
    | '2.5'
    | '-2.5'
    | '3.5'
    | '-3.5'
    | (string & {})
  textStyles: string & {}
  transitionDuration:
    | 'ultra-fast'
    | 'faster'
    | 'fast'
    | 'normal'
    | 'slow'
    | 'slower'
    | 'ultra-slow'
    | (string & {})
  transitionEasing: 'ease-in' | 'ease-out' | 'ease-in-out' | (string & {})
  transitionProperty: 'common' | 'colors' | 'dimensions' | 'position' | 'background' | (string & {})
  zIndices:
    | 'yamcha'
    | 'kurillin'
    | 'nappa'
    | 'guldo'
    | 'jeice'
    | 'burter'
    | 'recoome'
    | 'ginyu'
    | 'zarbon'
    | 'dodoria'
    | 'freeza'
    | 'vegeta'
    | 'sonGoku'
    | 'beerus'
    | (string & {})
  components: {
    Indicator: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'solid' | 'subtle' | (string & {})
    }
    Accordion: { sizes: string & {}; variants: 'basic' | 'card' | 'unstyled' | (string & {}) }
    Alert: {
      sizes: string & {}
      variants: 'subtle' | 'solid' | 'left-accent' | 'top-accent' | (string & {})
    }
    Avatar: {
      sizes: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {})
      variants: string & {}
    }
    Badge: { sizes: string & {}; variants: 'solid' | 'subtle' | 'outline' | (string & {}) }
    Button: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'solid' | 'outline' | 'link' | 'ghost' | 'unstyled' | (string & {})
    }
    Calendar: {
      sizes: 'sm' | 'md' | 'lg' | 'full' | (string & {})
      variants: 'solid' | 'subtle' | 'unstyled' | (string & {})
    }
    Card: {
      sizes: 'sm' | 'md' | 'normal' | 'lg' | (string & {})
      variants: 'elevated' | 'outline' | 'solid' | 'subtle' | 'unstyled' | (string & {})
    }
    Carousel: { sizes: 'sm' | 'md' | 'lg' | 'xl' | (string & {}); variants: string & {} }
    Checkbox: { sizes: 'sm' | 'md' | 'lg' | (string & {}); variants: string & {} }
    CloseButton: { sizes: 'sm' | 'md' | 'lg' | (string & {}); variants: string & {} }
    DatePicker: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    Dialog: {
      sizes:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | 'full'
        | (string & {})
      variants: string & {}
    }
    Divider: { sizes: string & {}; variants: 'solid' | 'dashed' | 'dotted' | (string & {}) }
    Drawer: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | (string & {})
      variants: string & {}
    }
    Dropzone: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'full' | (string & {})
      variants: 'solid' | 'dashed' | 'unstyled' | (string & {})
    }
    Heading: {
      sizes: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | (string & {})
      variants: string & {}
    }
    Input: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    Mark: { sizes: string & {}; variants: 'solid' | 'subtle' | 'outline' | (string & {}) }
    Modal: {
      sizes:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | 'full'
        | (string & {})
      variants: string & {}
    }
    NumberInput: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    Pagination: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'solid' | 'outline' | 'ghost' | 'unstyled' | (string & {})
    }
    PinInput: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    Progress: { sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {}); variants: string & {} }
    Radio: { sizes: 'sm' | 'md' | 'lg' | (string & {}); variants: string & {} }
    Reorder: {
      sizes: 'sm' | 'md' | 'normal' | 'lg' | (string & {})
      variants: 'elevated' | 'outline' | 'unstyled' | (string & {})
    }
    SegmentedControl: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'basic' | 'rounded' | (string & {})
    }
    Select: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    Slider: { sizes: 'sm' | 'md' | 'lg' | (string & {}); variants: string & {} }
    Stepper: { sizes: 'sm' | 'md' | 'lg' | (string & {}); variants: string & {} }
    Switch: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'thick' | 'thin' | (string & {})
    }
    Table: {
      sizes: 'sm' | 'md' | 'lg' | 'xl' | (string & {})
      variants: 'simple' | 'striped' | 'unstyled' | (string & {})
    }
    Tabs: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants:
        | 'line'
        | 'sticky'
        | 'sticky-subtle'
        | 'sticky-solid'
        | 'rounded'
        | 'rounded-subtle'
        | 'rounded-solid'
        | 'unstyled'
        | (string & {})
    }
    Tag: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'solid' | 'subtle' | 'outline' | (string & {})
    }
    Textarea: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
  }
}
