import type {
  ButtonProps,
  Component,
  GridProps,
  IconProps,
  InputProps,
} from "@yamada-ui/react"
import type { ReactNode, RefObject } from "react"
import type { Priority, Status, View } from "./data"
import {
  assignRef,
  Button,
  CirclePlusIcon,
  For,
  Grid,
  HStack,
  Input,
  Menu,
  noop,
  Separator,
  Show,
  SlidersHorizontalIcon,
  Tag,
  Text,
  toTitleCase,
  useBoolean,
  XIcon,
} from "@yamada-ui/react"
import { memo, useCallback, useRef, useState } from "react"
import { PRIORITY, STATUS, VIEW } from "./data"

export interface FilterProps extends GridProps {
  priorityRef: RefObject<(value: Priority[]) => void>
  statusRef: RefObject<(value: Status[]) => void>
  titleRef: RefObject<(value: string) => void>
  viewRef: RefObject<(value: View[]) => void>
}

export const Filter = memo<FilterProps>(
  ({ priorityRef, statusRef, titleRef, viewRef, ...rest }) => {
    const hasTitleRef = useRef<(hasValue: boolean) => void>(noop)
    const hasStatusRef = useRef<(hasValue: boolean) => void>(noop)
    const hasPriorityRef = useRef<(hasValue: boolean) => void>(noop)
    const resetTitleRef = useRef<() => void>(noop)
    const resetStatusRef = useRef<() => void>(noop)
    const resetPriorityRef = useRef<() => void>(noop)

    return (
      <Grid
        gap={{ base: "md", sm: "sm" }}
        templateColumns={{ base: "auto 1fr auto", lg: "1fr auto" }}
        {...rest}
      >
        <TitleInput
          passHasRef={hasTitleRef}
          passValueRef={titleRef}
          resetRef={resetTitleRef}
        />

        <HStack
          display={{ base: "flex", sm: "none" }}
          gap="md"
          gridColumn={{ base: undefined, lg: "1 / 3" }}
          gridRowStart={{ base: undefined, lg: 2 }}
        >
          <FilterControlButton
            items={STATUS}
            label="Status"
            passHasRef={hasStatusRef}
            passValueRef={statusRef}
            resetRef={resetStatusRef}
          />

          <FilterControlButton
            items={PRIORITY}
            label="Priority"
            passHasRef={hasPriorityRef}
            passValueRef={priorityRef}
            resetRef={resetPriorityRef}
          />

          <ResetButton
            hasPriorityRef={hasPriorityRef}
            hasStatusRef={hasStatusRef}
            hasTitleRef={hasTitleRef}
            resetPriorityRef={resetPriorityRef}
            resetStatusRef={resetStatusRef}
            resetTitleRef={resetTitleRef}
          />
        </HStack>

        <ViewControlButton viewRef={viewRef} />
      </Grid>
    )
  },
)

Filter.displayName = "Filter"

interface TitleInputProps extends InputProps {
  passHasRef: RefObject<(hasValue: boolean) => void>
  passValueRef: RefObject<(value: string) => void>
  resetRef: RefObject<() => void>
}

const TitleInput = memo<TitleInputProps>(
  ({ passHasRef, passValueRef, resetRef, ...rest }) => {
    const [value, setValue] = useState<string>("")

    assignRef(resetRef, () => {
      setValue("")

      setTimeout(() => {
        passValueRef.current("")
        passHasRef.current(false)
      })
    })

    return (
      <Input
        placeholder="Filter tasks..."
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value)

          setTimeout(() => {
            passValueRef.current(ev.target.value)
            passHasRef.current(!!ev.target.value)
          })
        }}
        {...rest}
      />
    )
  },
)

TitleInput.displayName = "TitleInput"

interface FilterControlButtonProps<T extends Priority | Status>
  extends Menu.RootProps {
  items: T extends Status ? typeof STATUS : typeof PRIORITY
  label: ReactNode
  passHasRef: RefObject<(hasValue: boolean) => void>
  passValueRef: RefObject<(value: T[]) => void>
  resetRef: RefObject<() => void>
  icon?: Component<"svg", IconProps>
  buttonProps?: ButtonProps
}

