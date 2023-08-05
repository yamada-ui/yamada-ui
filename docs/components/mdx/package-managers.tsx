import { Box, Tab, Tabs } from '@yamada-ui/react'
import { Component } from 'mdx/types'
import { themes } from 'prism-react-renderer'
import { useState } from 'react'
import { Highlight } from './code-block'
import { CopyButton } from 'components/forms'
import { useConfigs } from 'contexts/configs-context'

type PackageManagerName = 'npm' | 'yarn' | 'pnpm'

export type PackageManagersProps = Partial<Record<PackageManagerName, string>>

export const PackageManagers: Component<PackageManagersProps> = (props) => {
  const { colorScheme } = useConfigs()
  const [name, setName] = useState<string>(Object.keys(props)[0] ?? 'pnpm')
  const language = 'bash'
  const code = props[name]
  const theme = themes.nightOwl

  return (
    <>
      <Box position='relative'>
        <Box
          rounded='md'
          my='6'
          bg={['zinc.800', 'zinc.900']}
          sx={{ '& > div:last-child': { py: 'normal' } }}
          overflow='hidden'
        >
          <Tabs bg={['whiteAlpha.200', 'whiteAlpha.100']}>
            {Object.keys(props).map((name) => (
              <Tab
                key={name}
                fontSize='xs'
                color={['whiteAlpha.600', 'whiteAlpha.500']}
                _selected={{
                  color: ['white', 'white'],
                  borderColor: [`${colorScheme}.400`, `${colorScheme}.300`],
                }}
                onClick={() => setName(name)}
                _focusVisible={{ bg: 'whiteAlpha.50' }}
              >
                {name}
              </Tab>
            ))}
          </Tabs>

          <Highlight {...{ code, language, theme }} />
        </Box>

        <CopyButton value={props[name]} position='absolute' top={'3.3rem'} right='4' />
      </Box>
    </>
  )
}
