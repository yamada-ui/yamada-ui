import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Input } from "./input"

export const FileInput: ComponentMultiStyle<"FileInput"> =
  mergeMultiStyle(Input)()
