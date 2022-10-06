import { useContext } from 'react'
import { SchemeContext } from 'providers'

export const useScheme = () => {
  const context = useContext(SchemeContext)

  if (context === undefined) throw new Error('useScheme must be used within a SchemeProvider')

  return context
}