const FilterControlButton = <T extends Priority | Status>({
  icon: Icon = CirclePlusIcon,
  items,
  label,
  passHasRef,
  passValueRef,
  resetRef,
  buttonProps,
  ...rest
}: FilterControlButtonProps<T>) => {
  const [value, setValue] = useState<T[]>([])

  const onChange = useCallback(
    (value: T[]) => {
      setValue(value)
      passValueRef.current(value)
      passHasRef.current(!!value.length)
    },
    [passHasRef, passValueRef],
  )

  const onReset = useCallback(() => {
    setValue([])
    passValueRef.current([])
    passHasRef.current(false)
  }, [passHasRef, passValueRef])

  assignRef(resetRef, onReset)

  return (
    <Menu.Root {...rest}>
      <Menu.Trigger>
        <Button
          variant="outline"
          borderColor={["border", "border"]}
          borderStyle="dashed"
          justifyContent="flex-start"
          startIcon={<Icon />}
          {...buttonProps}
        >
          {label}

          <Show when={value.length}>
            <Separator h="5" orientation="vertical" />

            <HStack gap="xs">
              {value.length >= 3 ? (
                <Tag>{value.length} selected</Tag>
              ) : (
                <For each={value}>
                  {(key) => (
                    <Tag key={key}>
                      {
                        (items as unknown as typeof PRIORITY & typeof STATUS)[
                          key
                        ].label
                      }
                    </Tag>
                  )}
                </For>
              )}
            </HStack>
          </Show>
        </Button>
      </Menu.Trigger>

      <Menu.Content>
        <Menu.OptionGroup type="checkbox" value={value} onChange={onChange}>
          <For each={Object.entries(items)}>
            {([value, { icon: Icon, label }]) => (
              <Menu.OptionItem key={value} value={value}>
                <HStack gap="sm">
                  <Icon color="muted" />

                  <Text as="span">{label}</Text>
                </HStack>
              </Menu.OptionItem>
            )}
          </For>
        </Menu.OptionGroup>
      </Menu.Content>
    </Menu.Root>
  )
}

FilterControlButton.displayName = "FilterControlButton"

interface ResetButtonProps extends ButtonProps {
  hasPriorityRef: RefObject<(hasValue: boolean) => void>
  hasStatusRef: RefObject<(hasValue: boolean) => void>
  hasTitleRef: RefObject<(hasValue: boolean) => void>
  resetPriorityRef: RefObject<() => void>
  resetStatusRef: RefObject<() => void>
  resetTitleRef: RefObject<() => void>
}

const ResetButton = memo<ResetButtonProps>(
  ({
    hasPriorityRef,
    hasStatusRef,
    hasTitleRef,
    resetPriorityRef,
    resetStatusRef,
    resetTitleRef,
    ...rest
  }) => {
    const [isShow, { off, on }] = useBoolean()

    const prevHasTitleRef = useRef<boolean>(false)
    const prevHasStatusRef = useRef<boolean>(false)
    const prevHasPriorityRef = useRef<boolean>(false)

    const onReset = useCallback(() => {
      resetTitleRef.current()
      resetStatusRef.current()
      resetPriorityRef.current()
    }, [resetTitleRef, resetPriorityRef, resetStatusRef])

    assignRef(hasTitleRef, (hasValue) => {
      prevHasTitleRef.current = hasValue

      if (hasValue || prevHasStatusRef.current || prevHasPriorityRef.current) {
        on()
      } else {
        off()
      }
    })
    assignRef(hasStatusRef, (hasValue) => {
      prevHasStatusRef.current = hasValue

      if (hasValue || prevHasTitleRef.current || prevHasPriorityRef.current) {
        on()
      } else {
        off()
      }
    })
    assignRef(hasPriorityRef, (hasValue) => {
      prevHasPriorityRef.current = hasValue

      if (hasValue || prevHasTitleRef.current || prevHasStatusRef.current) {
        on()
      } else {
        off()
      }
    })

    return (
      <Show when={isShow}>
        <Button
          variant="ghost"
          startIcon={<XIcon />}
          onClick={onReset}
          {...rest}
        >
          Reset
        </Button>
      </Show>
    )
  },
)

ResetButton.displayName = "ResetButton"

interface ViewControlButtonProps extends Menu.RootProps {
  viewRef: RefObject<(value: View[]) => void>
  buttonProps?: ButtonProps
}

const ViewControlButton = memo<ViewControlButtonProps>(
  ({ viewRef, buttonProps, ...rest }) => {
    const [value, setValue] = useState<View[]>([...VIEW])

    return (
      <Menu.Root {...rest} closeOnSelect={false}>
        <Menu.Trigger>
          <Button
            variant="outline"
            borderColor={["border", "border"]}
            startIcon={<SlidersHorizontalIcon />}
            {...buttonProps}
          >
            View
          </Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup
            type="checkbox"
            value={value}
            onChange={(value) => {
              setValue(value)
              viewRef.current(value)
            }}
          >
            <For each={VIEW}>
              {(value) => (
                <Menu.OptionItem key={value} value={value}>
                  {toTitleCase(value)}
                </Menu.OptionItem>
              )}
            </For>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>
    )
  },
)

ViewControlButton.displayName = "ViewControlButton"
