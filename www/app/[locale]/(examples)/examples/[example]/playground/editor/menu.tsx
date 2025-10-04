import type { StackProps } from "@yamada-ui/react"
import type { EditorMode } from "."
import { VStack } from "@yamada-ui/react"
import { memo } from "react"
import { DEFAULT_EDITOR_MODE } from "."
import { Model } from "./model"
import { Parameter } from "./parameter"
import { SwitchMode } from "./switch-mode"

export interface MenuProps extends StackProps {
  onChangeMode: (mode: EditorMode) => void
}

export const Menu = memo<MenuProps>(({ onChangeMode, ...rest }) => {
  return (
    <VStack {...rest}>
      <SwitchMode
        defaultValue={DEFAULT_EDITOR_MODE}
        onChange={(value) => onChangeMode(value as EditorMode)}
      />

      <Model />

      <Parameter
        defaultValue={0.56}
        description={`Controls randomness: lowering results in less random completions.\n\nAs the temperature approaches zero, the model will become deterministic and repetitive.`}
        label="Temperature"
        max={1}
        min={0}
        step={0.01}
      />
      <Parameter
        defaultValue={256}
        description={`The maximum number of tokens to generate.\n\nRequests can use up to 2,048 or 4,000 tokens, shared between prompt and completion.\n\nThe exact limit varies by model.`}
        label="Maximum Length"
        max={4000}
        min={0}
      />
      <Parameter
        defaultValue={0.9}
        description="Control diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered."
        label="Top P"
        max={1}
        min={0}
        step={0.1}
      />
    </VStack>
  )
})

Menu.displayName = "Menu"
