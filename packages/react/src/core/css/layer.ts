import type { Dict } from "../../utils"
import type { Layers, LayerScheme } from "../theme.types"
import { runIfFunc } from "../../utils"
import { DEFAULT_LAYERS } from "../constant"

export function createLayers(layers: false | Layers = DEFAULT_LAYERS) {
  if (!layers)
    return {
      atRule: undefined,
      names: [] as string[],
      wrap: function (_: LayerScheme, style?: (() => Dict) | Dict) {
        return runIfFunc(style)
      },
    }

  const names = Object.values(layers)
    .sort((a, b) => a.order - b.order)
    .map((layer) => layer.name)
  const atRule = `@layer ${names.join(", ")};`

  return {
    atRule,
    names,
    wrap: function (name: LayerScheme, style?: (() => Dict) | Dict) {
      const atRule = `@layer ${layers[name].name}`

      return { [atRule]: runIfFunc(style) }
    },
  }
}

export type CreateLayersReturn = ReturnType<typeof createLayers>
