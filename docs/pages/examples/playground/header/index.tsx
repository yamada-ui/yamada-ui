import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Button, Heading, HStack, Spacer, VStack } from "@yamada-ui/react"
import { memo, useCallback, useRef } from "react"
import { ControlButton } from "./control-button"
import { DeleteDialog } from "./delete-dialog"
import { FilterModal } from "./filter-modal"
import { Preset } from "./preset"
import { SaveModal } from "./save-modal"
import { ShareButton } from "./share-button"
import { ViewCodeModal } from "./view-code-modal"

export type ModalType = "delete" | "filter" | "save" | "viewCode"

export interface HeaderProps extends StackProps {}

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
          <Heading as="h2" size="normal">
            Playground
          </Heading>

          <Spacer />

          <HStack gap="sm">
            <Preset display={{ base: undefined, md: "none" }} />

            <Button
              display={{ base: undefined, lg: "none" }}
              minW="fit-content"
              onClick={() => onOpen("save")}
            >
              Save
            </Button>

            <Button
              display={{ base: undefined, lg: "none" }}
              minW="fit-content"
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
