import { InfoIcon, WarningIcon, CheckIcon } from '@yamada-ui/icon'
import { Loading } from '@yamada-ui/loading'
import { render, a11y, screen } from '@yamada-ui/test'
import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  getStatusColorScheme,
  getStatusIcon,
} from '../src'

test('passes a11y test', async () => {
  await a11y(
    <Alert>
      <AlertIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>,
  )
})

test("should have role='alert'", () => {
  render(
    <Alert>
      <AlertIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>,
  )

  expect(screen.getByRole('alert')).toBeInTheDocument()
})

describe('getStatusColorScheme', () => {
  test('info', () => {
    expect(getStatusColorScheme('info')).toBe('blue')
  })

  test('success', () => {
    expect(getStatusColorScheme('success')).toBe('green')
  })

  test('warning', () => {
    expect(getStatusColorScheme('warning')).toBe('orange')
  })

  test('error', () => {
    expect(getStatusColorScheme('error')).toBe('red')
  })

  test('loading', () => {
    expect(getStatusColorScheme('loading')).toBe('blue')
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
