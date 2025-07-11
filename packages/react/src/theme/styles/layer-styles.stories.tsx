import type { CSSModifierObject } from "../../core"
import { defaultTheme } from ".."
import { Center } from "../../components/center"
import { UIProvider } from "../../providers/ui-provider"
import { merge } from "../../utils"

export default {
  title: "Theme / Layer Style",
}

export const Basic = () => {
  const layerStyles: CSSModifierObject = {
    masterRoshi: {
      bg: "#FFF",
      border: "6px solid #000",
      boxSize: "4xs",
      color: "#000",
      fontFamily: "serif",
      fontSize: "8xl",
      fontWeight: "bold",
      m: "md",
      position: "relative",
      rounded: "full",
      _after: {
        bg: "#FF7F0B",
        boxSize: "3xs",
        left: "50%",
        position: "absolute",
        rounded: "md",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
      },
    },
  }

  const theme = merge(defaultTheme, { styles: { layerStyles } })

  return (
    <UIProvider theme={theme}>
      <Center layerStyle="masterRoshi">亀</Center>
    </UIProvider>
  )
}
