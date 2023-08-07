import { Box, Tab, Tabs, isArray } from '@yamada-ui/react'
import { Component } from 'mdx/types'
import { themes } from 'prism-react-renderer'
import { useState } from 'react'
import { Highlight } from './code-block'
import { CopyButton } from 'components/forms'
import { useConfigs } from 'contexts/configs-context'

const PACKAGE_COMMANDS = {
  pnpm: 'pnpm add',
  npm: 'npm installl',
  yarn: 'yarn add',
}

export type PackageManagersProps = { packageName: string | string[] }

export const PackageManagers: Component<PackageManagersProps> = ({ packageName }) => {
  const { colorScheme } = useConfigs()
  const [selectedPackageName, setSelectedPackageName] = useState<string>('pnpm')
  const language = 'bash'
  const code =
    PACKAGE_COMMANDS[selectedPackageName] +
    ' ' +
    (isArray(packageName) ? packageName.join(' ') : packageName)
  const theme = themes.nightOwl

  return (
    <Box position='relative'>
      <Box
        rounded='md'
        my='8'
        bg={['zinc.800', 'zinc.900']}
        sx={{ '& > div:last-child': { py: '6' } }}
        overflow='hidden'
      >
        <Tabs bg={['whiteAlpha.200', 'whiteAlpha.100']}>
          {Object.keys(PACKAGE_COMMANDS).map((name) => (
            <Tab
              key={name}
              fontSize='xs'
              color={['whiteAlpha.600', 'whiteAlpha.500']}
              _selected={{
                color: ['white', 'white'],
                borderColor: [`${colorScheme}.400`, `${colorScheme}.300`],
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
