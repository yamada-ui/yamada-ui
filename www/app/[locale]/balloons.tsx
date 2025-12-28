"use client"

import { Box, Text } from "@yamada-ui/react"
import { DEFAULT_COLOR_SCHEMES } from "@yamada-ui/utils"
import { BalloonIcon } from "@/components"

export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function Balloons() {
  return Array.from({ length: 101 }).map((_, index) => {
    const color =
      DEFAULT_COLOR_SCHEMES[
        Math.floor(Math.random() * DEFAULT_COLOR_SCHEMES.length)
      ]

    return (
      <Box
        key={index}
        css={{
          "--balloon-size": "sizes.40",
          "--x-25": `-${randomInt(45, 55)}%`,
          "--x-50": `-${randomInt(45, 55)}%`,
          "--x-75": `-${randomInt(45, 55)}%`,
        }}
        animationDelay={`${randomFloat(0, 18)}s`}
        animationDuration={{
          base: `${randomFloat(6, 12)}s`,
          md: `${randomFloat(4, 8)}s`,
        }}
        animationFillMode="forwards"
        animationIterationCount="1"
        animationTimingFunction="linear"
        bottom="0"
        display={{ base: "block", md: index % 2 === 0 ? "none" : "block" }}
        left={`${index}%`}
        pointerEvents="none"
        position="fixed"
        transform="translateX(-50%) translateY(100%)"
        zIndex="beerus"
        _keyframes={{
          "0%": { transform: "translateX(-50%) translateY(100%)" },
          "25%": {
            transform: `translateX({x-25}) translateY(calc(25dvh * -1 + 50%))`,
          },
          "50%": {
            transform: `translateX({x-50}) translateY(calc(50dvh * -1))`,
          },
          "75%": {
            transform: `translateX({x-75}) translateY(calc(75dvh * -1 - 50%))`,
          },
          "100%": {
            transform: "translateX(-50%) translateY(calc(100dvh * -1 - 100%))",
          },
        }}
      >
        <BalloonIcon color={`${color}/70`} w="{balloon-size}" />

        <Text
          as="span"
          alignItems="center"
          color={`${color}.fg`}
          display="inline-flex"
          fontFamily="mono"
          fontSize="md"
          fontWeight="bold"
          left="50%"
          position="absolute"
          textAlign="center"
          top="20%"
          transform="translateX(-50%)"
        >
          <Text as="span" fontSize="4xl" me="0.5">
            2
          </Text>
          nd
        </Text>
      </Box>
    )
  })
}
