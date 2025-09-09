"use client"

import type { FC, PropsWithChildren, RefObject } from "react"
import type { PlaygroundFile, SavedSet } from "./types"
import { assignRef } from "@yamada-ui/react"
import { usePathname, useSearchParams } from "next/navigation"
import {
  createContext,
  createRef,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { decodeCode, DEFAULT_CODE, encodeCode } from "./utils"

interface PlaygroundState {
  activeIndex: number
  files: PlaygroundFile[]
  savedSets: SavedSet[]
}

interface PlaygroundMethods {
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
   * Delete a saved set
   */
  deleteSavedSet: (setId: string) => void
  /**
   * Get current active index
   */
  getActiveIndex: () => number
  /**
   * Get current active file code
   */
  getCurrentCode: () => string
  /**
   * Get current files
   */
  getFiles: () => PlaygroundFile[]
  /**
   * Get current share URL
   */
  getShareUrl: () => string
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
   * Save current state as a new set
   */
  saveSet: (name: string) => void
  /**
   * Update current active file code without triggering state update
   */
  updateCurrentCode: (code: string) => void
  /**
   * Update an existing saved set
   */
  updateSet: (set: SavedSet) => void
}

interface PlaygroundContext {
  /**
   * The playground methods.
   */
  playground: PlaygroundMethods
  /**
   * The current playground state.
   */
  state: PlaygroundState
}

const PlaygroundContext = createContext({} as PlaygroundContext)

const createController = () => ({
  addFile: createRef<PlaygroundMethods["addFile"]>(),
  changeActiveIndex: createRef<PlaygroundMethods["changeActiveIndex"]>(),
  changeCode: createRef<PlaygroundMethods["changeCode"]>(),
  deleteSavedSet: createRef<PlaygroundMethods["deleteSavedSet"]>(),
  getActiveIndex: createRef<PlaygroundMethods["getActiveIndex"]>(),
  getCurrentCode: createRef<PlaygroundMethods["getCurrentCode"]>(),
  getFiles: createRef<PlaygroundMethods["getFiles"]>(),
  getShareUrl: createRef<PlaygroundMethods["getShareUrl"]>(),
  loadSet: createRef<PlaygroundMethods["loadSet"]>(),
  removeFile: createRef<PlaygroundMethods["removeFile"]>(),
  reset: createRef<PlaygroundMethods["reset"]>(),
  saveSet: createRef<PlaygroundMethods["saveSet"]>(),
  updateCurrentCode: createRef<PlaygroundMethods["updateCurrentCode"]>(),
  updateSet: createRef<PlaygroundMethods["updateSet"]>(),
})

type Controller = ReturnType<typeof createController>

const createMethods = (refs: RefObject<Controller>): PlaygroundMethods => ({
  addFile: () => refs.current.addFile.current?.(),
  changeActiveIndex: (index) => refs.current.changeActiveIndex.current?.(index),
  changeCode: (code) => refs.current.changeCode.current?.(code),
  deleteSavedSet: (setId) => refs.current.deleteSavedSet.current?.(setId),
  getActiveIndex: () => refs.current.getActiveIndex.current?.() ?? 0,
  getCurrentCode: () => refs.current.getCurrentCode.current?.() ?? "",
  getFiles: () => refs.current.getFiles.current?.() ?? [],
  getShareUrl: () => refs.current.getShareUrl.current?.() ?? "",
  loadSet: (set) => refs.current.loadSet.current?.(set),
  removeFile: (id) => refs.current.removeFile.current?.(id),
  reset: () => refs.current.reset.current?.(),
  saveSet: (name) => refs.current.saveSet.current?.(name),
  updateCurrentCode: (code) => refs.current.updateCurrentCode.current?.(code),
  updateSet: (set) => refs.current.updateSet.current?.(set),
})

const DB_NAME = "yamada-playground"
const DB_VERSION = 1
const FILES_STORE = "files"
const SAVED_SETS_STORE = "savedSets"
const ACTIVE_INDEX_KEY = "activeIndex"

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result

      if (!db.objectStoreNames.contains(FILES_STORE)) {
        db.createObjectStore(FILES_STORE, { keyPath: "id" })
      }

      if (!db.objectStoreNames.contains(SAVED_SETS_STORE)) {
        db.createObjectStore(SAVED_SETS_STORE, { keyPath: "id" })
      }

      if (!db.objectStoreNames.contains("metadata")) {
        db.createObjectStore("metadata", { keyPath: "key" })
      }
    }
  })
}

