import { getStatusColorStyle } from '../src'

describe('getStatusColorStyle', () => {
  test('info', () => {
    expect(getStatusColorStyle('info')).toBe('blue')
  })

  test('success', () => {
    expect(getStatusColorStyle('success')).toBe('green')
  })

  test('warning', () => {
    expect(getStatusColorStyle('warning')).toBe('orange')
  })

  test('error', () => {
    expect(getStatusColorStyle('error')).toBe('red')
  })

  test('loading', () => {
    expect(getStatusColorStyle('loading')).toBe('blue')
  })
})
