"use client"

import type { PlaygroundFile, SavedSet } from "../types"
import { useCallback, useEffect, useState } from "react"
import { decodeCode, DEFAULT_CODE } from "../utils"

const DB_NAME = "yamada-playground"
const DB_VERSION = 1
const FILES_STORE = "files"
const SAVED_SETS_STORE = "savedSets"
const ACTIVE_INDEX_KEY = "activeIndex"

interface PlaygroundData {
  activeIndex: number
  files: PlaygroundFile[]
  savedSets: SavedSet[]
}

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

export function usePlaygroundFiles() {
  const [files, setFiles] = useState<PlaygroundFile[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [savedSets, setSavedSets] = useState<SavedSet[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const initializeFromURL = useCallback((searchParams: URLSearchParams) => {
    const rawFiles = decodeCode(searchParams.get("files"))
    if (rawFiles) {
      try {
        const parsed = JSON.parse(rawFiles) as {
          files: PlaygroundFile[]
          activeIndex?: number
        }
        if (Array.isArray(parsed.files) && parsed.files.length) {
          setFiles(parsed.files)
          if (
            typeof parsed.activeIndex === "number" &&
            parsed.activeIndex >= 0
          ) {
            setActiveIndex(parsed.activeIndex)
          }
          return true
        }
      } catch {}
    }

    const single = decodeCode(searchParams.get("code"))
    const initialCode = single || DEFAULT_CODE
    const initialFiles = [
      { id: "file-1", name: "index.tsx", code: initialCode },
    ]
    setFiles(initialFiles)
    setActiveIndex(0)
    return false
  }, [])

  const loadFromDB = useCallback(async () => {
    try {
      const [dbFiles, dbActiveIndex, dbSavedSets] = await Promise.all([
        getFromDB<PlaygroundFile[]>(FILES_STORE),
        getFromDB<{ value: number }>("metadata", ACTIVE_INDEX_KEY),
        getFromDB<SavedSet[]>(SAVED_SETS_STORE),
      ])

      if (dbFiles && Array.isArray(dbFiles) && dbFiles.length > 0) {
        setFiles(dbFiles)
      }

      if (dbActiveIndex && typeof dbActiveIndex.value === "number") {
        setActiveIndex(dbActiveIndex.value)
      }

      if (dbSavedSets && Array.isArray(dbSavedSets)) {
        setSavedSets(dbSavedSets)
      }
    } catch (error) {
      console.error("Failed to load from IndexedDB:", error)
    }
  }, [])

  const saveFilesToDB = useCallback(async (newFiles: PlaygroundFile[]) => {
    try {
      await saveToDB(FILES_STORE, newFiles)
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

  const updateFiles = useCallback(
    (newFiles: PlaygroundFile[]) => {
      setFiles(newFiles)
      saveFilesToDB(newFiles)
    },
    [saveFilesToDB],
  )

  const updateActiveIndex = useCallback(
    (index: number) => {
      setActiveIndex(index)
      saveActiveIndexToDB(index)
    },
    [saveActiveIndexToDB],
  )

  const updateSavedSets = useCallback(
    (sets: SavedSet[]) => {
      setSavedSets(sets)
      saveSavedSetsToDB(sets)
    },
    [saveSavedSetsToDB],
  )

  const deleteSavedSet = useCallback(async (setId: string) => {
    try {
      await deleteFromDB(SAVED_SETS_STORE, setId)
      setSavedSets((prev) => prev.filter((s) => s.id !== setId))
    } catch (error) {
      console.error("Failed to delete saved set from IndexedDB:", error)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && "indexedDB" in window) {
      loadFromDB().finally(() => setIsLoaded(true))
    } else {
      setIsLoaded(true)
    }
  }, [loadFromDB])

  return {
    activeIndex,
    deleteSavedSet,
    files,
    initializeFromURL,
    isLoaded,
    savedSets,
    setActiveIndex: updateActiveIndex,
    setFiles: updateFiles,
    setSavedSets: updateSavedSets,
  }
}
