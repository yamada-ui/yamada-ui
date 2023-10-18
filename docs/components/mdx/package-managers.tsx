import { Box, BoxProps, Tab, Tabs, isArray, isObject } from '@yamada-ui/react'
import { themes } from 'prism-react-renderer'
import { FC, useState } from 'react'
import { Highlight } from './code-block'
import { CopyButton } from 'components/forms'

type PackageMangerNames = 'pnpm' | 'npm' | 'yarn'

const PACKAGE_MANAGER_COMMANDS: Record<PackageMangerNames, string> = {
  pnpm: 'pnpm add',
  npm: 'npm install',
  yarn: 'yarn add',
}

const getCode = (
  selectedPackageName: string,
  packageNameOrCommand: string | string[] | Record<PackageMangerNames, string>,
): string => {
  if (isObject(packageNameOrCommand) && !isArray(packageNameOrCommand)) {
    return packageNameOrCommand[selectedPackageName]
  } else {
    const command = PACKAGE_MANAGER_COMMANDS[selectedPackageName] + ' '

    return (
      command +
      (isArray(packageNameOrCommand) ? packageNameOrCommand.join(' ') : packageNameOrCommand)
    )
  }
}

export type PackageManagersProps = BoxProps & {
  packageNameOrCommand: string | string[] | Record<PackageMangerNames, string>
}

export const PackageManagers: FC<PackageManagersProps> = ({ packageNameOrCommand, ...rest }) => {
  const [selectedPackageName, setSelectedPackageName] = useState<string>('pnpm')
  const language = 'bash'
  const code = getCode(selectedPackageName, packageNameOrCommand)
  const theme = themes.nightOwl

  return (
    <Box position='relative' my='6' {...rest}>
      <Box
        rounded='md'
        bg={['zinc.800', 'zinc.900']}
        sx={{ '& > div:last-child': { py: '6' } }}
        overflow='hidden'
      >
        <Tabs bg={['whiteAlpha.200', 'whiteAlpha.100']}>
          {Object.keys(PACKAGE_MANAGER_COMMANDS).map((name) => (
            <Tab
              key={name}
              fontSize='xs'
              color={['whiteAlpha.700', 'whiteAlpha.600']}
              _selected={{
                color: ['white', 'white'],
                borderColor: [`primary.400`, `primary.300`],
              }}
              onClick={() => setSelectedPackageName(name)}
              _focusVisible={{ bg: 'whiteAlpha.50' }}
            >
              {name}
            </Tab>
          ))}
        </Tabs>

        <Highlight {...{ code, language, theme }} />
      </Box>

      <CopyButton value={code} position='absolute' top={'3.3rem'} right='4' />
    </Box>
  )
}
