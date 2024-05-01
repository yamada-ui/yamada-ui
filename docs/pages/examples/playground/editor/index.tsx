import { Grid } from "@yamada-ui/react"
import type { GridProps } from "@yamada-ui/react"
import { memo, useCallback, useRef } from "react"
import type { FC } from "react"
import { Menu } from "./menu"
import { Prompt } from "./prompt"

export type EditorMode = "complete" | "insert" | "edit"

export const DEFAULT_EDITOR_MODE: EditorMode = "complete"

export type EditorProps = GridProps & {}

export const Editor: FC<EditorProps> = memo(({ ...rest }) => {
  const onChangeModeRef = useRef<(mode: EditorMode) => void>(() => void 0)

  const onChangeMode = useCallback(
    (mode: EditorMode) => onChangeModeRef.current(mode),
    [],
  )

  return (
    <Grid
      templateColumns={{ base: "1fr auto", lg: "1fr" }}
      gap="lg"
      p={{ base: "lg", sm: "md" }}
      {...rest}
    >
      <Prompt onChangeModeRef={onChangeModeRef} />

      <Menu
        onChangeMode={onChangeMode}
        gridRow={{ base: "inherit", lg: "1 / 2" }}
      />
    </Grid>
  )
})

Editor.displayName = "Editor"
