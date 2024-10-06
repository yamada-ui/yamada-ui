import type { BoxProps, StringLiteral } from "@yamada-ui/react"
import type { FC } from "react"
import { Box, isArray, isObject, Tab, Tabs } from "@yamada-ui/react"
import { CopyButton } from "components/forms"
import { themes } from "prism-react-renderer"
import { useState } from "react"
import { Highlight } from "./code-block"

type PackageMangerNames = "bun" | "npm" | "pnpm" | "yarn"

const PACKAGE_MANAGER_COMMANDS: { [_key in PackageMangerNames]: string } = {
  bun: "bun install",
  npm: "npm install",
  pnpm: "pnpm add",
  yarn: "yarn add",
}

const getCode = (
  selectedPackageName: PackageMangerNames & StringLiteral,
  packageNameOrCommand:
    | { [_key in PackageMangerNames]: string }
    | string
    | string[],
): string => {
  if (isObject(packageNameOrCommand) && !isArray(packageNameOrCommand)) {
    return packageNameOrCommand[selectedPackageName]
  } else {
    const command = PACKAGE_MANAGER_COMMANDS[selectedPackageName] + " "

    return (
      command +
      (isArray(packageNameOrCommand)
        ? packageNameOrCommand.join(" ")
        : packageNameOrCommand)
    )
  }
}

export interface PackageManagersProps extends BoxProps {
  packageNameOrCommand:
    | { [_key in PackageMangerNames]: string }
    | string
    | string[]
}

export const PackageManagers: FC<PackageManagersProps> = ({
  packageNameOrCommand,
  ...rest
}) => {
  const [selectedPackageName, setSelectedPackageName] =
    useState<PackageMangerNames>("pnpm")
  const language = "bash"
  const code = getCode(selectedPackageName, packageNameOrCommand)
  const theme = themes.nightOwl

  return (
    <Box my="6" position="relative" {...rest}>
      <Box
        sx={{ "& > div:last-child": { py: "6" } }}
        bg={["neutral.800", "neutral.900"]}
        overflow="hidden"
        rounded="md"
      >
        <Tabs bg={["whiteAlpha.200", "whiteAlpha.100"]}>
          {Object.keys(PACKAGE_MANAGER_COMMANDS).map((name) => (
            <Tab
              key={name}
              _focusVisible={{ bg: "whiteAlpha.50" }}
              _selected={{
                borderColor: [`primary.500`, `primary.400`],
                color: ["white", "white"],
              }}
              color={["whiteAlpha.700", "whiteAlpha.600"]}
              fontSize="xs"
              onClick={() => setSelectedPackageName(name as PackageMangerNames)}
            >
              {name}
            </Tab>
          ))}
        </Tabs>

        <Highlight {...{ code, language, theme }} />
      </Box>

      <CopyButton position="absolute" right="4" top="3.3rem" value={code} />
    </Box>
  )
}
