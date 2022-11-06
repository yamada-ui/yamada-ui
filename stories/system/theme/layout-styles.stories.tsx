import { UIProvider, extendTheme, LayerStyles, Center } from '@yamada-ui/react'

export default {
  title: 'System / Theme / Layer Style',
}

export const useLayerStyle = () => {
  const layerStyles: LayerStyles = {
    masterRoshi: {
      position: 'relative',
      m: 'md',
      boxSize: '4xs',
      border: '6px solid #000',
      rounded: 'full',
      bg: '#FFF',
      fontFamily: 'serif',
      color: '#000',
      fontSize: '8xl',
      fontWeight: 'bold',
      _after: {
        content: "''",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        rounded: 'md',
        bg: '#FF7F0B',
        boxSize: '3xs',
      },
    },
  }

  const theme = extendTheme({
    styles: { layerStyles },
  })

  return (
    <UIProvider theme={theme}>
      <Center layerStyle='masterRoshi'>亀</Center>
    </UIProvider>
  )
}
