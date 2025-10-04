import type { GridProps } from "@yamada-ui/react"
import type { MutableRefObject } from "react"
import type { EditorMode } from "."
import { assignRef, Field, Grid, Textarea } from "@yamada-ui/react"
import { memo, useState } from "react"
import { DEFAULT_EDITOR_MODE } from "."

export interface PromptProps extends GridProps {
  onChangeModeRef: MutableRefObject<(mode: EditorMode) => void>
}

export const Prompt = memo<PromptProps>(({ onChangeModeRef, ...rest }) => {
  const [mode, setMode] = useState<EditorMode>(DEFAULT_EDITOR_MODE)
  const isEdit = mode === "edit"
  const isInsert = mode === "insert"
  const placeholder = isEdit
    ? "We is going to the market."
    : isInsert
      ? "We're writing to [inset]. Congrats from OpenAI!"
      : "Write a tagline for an ice cream shop."

  assignRef(onChangeModeRef, setMode)

  return (
    <Grid
      gap={{ base: isEdit ? "md" : "lg", sm: "md" }}
      templateColumns={
        isEdit
          ? { base: "repeat(2, 1fr)", xl: "1fr" }
          : isInsert
            ? { base: "repeat(2, 1fr)", xl: "1fr" }
            : { base: "1fr" }
      }
      templateRows="repeat(3, auto-fit)"
      {...rest}
    >
      <Field.Root label={isEdit ? "Input" : undefined}>
        <Textarea
          minH={{ base: isEdit ? "2xl" : "4xl", xl: "md" }}
          placeholder={placeholder}
          resize="vertical"
        />
      </Field.Root>

      {isEdit ? (
        <Field.Root label="Instructions">
          <Textarea placeholder="Fix the grammar." resize="vertical" />
        </Field.Root>
      ) : null}

      {isInsert || isEdit ? (
        <Textarea
          bg={["blackAlpha.50", "whiteAlpha.50"]}
          gridColumn={isEdit ? { base: "2 / 3", xl: "inherit" } : undefined}
          gridRow={isEdit ? { base: "1 / 3", xl: "inherit" } : undefined}
          minH={{
            base: isEdit ? "calc(100% - var(--ui-spaces-lg))" : "4xl",
            xl: "md",
          }}
          mt={{ base: isEdit ? "lg" : undefined, xl: "sm" }}
          readOnly
        />
      ) : null}
    </Grid>
  )
})

Prompt.displayName = "Prompt"
