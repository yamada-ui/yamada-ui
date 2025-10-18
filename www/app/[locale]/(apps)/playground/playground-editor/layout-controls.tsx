"use client"

import type { IconButtonProps } from "@yamada-ui/react"
import {
  ButtonGroup,
  MonitorIcon,
  RatioIcon,
  RectangleVerticalIcon,
  ScanIcon,
  SmartphoneIcon,
  TabletIcon,
  Tooltip,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback } from "react"
import { usePlaygroundLayout } from "../use-playground-layout"

const VIEWPORT_SIZES = {
  auto: { x: 800, y: 600 },
  desktop: { landscape: { x: 1366, y: 768 }, portrait: { x: 768, y: 1024 } },
  mobile: { landscape: { x: 667, y: 375 }, portrait: { x: 375, y: 667 } },
  responsive: { x: 800, y: 600 },
  tablet: { landscape: { x: 1024, y: 768 }, portrait: { x: 768, y: 1024 } },
}

type Mode = keyof typeof VIEWPORT_SIZES

export interface LayoutControlsProps extends ButtonGroup.RootProps {}

export function LayoutControls({ ...rest }: LayoutControlsProps) {
  const t = useTranslations("playground")
  const { size, isAuto, orientation, resetToAuto, setSize, toggleSize } =
    usePlaygroundLayout()

  // 現在のサイズがどのプリセットに対応するかを判定
  const getCurrentMode = useCallback<() => Mode | null>(() => {
    if (size === "auto") return null
    if (
      size.x === VIEWPORT_SIZES.mobile.portrait.x &&
      size.y === VIEWPORT_SIZES.mobile.portrait.y
    )
      return "mobile"
    if (
      size.x === VIEWPORT_SIZES.tablet.portrait.x &&
      size.y === VIEWPORT_SIZES.tablet.portrait.y
    )
      return "tablet"
    if (
      size.x === VIEWPORT_SIZES.desktop.portrait.x &&
      size.y === VIEWPORT_SIZES.desktop.portrait.y
    )
      return "desktop"
    return "responsive"
  }, [size])

  const currentMode = getCurrentMode()

  const handleModeClick = useCallback(
    (mode: Mode) => {
      if (mode === "responsive") {
        const size = VIEWPORT_SIZES[mode]
        setSize(size.x, size.y)
        return
      }
      if (mode === "auto") {
        resetToAuto()
        return
      }
      const modeData = VIEWPORT_SIZES[mode]
      const targetSize =
        orientation === "portrait" ? modeData.portrait : modeData.landscape
      setSize(targetSize.x, targetSize.y)
    },
    [orientation, setSize, resetToAuto],
  )

  const getIconButtonProps = useCallback(
    (mode: Mode): IconButtonProps => ({
      variant: currentMode === mode ? "solid" : "subtle",
      onClick: () => handleModeClick(mode),
    }),
    [currentMode, handleModeClick],
  )

  return (
    <ButtonGroup.Root size="sm" variant="subtle" attached {...rest}>
      <Tooltip content={t("layout.mobile")}>
        <ButtonGroup.IconItem
          aria-label={t("layout.mobile")}
          {...getIconButtonProps("mobile")}
          icon={<SmartphoneIcon />}
        />
      </Tooltip>

      <Tooltip content={t("layout.tablet")}>
        <ButtonGroup.IconItem
          aria-label={t("layout.tablet")}
          {...getIconButtonProps("tablet")}
          icon={<TabletIcon />}
        />
      </Tooltip>

      <Tooltip content={t("layout.desktop")}>
        <ButtonGroup.IconItem
          aria-label={t("layout.desktop")}
          {...getIconButtonProps("desktop")}
          icon={<MonitorIcon />}
        />
      </Tooltip>

      <Tooltip content={t("layout.responsive")}>
        <ButtonGroup.IconItem
          aria-label={t("layout.responsive")}
          {...getIconButtonProps("responsive")}
          icon={<RatioIcon />}
        />
      </Tooltip>

      <Tooltip content={t("layout.auto")}>
        <ButtonGroup.IconItem
          aria-label={t("layout.auto")}
          {...getIconButtonProps("auto")}
          icon={<ScanIcon />}
        />
      </Tooltip>

      <Tooltip
        content={
          orientation === "portrait"
            ? t("layout.landscape")
            : t("layout.portrait")
        }
      >
        <ButtonGroup.IconItem
          aria-label={t("layout.toggleOrientation")}
          disabled={isAuto}
          icon={
            <RectangleVerticalIcon
              rotate={orientation === "portrait" ? "0deg" : "90deg"}
              transform={orientation === "portrait" ? "none" : "scale(-1, 1)"}
            />
          }
          onClick={toggleSize}
        />
      </Tooltip>
    </ButtonGroup.Root>
  )
}
