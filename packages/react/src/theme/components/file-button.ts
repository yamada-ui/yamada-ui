import type { ComponentStyle } from "../../core"
import { mergeStyle } from "../../core"
import { Button } from "./button"

export const FileButton: ComponentStyle<"FileButton"> = mergeStyle(Button)()
