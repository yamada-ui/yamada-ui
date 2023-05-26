import { render } from '@yamada-ui/test'
import React from 'react'
import { Card } from '../src'

describe('<Card />', () => {
  test('renders card correctly', () => {
    render(<Card>Card</Card>)
  })

  test('renders all the allowed shorthand style props', () => {
    const { getByTestId } = render(
      <Card data-testid='card' direction='row' justify='start' align='start'>
        Flex
      </Card>,
    )

    expect(getByTestId('card')).toHaveStyle({
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'start',
    })
  })
})
