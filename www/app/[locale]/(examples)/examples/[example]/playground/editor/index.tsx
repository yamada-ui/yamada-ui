"use client"
import type { GridProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Grid } from "@yamada-ui/react"
import { memo, useCallback, useRef } from "react"
import { Menu } from "./menu"
import { Prompt } from "./prompt"

export type EditorMode = "complete" | "edit" | "insert"

export const DEFAULT_EDITOR_MODE: EditorMode = "complete"

export interface EditorProps extends GridProps {}

export const Editor: FC<EditorProps> = memo(({ ...rest }) => {
  const onChangeModeRef = useRef<(mode: EditorMode) => void>(() => void 0)

  const onChangeMode = useCallback(
    (mode: EditorMode) => onChangeModeRef.current(mode),
    [],
  )

  return (
    <Grid
      gap="lg"
      p={{ base: "lg", sm: "md" }}
      templateColumns={{ base: "1fr auto", lg: "1fr" }}
      {...rest}
    >
      <Prompt onChangeModeRef={onChangeModeRef} />

      <Menu
        gridRow={{ base: "inherit", lg: "1 / 2" }}
        onChangeMode={onChangeMode}
      />
    </Grid>
  )
})

Editor.displayName = "Editor"