async function saveToDB<T>(storeName: string, data: T): Promise<void> {
  const db = await openDB()
  const transaction = db.transaction(storeName, "readwrite")
  const store = transaction.objectStore(storeName)

  if (Array.isArray(data)) {
    for (const item of data) {
      store.put(item)
    }
  } else {
    store.put(data)
  }

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
}

async function getFromDB<T>(
  storeName: string,
  key?: string,
): Promise<null | T> {
  const db = await openDB()
  const transaction = db.transaction(storeName, "readonly")
  const store = transaction.objectStore(storeName)

  if (key) {
    const request = store.get(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null)
      request.onerror = () => reject(request.error)
    })
  } else {
    const request = store.getAll()
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve((request.result as T) || null)
      request.onerror = () => reject(request.error)
    })
  }
}

async function deleteFromDB(storeName: string, key: string): Promise<void> {
  const db = await openDB()
  const transaction = db.transaction(storeName, "readwrite")
  const store = transaction.objectStore(storeName)
  store.delete(key)

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
}

export interface PlaygroundProviderProps extends PropsWithChildren {}

export const PlaygroundProvider: FC<PlaygroundProviderProps> = ({
  children,
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const controller = useRef(createController())

  const [state, setState] = useState<PlaygroundState>({
    activeIndex: 0,
    files: [
      {
        id: "file-1",
        name: "index.tsx",
        code: DEFAULT_CODE,
      },
    ],
    savedSets: [],
  })

  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize from URL parameters
  useEffect(() => {
    if (isInitialized) return

    const filesParam = searchParams.get("files")
    if (filesParam) {
      try {
        const decoded = decodeCode(filesParam)
        if (decoded) {
          const data = JSON.parse(decoded)
          if (data.files?.length > 0) {
            setState((prev) => ({
              ...prev,
              activeIndex: Math.max(
                0,
                Math.min(data.activeIndex || 0, data.files.length - 1),
              ),
              files: data.files,
            }))
          }
        }
      } catch {
        // Ignore invalid URL data
      }
    }

    setIsInitialized(true)
  }, [searchParams, isInitialized])

  // Load from IndexedDB
  useEffect(() => {
    if (
      !isInitialized ||
      typeof window === "undefined" ||
      !("indexedDB" in window)
    )
      return

    const loadFromDB = async () => {
      try {
        const [dbFiles, dbActiveIndex, dbSavedSets] = await Promise.all([
          getFromDB<PlaygroundFile[]>(FILES_STORE),
          getFromDB<{ value: number }>("metadata", ACTIVE_INDEX_KEY),
          getFromDB<SavedSet[]>(SAVED_SETS_STORE),
        ])

        setState((prev) => ({
          ...prev,
          ...(dbActiveIndex && typeof dbActiveIndex.value === "number"
            ? { activeIndex: dbActiveIndex.value }
            : {}),
          ...(dbFiles && Array.isArray(dbFiles) && dbFiles.length > 0
            ? { files: dbFiles }
            : {}),
          ...(dbSavedSets && Array.isArray(dbSavedSets)
            ? { savedSets: dbSavedSets }
            : {}),
        }))
      } catch (error) {
        console.error("Failed to load from IndexedDB:", error)
      }
    }

    loadFromDB()
  }, [isInitialized])

  const saveFilesToDB = useCallback(async (files: PlaygroundFile[]) => {
    try {
      await saveToDB(FILES_STORE, files)
    } catch (error) {
      console.error("Failed to save files to IndexedDB:", error)
    }
  }, [])

  const saveActiveIndexToDB = useCallback(async (index: number) => {
    try {
      await saveToDB("metadata", { key: ACTIVE_INDEX_KEY, value: index })
    } catch (error) {
      console.error("Failed to save active index to IndexedDB:", error)
    }
  }, [])

  const saveSavedSetsToDB = useCallback(async (sets: SavedSet[]) => {
    try {
      await saveToDB(SAVED_SETS_STORE, sets)
    } catch (error) {
      console.error("Failed to save saved sets to IndexedDB:", error)
    }
  }, [])

  const addFile = useCallback(() => {
    const id = `file-${Date.now()}`
    const newFile: PlaygroundFile = {
      id,
      name: `file${state.files.length + 1}.tsx`,
      code: DEFAULT_CODE,
    }
    const nextFiles = [...state.files, newFile]
    setState((prev) => ({
      ...prev,
      activeIndex: nextFiles.length - 1,
      files: nextFiles,
    }))
    saveFilesToDB(nextFiles)
  }, [state.files, saveFilesToDB])

  const removeFile = useCallback(
    (id: string) => {
      const removeIndex = state.files.findIndex((file) => file.id === id)
      const nextFiles = state.files.filter((file) => file.id !== id)

      let nextActiveIndex = state.activeIndex
      if (removeIndex < state.activeIndex) {
        nextActiveIndex = state.activeIndex - 1
      } else if (removeIndex === state.activeIndex) {
        nextActiveIndex = Math.min(state.activeIndex, nextFiles.length - 1)
      }

      setState((prev) => ({
        ...prev,
        activeIndex: nextActiveIndex,
        files: nextFiles,
      }))
      saveFilesToDB(nextFiles)
      saveActiveIndexToDB(nextActiveIndex)
    },
    [state.files, state.activeIndex, saveFilesToDB, saveActiveIndexToDB],
  )

  const changeActiveIndex = useCallback(
    (index: number) => {
      setState((prev) => ({ ...prev, activeIndex: index }))
      saveActiveIndexToDB(index)
    },
    [saveActiveIndexToDB],
  )

  const changeCode = useCallback(
    (code: string) => {
      const updatedFiles = [...state.files]
      const currentFile = updatedFiles[state.activeIndex]
      if (currentFile) {
        updatedFiles[state.activeIndex] = {
          ...currentFile,
          code,
        }
      }
      setState((prev) => ({ ...prev, files: updatedFiles }))
      saveFilesToDB(updatedFiles)
    },
    [state.files, state.activeIndex, saveFilesToDB],
  )

  const getCurrentCode = useCallback(() => {
    const currentFile = state.files[state.activeIndex]
    return currentFile?.code || ""
  }, [state.files, state.activeIndex])

  const updateCurrentCode = useCallback(
    (code: string) => {
      const updatedFiles = [...state.files]
      const currentFile = updatedFiles[state.activeIndex]
      if (currentFile) {
        updatedFiles[state.activeIndex] = {
          ...currentFile,
          code,
        }
        // Only save to DB, don't trigger state update to avoid re-renders
        saveFilesToDB(updatedFiles)
      }
    },
    [state.files, state.activeIndex, saveFilesToDB],
  )

  const reset = useCallback(() => {
    const defaultFiles = [
      {
        id: "file-1",
        name: "index.tsx",
        code: DEFAULT_CODE,
      },
    ]
    setState((prev) => ({
      ...prev,
      activeIndex: 0,
      files: defaultFiles,
    }))
    saveFilesToDB(defaultFiles)
    saveActiveIndexToDB(0)
  }, [saveFilesToDB, saveActiveIndexToDB])

  const saveSet = useCallback(
    (name: string) => {
      if (!name.trim()) return
      const id = `set-${Date.now()}`
      const newSet: SavedSet = {
        id,
        name: name.trim(),
        activeIndex: state.activeIndex,
        files: state.files,
      }
      const nextSavedSets = [newSet, ...state.savedSets]
      setState((prev) => ({ ...prev, savedSets: nextSavedSets }))
      saveSavedSetsToDB(nextSavedSets)
    },
    [state.activeIndex, state.files, state.savedSets, saveSavedSetsToDB],
  )

  const loadSet = useCallback(
    (set: SavedSet) => {
      setState((prev) => ({
        ...prev,
        activeIndex: Math.max(
          0,
          Math.min(set.activeIndex, set.files.length - 1),
        ),
        files: set.files,
      }))
      saveFilesToDB(set.files)
      saveActiveIndexToDB(
        Math.max(0, Math.min(set.activeIndex, set.files.length - 1)),
      )
    },
    [saveFilesToDB, saveActiveIndexToDB],
  )

  const updateSet = useCallback(
    (set: SavedSet) => {
      const updatedSets = state.savedSets.map((s) =>
        s.id === set.id ? set : s,
      )
      setState((prev) => ({ ...prev, savedSets: updatedSets }))
      saveSavedSetsToDB(updatedSets)
    },
    [state.savedSets, saveSavedSetsToDB],
  )

  const deleteSavedSet = useCallback(
    async (setId: string) => {
      try {
        await deleteFromDB(SAVED_SETS_STORE, setId)
        const nextSavedSets = state.savedSets.filter((s) => s.id !== setId)
        setState((prev) => ({ ...prev, savedSets: nextSavedSets }))
      } catch (error) {
        console.error("Failed to delete saved set from IndexedDB:", error)
      }
    },
    [state.savedSets],
  )

  const getShareUrl = useCallback(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    const payload = JSON.stringify({
      activeIndex: state.activeIndex,
      files: state.files,
    })
    params.set("files", encodeCode(payload))
    const relative = `${pathname}?${params.toString()}`
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    return origin ? new URL(relative, origin).toString() : relative
  }, [state.activeIndex, state.files, pathname, searchParams])

  const _methods = useMemo<PlaygroundMethods>(
    () => ({
      addFile,
      changeActiveIndex,
      changeCode,
      deleteSavedSet,
      getActiveIndex: () => state.activeIndex,
      getCurrentCode,
      getFiles: () => state.files,
      getShareUrl,
      loadSet,
      removeFile,
      reset,
      saveSet,
      updateCurrentCode,
      updateSet,
    }),
    [
      addFile,
      changeActiveIndex,
      changeCode,
      deleteSavedSet,
      state.activeIndex,
      state.files,
      getShareUrl,
      loadSet,
      removeFile,
      reset,
      getCurrentCode,
      updateCurrentCode,
      saveSet,
      updateSet,
    ],
  )

  assignRef(controller.current.addFile, addFile)
  assignRef(controller.current.changeActiveIndex, changeActiveIndex)
  assignRef(controller.current.changeCode, changeCode)
  assignRef(controller.current.deleteSavedSet, deleteSavedSet)
  assignRef(controller.current.getActiveIndex, () => state.activeIndex)
  assignRef(controller.current.getFiles, () => state.files)
  assignRef(controller.current.getShareUrl, getShareUrl)
  assignRef(controller.current.loadSet, loadSet)
  assignRef(controller.current.removeFile, removeFile)
  assignRef(controller.current.reset, reset)
  assignRef(controller.current.getCurrentCode, getCurrentCode)
  assignRef(controller.current.updateCurrentCode, updateCurrentCode)
  assignRef(controller.current.saveSet, saveSet)
  assignRef(controller.current.updateSet, updateSet)

  const value = useMemo(
    () => ({
      playground: createMethods(controller),
      state,
    }),
    [state],
  )

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  )
}

/**
 * `usePlayground` is a custom hook for controlling the playground.
 */
export const usePlayground = (): PlaygroundContext => {
  return use(PlaygroundContext)
}
