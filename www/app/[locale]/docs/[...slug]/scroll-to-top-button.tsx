"use client"

import { Text } from "@yamada-ui/react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export function ScrollToTopButton() {
  const t = useTranslations("component.toc")
  const { scrollY } = useScroll()
  const [y, setY] = useState(0)

  useMotionValueEvent(scrollY, "change", setY)

  return (
    <Text
      as="button"
      type="button"
      color={{ base: "fg.muted", _hover: "fg" }}
      cursor="pointer"
      fontSize="sm"
      opacity={y > 100 ? 1 : 0}
      rounded="l1"
      tabIndex={y > 100 ? 0 : -1}
      transitionDuration="moderate"
      transitionProperty="color, opacity"
      onClick={() => {
        window.scrollTo({ behavior: "smooth", top: 0 })
      }}
    >
      {t("scrollToTop")}
    </Text>
  )
}
