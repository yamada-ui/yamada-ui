import type { UserEvent } from "@testing-library/user-event"
import { runIfFunc } from "@yamada-ui/utils"
import { sleep } from "./utils"

const DEFAULT_COUNT = 11

export interface PointerCoords {
  x?: number
  y?: number
  clientX?: number
  clientY?: number
  offsetX?: number
  offsetY?: number
  pageX?: number
  pageY?: number
  screenX?: number
  screenY?: number
}

export interface PointerInput {
  target?: HTMLElement
  keys?: string
  coords?: PointerCoords
  node?: Node
  offset?: number
}

export interface DragOptions {
  target?: HTMLElement
  count?: number
  interval?: number
  keys?: string | ((index: number) => string | undefined)
  coords?: PointerCoords | ((index: number) => PointerCoords | undefined)
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
    count = DEFAULT_COUNT,
    interval = 50,
    keys: _keys = defaultKeys,
    coords: _coords = defaultCoords,
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
