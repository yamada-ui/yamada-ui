import type { CSSModifierObject, CSSSlotObject } from "../css"
import type { ComponentSlotStyle } from "./index.types"
import type { ComponentStyle } from "./index.types"

export function pickStyle(
  target: ComponentSlotStyle,
  targetKey: string,
  withProps = true,
): ComponentStyle {
  const result = {} as ComponentStyle

  Object.entries(target).forEach(([key, value]) => {
    switch (key) {
      case "base":
        result[key] = value[targetKey]

        break

      case "variants":
      case "sizes":
        result[key] = Object.entries(
          value as CSSModifierObject<CSSSlotObject>,
        ).reduce<CSSModifierObject>((prev, [key, value]) => {
          if (value[targetKey]) {
            prev[key] = value[targetKey]
          }

          return prev
        }, {})

        break

      case "defaultProps":
        if (withProps) result[key] = value

        break

      default:
        break
    }
  })

  return result
}
