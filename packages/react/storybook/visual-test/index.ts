export {
  VISUAL_TEST_FIXED_NOW,
  VISUAL_TEST_LOCALE,
  VISUAL_TEST_ONLINE,
  VISUAL_TEST_RANDOM_SEED,
  VISUAL_TEST_TIME_ZONE,
  VISUAL_TEST_USER_AGENT,
  VISUAL_TEST_UUID_PREFIX,
  VISUAL_TEST_VIEWPORT_WIDTH,
} from "./constants"
export { setupFixedDateForVisualTest } from "./date"
export {
  getVisualTestLocale,
  getVisualTestOnline,
  getVisualTestTimeZone,
  getVisualTestUserAgent,
  isVisualTest,
} from "./detection"
export { setupVisualTestRuntimeContract } from "./runtime"
export type { SetupVisualTestRuntimeOptions, VisualTestGlobal } from "./types"
