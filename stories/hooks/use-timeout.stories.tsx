import { Box, useTimeout } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Hooks / useTimeout',
}

export const basic = () => {
  const [state, setState] = useState<number>(1)

  useTimeout(() => setState((prev) => prev + 1), 3000)

  return <Box>Current state: {state}</Box>
}
