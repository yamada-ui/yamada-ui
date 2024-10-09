import type { UserEvent } from "@testing-library/user-event"
import { runIfFunc } from "@yamada-ui/utils"
import { sleep } from "./utils"

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

export const drag =
  (user: UserEvent) =>
  async ({
    target,
    coords: _coords = defaultCoords,
    count = DEFAULT_COUNT,
    interval = 50,
    keys: _keys = defaultKeys,
  }: DragOptions) => {
    const timeline = [...Array(count).keys()]

    for await (const i of timeline) {
      const isStart = i === 0
      const keys = runIfFunc(_keys, i)
      const coords = runIfFunc(_coords, i)

      const input: PointerInput = {}

      if (isStart) input.target = target
      if (keys) input.keys = keys
      if (coords) input.coords = coords

      await user.pointer(input)

      await sleep(interval)
    }
  }
