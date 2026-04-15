import type { VisualTestGlobal } from "./types"
import { faker } from "@faker-js/faker"
import {
  VISUAL_TEST_FIXED_NOW,
  VISUAL_TEST_RANDOM_SEED,
  VISUAL_TEST_UUID_PREFIX,
} from "./constants"

const createSeededRandom = (seed: number) => {
  let state = seed >>> 0

  return () => {
    state += 0x6d2b79f5

    let t = Math.imul(state ^ (state >>> 15), state | 1)

    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const setupRandomForVisualTest = (globalObject: VisualTestGlobal) => {
  const math = globalObject.Math ?? Math
  const random = createSeededRandom(VISUAL_TEST_RANDOM_SEED)

  try {
    Object.defineProperty(math, "random", {
      configurable: true,
      value: random,
    })
  } catch {}
}

const setupRandomUUIDForVisualTest = (globalObject: VisualTestGlobal) => {
  const cryptoObject = globalObject.crypto

  if (!cryptoObject?.randomUUID) return

  let count = 0

  try {
    Object.defineProperty(cryptoObject, "randomUUID", {
      configurable: true,
      value: () => {
        count += 1

        return `${VISUAL_TEST_UUID_PREFIX}${count.toString(16).padStart(12, "0")}`
      },
    })
  } catch {}
}

const setupFakerForVisualTest = () => {
  faker.seed(VISUAL_TEST_RANDOM_SEED)

  try {
    ;(
      faker as { setDefaultRefDate?: (date: string) => void }
    ).setDefaultRefDate?.(new Date(VISUAL_TEST_FIXED_NOW).toISOString())
  } catch {}
}

export const setupRandomSourcesForVisualTest = (
  globalObject: VisualTestGlobal,
) => {
  setupRandomForVisualTest(globalObject)
  setupRandomUUIDForVisualTest(globalObject)
  setupFakerForVisualTest()
}
