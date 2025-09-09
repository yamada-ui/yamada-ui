"use client"

import type { SavedSet } from "../types"
import {
  Button,
  HistoryIcon,
  HStack,
  IconButton,
  Modal,
  Reorder,
  Text,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { useCallback } from "react"
import { usePlayground } from "../playground-provider"

export function PlaygroundHistory() {
  const { playground, state } = usePlayground()
  const { open: isOpen, onClose, onOpen } = useDisclosure()

  const handleDeleteSet = useCallback(
    (setId: string) => {
      playground.deleteSavedSet(setId)
    },
    [playground],
  )

  const handleLoadSet = useCallback(
    (set: SavedSet) => {
      playground.loadSet(set)
      onClose()
    },
    [playground, onClose],
  )

  const handleUpdateSet = useCallback(
    (set: SavedSet) => {
      const updatedSet: SavedSet = {
        ...set,
        activeIndex: state.activeIndex,
        files: state.files,
      }
      playground.updateSet(updatedSet)
    },
    [playground, state.activeIndex, state.files],
  )

  const handleReorder = useCallback((_newOrder: SavedSet[]) => {
    // Note: This would require a new method in the provider to update saved sets order
    // For now, we'll keep the existing order
  }, [])

  return (
    <>
      <IconButton
        size="sm"
        variant="surface"
        aria-label="Show saved sets"
        icon={<HistoryIcon />}
        onClick={onOpen}
      />
      <Modal.Root size="xl" open={isOpen} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Content h="xl" w="xl">
          <Modal.Header>
            <Text fontSize="lg" fontWeight="semibold">
              Saved Sets
            </Text>
          </Modal.Header>
          <Modal.Body>
            {state.savedSets.length === 0 ? (
              <Text color="fg.muted" fontSize="sm">
                No saved sets
              </Text>
            ) : (
              <Reorder.Root
                gap="sm"
                items={state.savedSets.map((set) => ({ value: set }))}
                w="full"
                onReorder={handleReorder}
              >
                {state.savedSets.map((set: SavedSet) => (
                  <Reorder.Item key={set.id} value={set}>
                    <HStack
                      justifyContent="space-between"
                      rounded="md"
                      w="full"
                    >
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
                        <Button size="sm" onClick={() => handleLoadSet(set)}>
                          Load
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleUpdateSet(set)}
                        >
                          Update
                        </Button>
                        <Button
                          colorScheme="danger"
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteSet(set.id)}
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
    </>
  )
}
