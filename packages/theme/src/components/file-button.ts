import type { ComponentStyle } from "@yamada-ui/core"
import { mergeStyle } from "@yamada-ui/core"
import { Button } from "./button"

export const FileButton: ComponentStyle<"FileButton"> = mergeStyle(Button)()
