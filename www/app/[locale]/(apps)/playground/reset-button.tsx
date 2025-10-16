"use client"

import {
  Button,
  Modal,
  RefreshCcwIcon,
  Tooltip,
  useDisclosure,
  useNotice,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback } from "react"
import { usePlaygroundCode } from "./use-playground-code"

export function ResetButton() {
  const t = useTranslations("playground")
  const [, , resetCode] = usePlaygroundCode()
  const notice = useNotice({ duration: 2000 })
  const { open, onClose, onOpen } = useDisclosure()

  const handleConfirmReset = useCallback(() => {
    resetCode()
    notice({ status: "success", title: t("reset.success") })
    onClose()
  }, [resetCode, notice, t, onClose])

  return (
    <>
      <Tooltip content={t("reset.tooltip")}>
        <Button
          size="sm"
          variant="subtle"
          aria-label={t("reset.tooltip")}
          onClick={onOpen}
        >
          <RefreshCcwIcon />
        </Button>
      </Tooltip>

      <Modal.Root open={open} onClose={onClose}>
        <Modal.Content>
          <Modal.Header>{t("reset.confirmation.title")}</Modal.Header>
          <Modal.Body>{t("reset.confirmation.message")}</Modal.Body>
          <Modal.Footer>
            <Button variant="ghost" onClick={onClose}>
              {t("reset.confirmation.cancel")}
            </Button>
            <Button colorScheme="primary" onClick={handleConfirmReset}>
              {t("reset.confirmation.confirm")}
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}
