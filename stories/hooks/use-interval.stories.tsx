import { Box, useInterval } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Hooks / useInterval',
}

export const basic = () => {
  const [state, setState] = useState<number>(1)

  useInterval(() => setState((prev) => prev + 1), 3000)

  return <Box>Current state: {state}</Box>
}
