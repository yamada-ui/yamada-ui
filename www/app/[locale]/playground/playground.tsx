"use client"

import type { RefObject } from "react"
import type { PlaygroundFile, SavedSet } from "./types"
import { Grid, GridItem } from "@yamada-ui/react"
import { createRef, useCallback, useMemo, useRef } from "react"
import {
  PlaygroundHeader,
  PlaygroundHistory,
  PlaygroundTabs,
} from "./components"

interface PlaygroundTabsMethods {
  /**
   * Add a new file to the playground
   */
  addFile: () => void
  /**
   * Change the active file index
   */
  changeActiveIndex: (index: number) => void
  /**
   * Change the code of the current active file
   */
  changeCode: (code: string) => void
  /**
   * Get current active index
   */
  getActiveIndex: () => number
  /**
   * Get current files
   */
  getFiles: () => PlaygroundFile[]
  /**
   * Load a saved set
   */
  loadSet: (set: SavedSet) => void
  /**
   * Remove a file from the playground
   */
  removeFile: (id: string) => void
  /**
   * Reset to default state
   */
  reset: () => void
  /**
   * Switch editor mode between both, editor, and preview
   */
  switchEditorMode: () => void
}

interface PlaygroundHeaderMethods {
  /**
   * Get the current share URL
   */
  getShareUrl: () => string
  /**
   * Reset the playground
   */
  reset: () => void
  /**
   * Save current state
   */
  save: (name: string) => void
}

interface PlaygroundHistoryMethods {
  /**
   * Delete a saved set
   */
  deleteSet: (setId: string) => void
  /**
   * Load a saved set
   */
  loadSet: (set: SavedSet) => void
  /**
   * Save a set
   */
  saveSet: (set: SavedSet) => void
  /**
   * Show the history modal
   */
  showHistory: () => void
}

const createController = () => ({
  addFile: createRef<PlaygroundTabsMethods["addFile"]>(),
  changeActiveIndex: createRef<PlaygroundTabsMethods["changeActiveIndex"]>(),
  changeCode: createRef<PlaygroundTabsMethods["changeCode"]>(),
  deleteSet: createRef<PlaygroundHistoryMethods["deleteSet"]>(),
  getActiveIndex: createRef<PlaygroundTabsMethods["getActiveIndex"]>(),
  getFiles: createRef<PlaygroundTabsMethods["getFiles"]>(),
  getShareUrl: createRef<PlaygroundHeaderMethods["getShareUrl"]>(),
  loadSet: createRef<PlaygroundTabsMethods["loadSet"]>(),
  loadSetHistory: createRef<PlaygroundHistoryMethods["loadSet"]>(),
  removeFile: createRef<PlaygroundTabsMethods["removeFile"]>(),
  reset: createRef<PlaygroundTabsMethods["reset"]>(),
  save: createRef<PlaygroundHeaderMethods["save"]>(),
  saveSet: createRef<PlaygroundHistoryMethods["saveSet"]>(),
  showHistory: createRef<PlaygroundHistoryMethods["showHistory"]>(),
  switchEditorMode: createRef<PlaygroundTabsMethods["switchEditorMode"]>(),
})

type Controller = ReturnType<typeof createController>

const createMethods = (refs: RefObject<Controller>) => ({
  header: {
    getShareUrl: () => {
      const method = refs.current.getShareUrl.current
      return method ? method() : ""
    },
    reset: () => {
      const method = refs.current.reset.current
      if (method) method()
    },
    save: (name: string) => {
      const method = refs.current.save.current
      if (method) method(name)
    },
  },
  history: {
    deleteSet: (setId: string) => {
      const method = refs.current.deleteSet.current
      if (method) method(setId)
    },
    loadSet: (set: SavedSet) => {
      const method = refs.current.loadSetHistory.current
      if (method) method(set)
    },
    saveSet: (set: SavedSet) => {
      const method = refs.current.saveSet.current
      if (method) method(set)
    },
    showHistory: () => {
      const method = refs.current.showHistory.current
      if (method) method()
    },
  },
  tabs: {
    addFile: () => {
      const method = refs.current.addFile.current
      if (method) method()
    },
    changeActiveIndex: (index: number) => {
      const method = refs.current.changeActiveIndex.current
      if (method) method(index)
    },
    changeCode: (code: string) => {
      const method = refs.current.changeCode.current
      if (method) method(code)
    },
    getActiveIndex: () => {
      const method = refs.current.getActiveIndex.current
      return method ? method() : 0
    },
    getFiles: () => {
      const method = refs.current.getFiles.current
      return method ? method() : []
    },
    loadSet: (set: SavedSet) => {
      const method = refs.current.loadSet.current
      if (method) method(set)
    },
    removeFile: (id: string) => {
      const method = refs.current.removeFile.current
      if (method) method(id)
    },
    reset: () => {
      const method = refs.current.reset.current
      if (method) method()
    },
    switchEditorMode: () => {
      const method = refs.current.switchEditorMode.current
      if (method) method()
    },
  },
})

export function Playground() {
  const controller = useRef(createController())

  const methods = useMemo(() => createMethods(controller), [])

  const handleHeaderReset = useCallback(() => {
    methods.tabs.reset()
  }, [methods.tabs])

  const handleHeaderSave = useCallback(
    (name: string) => {
      const files = methods.tabs.getFiles()
      const activeIndex = methods.tabs.getActiveIndex()
      // Create and save the set via history component
      const newSet: SavedSet = {
        id: `set-${Date.now()}`,
        name,
        activeIndex,
        files,
      }
      methods.history.saveSet(newSet)
    },
    [methods.tabs, methods.history],
  )

  const handleHistoryLoadSet = useCallback(
    (set: SavedSet) => {
      methods.tabs.loadSet(set)
    },
    [methods.tabs],
  )

  const getTabsData = useCallback(
    () => ({
      activeIndex: methods.tabs.getActiveIndex(),
      files: methods.tabs.getFiles(),
    }),
    [methods.tabs],
  )

  return (
    <Grid flex={1} gap="lg" maxW="8xl" templateRows="auto 1fr">
      <GridItem>
        <PlaygroundHeader
          ref={controller}
          getTabsData={getTabsData}
          onHistoryOpen={methods.history.showHistory}
          onReset={handleHeaderReset}
          onSave={handleHeaderSave}
        />
      </GridItem>
      <GridItem>
        <PlaygroundTabs ref={controller} />
      </GridItem>
      <GridItem>
        <PlaygroundHistory ref={controller} onLoadSet={handleHistoryLoadSet} />
      </GridItem>
    </Grid>
  )
}
