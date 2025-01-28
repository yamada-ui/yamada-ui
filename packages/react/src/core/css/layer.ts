import type { Dict } from "../../utils"
import type { Layers, LayerScheme } from "../theme"
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

  const getAtRule = (name: LayerScheme) => `@layer ${layers[name].name}`

  const wrap = (name: LayerScheme, style?: (() => Dict) | Dict) => {
    const atRule = getAtRule(name)

    return { [atRule]: runIfFunc(style) }
  }

  return {
    atRule,
    getAtRule,
    names,
    wrap,
  }
}

export type CreateLayersReturn = ReturnType<typeof createLayers>
