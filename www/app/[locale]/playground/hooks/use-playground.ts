"use client"

import type { PlaygroundFile, SavedSet } from "../types"
import { useWindowEvent } from "@yamada-ui/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo } from "react"
import { DEFAULT_CODE, encodeCode } from "../utils"
import { usePlaygroundFiles } from "./use-playground-files"

export function usePlayground() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const {
    activeIndex,
    deleteSavedSet,
    files,
    initializeFromURL,
    isLoaded,
    savedSets,
    setActiveIndex,
    setFiles,
    setSavedSets,
  } = usePlaygroundFiles()

  useEffect(() => {
    if (isLoaded) {
      initializeFromURL(searchParams)
    }
  }, [isLoaded, searchParams, initializeFromURL])

  const shareUrl = useMemo(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    const payload = JSON.stringify({ activeIndex, files })
    params.set("files", encodeCode(payload))
    const relative = `${pathname}?${params.toString()}`
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    return origin ? new URL(relative, origin).toString() : relative
  }, [files, activeIndex, pathname, searchParams])

  useWindowEvent(
    "keydown",
    useCallback(
      (ev) => {
        if (ev.code === "KeyS" && (ev.ctrlKey || ev.metaKey)) {
          ev.preventDefault()
          const params = new URLSearchParams(Array.from(searchParams.entries()))
          const payload = JSON.stringify({ activeIndex, files })
          params.set("files", encodeCode(payload))
          const href = `${pathname}?${params.toString()}`
          router.replace(href, { scroll: false })
        }
      },
      [searchParams, activeIndex, files, pathname, router],
    ),
  )

  const onAddFile = useCallback(() => {
    const id = `file-${Date.now()}`
    const newFile: PlaygroundFile = {
      id,
      name: `file${files.length + 1}.tsx`,
      code: DEFAULT_CODE,
    }
    const nextFiles = [...files, newFile]
    setFiles(nextFiles)
    setActiveIndex(nextFiles.length - 1)
  }, [files, setFiles, setActiveIndex])

  const onRemoveFile = useCallback(
    (id: string) => {
      const removeIndex = files.findIndex(
        (file: PlaygroundFile) => file.id === id,
      )
      const nextFiles = files.filter((file: PlaygroundFile) => file.id !== id)

      if (removeIndex < activeIndex) {
        setActiveIndex(activeIndex - 1)
      } else if (removeIndex === activeIndex) {
        setActiveIndex(Math.min(activeIndex, nextFiles.length - 1))
      }

      setFiles(nextFiles)
    },
    [files, activeIndex, setFiles, setActiveIndex],
  )

  const onCodeChange = useCallback(
    (next: string) => {
      const copy = [...files]
      const currentFile = copy[activeIndex]
      if (currentFile) {
        copy[activeIndex] = { ...currentFile, code: next }
      }
      setFiles(copy)
    },
    [files, activeIndex, setFiles],
  )

  const handleSave = useCallback(
    (name: string) => {
      if (!name.trim()) return
      const id = `set-${Date.now()}`
      const next: SavedSet = {
        id,
        name: name.trim(),
        activeIndex,
        files,
      }
      setSavedSets([next, ...(savedSets || [])])
    },
    [activeIndex, files, setSavedSets, savedSets],
  )

  const handleReset = useCallback(() => {
    setFiles([
      {
        id: "file-1",
        name: "index.tsx",
        code: DEFAULT_CODE,
      },
    ])
    setActiveIndex(0)
  }, [setFiles, setActiveIndex])

  const handleLoadSet = useCallback(
    (set: SavedSet) => {
      setFiles(set.files)
      setActiveIndex(
        Math.max(0, Math.min(set.activeIndex, set.files.length - 1)),
      )
    },
    [setFiles, setActiveIndex],
  )

  const handleDeleteSet = useCallback(
    (setId: string) => {
      deleteSavedSet(setId)
    },
    [deleteSavedSet],
  )

  return {
    activeIndex,
    files,
    savedSets,
    shareUrl,
    onActiveIndexChange: setActiveIndex,
    onAddFile,
    onCodeChange,
    onDeleteSet: handleDeleteSet,
    onLoadSet: handleLoadSet,
    onRemoveFile,
    onReset: handleReset,
    onSave: handleSave,
  }
}
