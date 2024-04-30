import { VStack } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Model } from "./model"
import { Parameter } from "./parameter"
import { SwitchMode } from "./switch-mode"
import { DEFAULT_EDITOR_MODE, type EditorMode } from "."

export type MenuProps = StackProps & {
  onChangeMode: (mode: EditorMode) => void
}

export const Menu: FC<MenuProps> = memo(({ onChangeMode, ...rest }) => {
  return (
    <VStack {...rest}>
      <SwitchMode defaultValue={DEFAULT_EDITOR_MODE} onChange={onChangeMode} />

      <Model />

      <Parameter
        label="Temperature"
        description={`Controls randomness: lowering results in less random completions.\n\nAs the temperature approaches zero, the model will become deterministic and repetitive.`}
        defaultValue={0.56}
        min={0}
        max={1}
        step={0.01}
      />
      <Parameter
        label="Maximum Length"
        description={`The maximum number of tokens to generate.\n\nRequests can use up to 2,048 or 4,000 tokens, shared between prompt and completion.\n\nThe exact limit varies by model.`}
        defaultValue={256}
        min={0}
        max={4000}
      />
      <Parameter
        label="Top P"
        description="Control diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered."
        defaultValue={0.9}
        min={0}
        max={1}
        step={0.1}
      />
    </VStack>
  )
})

Menu.displayName = "Menu"
