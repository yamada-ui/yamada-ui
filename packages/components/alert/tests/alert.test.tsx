import { InfoIcon, WarningIcon, CheckIcon } from '@yamada-ui/icon'
import { Loading } from '@yamada-ui/loading'
import { getStatusColorStyle, getStatusIcon } from '../src'

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

describe('getStatusIcon', () => {
  test('info', () => {
    expect(getStatusIcon('info')).toBe(InfoIcon)
  })

  test('success', () => {
    expect(getStatusIcon('success')).toBe(CheckIcon)
  })

  test('warning', () => {
    expect(getStatusIcon('warning')).toBe(WarningIcon)
  })

  test('error', () => {
    expect(getStatusIcon('error')).toBe(WarningIcon)
  })

  test('loading', () => {
    expect(getStatusIcon('loading')).toBe(Loading)
  })
})
