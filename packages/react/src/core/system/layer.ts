import type { Dict } from "../../utils"
import type { LayerScheme, LayersConfig } from "./index.types"
import { runIfFn } from "../../utils"
import { DEFAULT_LAYERS } from "../constant"

export interface Layers {
  atRule: string | undefined
  getAtRule?: (name: LayerScheme) => string
  names: string[]
  wrap: (name: LayerScheme, style?: (() => Dict) | Dict) => Dict
}

export const defaultLayers: Layers = {
  atRule: undefined,
  names: [] as string[],
  wrap: function (_: LayerScheme, style?: (() => Dict) | Dict) {
    return runIfFn(style) ?? {}
  },
}

export function createLayers(
  layers: false | LayersConfig = DEFAULT_LAYERS,
): Layers {
  if (!layers) return defaultLayers

  const names = Object.values(layers)
    .sort((a, b) => a.order - b.order)
    .map((layer) => layer.name)
  const atRule = `@layer ${names.join(", ")};`

  const getAtRule = (name: LayerScheme) => `@layer ${layers[name].name}`

  const wrap = (name: LayerScheme, style?: (() => Dict) | Dict) => {
    const atRule = getAtRule(name)

    return { [atRule]: runIfFn(style) }
  }

  return {
    atRule,
    getAtRule,
    names,
    wrap,
  }
}
