import { FC, useState } from 'react'
import { Box } from 'components'
import { animation } from 'functions'
import { useScheme, useBreakpoint } from 'hooks'

const Index: FC = () => {
  const [state, setState] = useState<boolean>(true)
  const { scheme } = useScheme()
  const breakpoint = useBreakpoint()

  const fadeIn = animation({
    keyframes: {
      '0%': {
        bg: 'primary',
      },

      '100%': {
        bg: 'secondary',
      },
    },
    duration: '0.4s',
    timingFunction: 'ease-out',
    fillMode: 'forwards',
  })

  const fadeOut = animation({
    keyframes: {
      '0%': {
        bg: 'secondary',
      },

      '100%': {
        bg: 'primary',
      },
    },
    duration: '0.4s',
    timingFunction: 'ease-out',
    fillMode: 'forwards',
  })

  return (
    <>
      <Box display='flex' justifyContent='stretch' p='lg' gap='lg'>
        <Box
          w='full'
          p='lg'
          rounded='lg'
          bg='warning'
          cursor='pointer'
          animation={[state ? fadeIn : null, !state ? fadeOut : null]}
          onClick={() => setState((prev) => !prev)}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, voluptas eum. Saepe neque
          aliquam facere quaerat, molestias non vitae blanditiis, cum beatae veniam deserunt
          dolorum. Quaerat, totam magni. Atque, unde?
        </Box>
      </Box>
    </>
  )
}

export default Index
