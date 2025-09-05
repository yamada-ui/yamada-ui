"use client"

import type { RefObject } from "react"
import type { SavedSet } from "../types"
import {
  assignRef,
  Button,
  HStack,
  Modal,
  Reorder,
  Text,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { forwardRef, useCallback, useMemo } from "react"
import { usePlaygroundFiles } from "../hooks/use-playground-files"

interface PlaygroundHistoryController {
  deleteSet: RefObject<((setId: string) => void) | null>
  loadSetHistory: RefObject<((set: SavedSet) => void) | null>
  saveSet: RefObject<((set: SavedSet) => void) | null>
  showHistory: RefObject<(() => void) | null>
}

interface PlaygroundHistoryProps {
  ref: RefObject<PlaygroundHistoryController>
  onLoadSet: (set: SavedSet) => void
}

export const PlaygroundHistory = forwardRef<
  PlaygroundHistoryController,
  PlaygroundHistoryProps
>(function PlaygroundHistory({ onLoadSet }, ref) {
  const { open: isOpen, onClose, onOpen } = useDisclosure()

  const { deleteSavedSet, savedSets, setSavedSets } = usePlaygroundFiles()

  const showHistory = useCallback(() => {
    onOpen()
  }, [onOpen])

  const deleteSet = useCallback(
    (setId: string) => {
      deleteSavedSet(setId)
    },
    [deleteSavedSet],
  )

  const loadSet = useCallback(
    (set: SavedSet) => {
      onLoadSet(set)
      onClose()
    },
    [onLoadSet, onClose],
  )

  const saveSet = useCallback(
    (set: SavedSet) => {
      // Add to saved sets if not already there
      if (!savedSets.find((s) => s.id === set.id)) {
        setSavedSets([set, ...savedSets])
      }
    },
    [savedSets, setSavedSets],
  )

  const handleReorder = useCallback(
    (newOrder: SavedSet[]) => {
      setSavedSets(newOrder)
    },
    [setSavedSets],
  )

  const methods = useMemo(
    () => ({
      deleteSet,
      loadSet,
      saveSet,
      showHistory,
    }),
    [deleteSet, loadSet, saveSet, showHistory],
  )

  // Assign refs
  if (ref && "current" in ref && ref.current) {
    assignRef(ref.current.showHistory, methods.showHistory)
    assignRef(ref.current.deleteSet, methods.deleteSet)
    assignRef(ref.current.loadSetHistory, methods.loadSet)
    assignRef(ref.current.saveSet, methods.saveSet)
  }

  return (
    <Modal.Root size="xl" open={isOpen} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content h="xl" w="xl">
        <Modal.Header>
          <Text fontSize="lg" fontWeight="semibold">
            Saved Sets
          </Text>
        </Modal.Header>
        <Modal.Body>
          {savedSets.length === 0 ? (
            <Text color="fg.muted" fontSize="sm">
              No saved sets
            </Text>
          ) : (
            <Reorder.Root
              gap="sm"
              items={savedSets}
              w="full"
              onReorder={handleReorder}
            >
              {savedSets.map((set) => (
                <Reorder.Item key={set.id} value={set}>
                  <HStack justifyContent="space-between" rounded="md" w="full">
                    <HStack flex={1} gap="sm">
                      <Reorder.Trigger
                        color="fg.muted"
                        cursor="grab"
                        _hover={{ color: "fg" }}
                        _active={{ cursor: "grabbing" }}
                      />
                      <VStack alignItems="flex-start" flex={1} gap="xs">
                        <Text fontWeight="medium">{set.name}</Text>
                        <Text color="fg.muted" fontSize="sm">
                          {set.files.length} file
                          {set.files.length !== 1 ? "s" : ""} •{" "}
                          {set.files[0]?.name}
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack gap="xs">
                      <Button size="sm" onClick={() => loadSet(set)}>
                        Load
                      </Button>
                      <Button
                        colorScheme="danger"
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteSet(set.id)}
                      >
                        Delete
                      </Button>
                    </HStack>
                  </HStack>
                </Reorder.Item>
              ))}
            </Reorder.Root>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
})
