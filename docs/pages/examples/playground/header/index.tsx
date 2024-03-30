import { Button, HStack, Heading, Spacer, VStack } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo, useCallback, useRef } from "react"
import type { FC } from "react"
import { ControlButton } from "./control-button"
import { DeleteDialog } from "./delete-dialog"
import { FilterModal } from "./filter-modal"
import { Preset } from "./preset"
import { SaveModal } from "./save-modal"
import { ShareButton } from "./share-button"
import { ViewCodeModal } from "./view-code-modal"

export type ModalType = "save" | "viewCode" | "filter" | "delete"

export type HeaderProps = StackProps & {}

export const Header: FC<HeaderProps> = memo(({ ...rest }) => {
  const onOpenSaveRef = useRef<() => void>(() => void 0)
  const onOpenViewCodeRef = useRef<() => void>(() => void 0)
  const onOpenFilterRef = useRef<() => void>(() => void 0)
  const onOpenDeleteRef = useRef<() => void>(() => void 0)

  const onOpen = useCallback((type: ModalType) => {
    switch (type) {
      case "save":
        onOpenSaveRef.current()
        break

      case "viewCode":
        onOpenViewCodeRef.current()
        break

      case "filter":
        onOpenFilterRef.current()
        break

      case "delete":
        onOpenDeleteRef.current()
        break

      default:
        break
    }
  }, [])

  return (
    <>
      <VStack
        borderBottomWidth="1px"
        px={{ base: "lg", sm: "md" }}
        py="md"
        {...rest}
      >
        <HStack>
          <Heading as="h2" size="lg">
            Playground
          </Heading>

          <Spacer />

          <HStack gap="sm">
            <Preset display={{ base: undefined, md: "none" }} />

            <Button
              minW="fit-content"
              display={{ base: undefined, lg: "none" }}
              onClick={() => onOpen("save")}
            >
              Save
            </Button>

            <Button
              minW="fit-content"
              display={{ base: undefined, lg: "none" }}
              onClick={() => onOpen("viewCode")}
            >
              View code
            </Button>

            <ShareButton />

            <ControlButton onOpen={onOpen} />
          </HStack>
        </HStack>

        <Preset display={{ base: "none", md: "block" }} />
      </VStack>

      <SaveModal onOpenRef={onOpenSaveRef} />
      <ViewCodeModal onOpenRef={onOpenViewCodeRef} />
      <FilterModal onOpenRef={onOpenFilterRef} />
      <DeleteDialog onOpenRef={onOpenDeleteRef} />
    </>
  )
})

Header.displayName = "Header"
