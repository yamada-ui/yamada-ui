import type { UserEvent } from "@testing-library/user-event"
import { runIfFn } from "@yamada-ui/utils"
import { wait } from "./utils"

const DEFAULT_COUNT = 11

export interface PointerCoords {
  clientX?: number
  clientY?: number
  offsetX?: number
  offsetY?: number
  pageX?: number
  pageY?: number
  screenX?: number
  screenY?: number
  x?: number
  y?: number
}

export interface PointerInput {
  target?: HTMLElement
  coords?: PointerCoords
  keys?: string
  node?: Node
  offset?: number
}

export interface DragOptions {
  target?: HTMLElement
  coords?: ((index: number) => PointerCoords | undefined) | PointerCoords
  count?: number
  interval?: number
  keys?: ((index: number) => string | undefined) | string
}

const defaultKeys = (i: number) => {
  const isStart = i === 0
  const isEnd = i === DEFAULT_COUNT - 1

  if (isStart) {
    return "[MouseLeft>]"
  } else if (isEnd) {
    return "[/MouseLeft]"
  }

  return undefined
}

const defaultCoords = (i: number) => {
  const isEnd = i === DEFAULT_COUNT - 1

  return !isEnd ? { x: 0, y: i * 100 } : undefined
}

export function drag(user: UserEvent) {
  return async (options: DragOptions) => {
    const timeline = [...Array(options.count ?? DEFAULT_COUNT).keys()]

    options.keys ??= defaultKeys
    options.coords ??= defaultCoords

    for (const i of timeline) {
      const isStart = i === 0
      const keys = runIfFn(options.keys, i)
      const coords = runIfFn(options.coords, i)

      const input: PointerInput = {}

      if (isStart) input.target = options.target
      if (keys) input.keys = keys
      if (coords) input.coords = coords

      await user.pointer(input)

      await wait(options.interval ?? 50)
    }
  }
}
