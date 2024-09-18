import { CirclePlus, SlidersHorizontal, X } from "@yamada-ui/lucide"
import {
  Button,
  Divider,
  Grid,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  Text,
  assignRef,
  noop,
  useBoolean,
} from "@yamada-ui/react"
import type {
  ButtonProps,
  CSSUIProps,
  Component,
  GridProps,
  IconProps,
  InputProps,
  MenuProps,
} from "@yamada-ui/react"
import { memo, useCallback, useMemo, useRef, useState } from "react"
import type { FC, MutableRefObject, ReactNode } from "react"
import { PRIORITY, STATUS, VIEW } from "./data"
import type { Priority, Status, View } from "./data"

export interface FilterProps extends GridProps {
  titleRef: MutableRefObject<(value: string) => void>
  statusRef: MutableRefObject<(value: Status[]) => void>
  priorityRef: MutableRefObject<(value: Priority[]) => void>
  viewRef: MutableRefObject<(value: View[]) => void>
}

export const Filter: FC<FilterProps> = memo(
  ({ titleRef, statusRef, priorityRef, viewRef, ...rest }) => {
    const hasTitleRef = useRef<(hasValue: boolean) => void>(noop)
    const hasStatusRef = useRef<(hasValue: boolean) => void>(noop)
    const hasPriorityRef = useRef<(hasValue: boolean) => void>(noop)
    const resetTitleRef = useRef<() => void>(noop)
    const resetStatusRef = useRef<() => void>(noop)
    const resetPriorityRef = useRef<() => void>(noop)

    return (
      <Grid
        templateColumns={{ base: "auto 1fr auto", lg: "1fr auto" }}
        gap={{ base: "md", sm: "sm" }}
        {...rest}
      >
        <TitleInput
          passValueRef={titleRef}
          passHasRef={hasTitleRef}
          resetRef={resetTitleRef}
        />

        <HStack
          display={{ base: "flex", sm: "none" }}
          gap="md"
          gridRowStart={{ base: undefined, lg: 2 }}
          gridColumn={{ base: undefined, lg: "1 / 3" }}
        >
          <FilterControlButton
            label="Status"
            items={STATUS}
            passValueRef={statusRef}
            passHasRef={hasStatusRef}
            resetRef={resetStatusRef}
          />

          <FilterControlButton
            label="Priority"
            items={PRIORITY}
            passValueRef={priorityRef}
            passHasRef={hasPriorityRef}
            resetRef={resetPriorityRef}
          />

          <ResetButton
            hasTitleRef={hasTitleRef}
            hasStatusRef={hasStatusRef}
            hasPriorityRef={hasPriorityRef}
            resetTitleRef={resetTitleRef}
            resetStatusRef={resetStatusRef}
            resetPriorityRef={resetPriorityRef}
          />
        </HStack>

        <ViewControlButton viewRef={viewRef} />
      </Grid>
    )
  },
)

Filter.displayName = "Filter"

interface TitleInputProps extends InputProps {
  passValueRef: MutableRefObject<(value: string) => void>
  passHasRef: MutableRefObject<(hasValue: boolean) => void>
  resetRef: MutableRefObject<() => void>
}

const TitleInput: FC<TitleInputProps> = memo(
  ({ passValueRef, passHasRef, resetRef, ...rest }) => {
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

interface FilterControlButtonProps<T extends Status | Priority>
  extends MenuProps {
  label: ReactNode
  icon?: Component<"svg", IconProps>
  items: T extends Status ? typeof STATUS : typeof PRIORITY
  buttonProps?: ButtonProps
  passValueRef: MutableRefObject<(value: T[]) => void>
  passHasRef: MutableRefObject<(hasValue: boolean) => void>
  resetRef: MutableRefObject<() => void>
}

const FilterControlButton = <T extends Status | Priority>({
  buttonProps,
  label,
  icon: Icon = CirclePlus,
  items,
  passValueRef,
  passHasRef,
  resetRef,
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

  const labelProps = useMemo<CSSUIProps>(
    () => ({
      display: "inline-block",
      fontWeight: "normal",
      color: ["black", "white"],
      fontSize: "sm",
      px: "sm",
      bg: ["blackAlpha.100", "whiteAlpha.100"],
      rounded: "md",
      lineHeight: "8",
    }),
    [],
  )

  assignRef(resetRef, onReset)

  return (
    <Menu {...rest}>
      <MenuButton
        as={Button}
        leftIcon={<Icon />}
        variant="outline"
        borderStyle="dashed"
        borderColor={["border", "border"]}
        justifyContent="flex-start"
        {...buttonProps}
      >
        {label}

        {value.length ? (
          <>
            <Divider orientation="vertical" h="5" />

            <HStack gap="xs">
              {value.length >= 3 ? (
                <Text as="span" {...labelProps}>
                  {value.length} selected
                </Text>
              ) : (
                value.map((key) => (
                  <Text key={key} as="span" {...labelProps}>
                    {
                      (items as unknown as typeof STATUS & typeof PRIORITY)[key]
                        .label
                    }
                  </Text>
                ))
              )}
            </HStack>
          </>
        ) : null}
      </MenuButton>

      <MenuList>
        <MenuOptionGroup<T[]> type="checkbox" value={value} onChange={onChange}>
          {Object.entries(items).map(([value, { label, icon: Icon }]) => (
            <MenuOptionItem key={value} value={value}>
              <HStack gap="sm">
                <Icon color="muted" />

                <Text as="span">{label}</Text>
              </HStack>
            </MenuOptionItem>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

FilterControlButton.displayName = "FilterControlButton"

interface ResetButtonProps extends ButtonProps {
  hasTitleRef: MutableRefObject<(hasValue: boolean) => void>
  hasStatusRef: MutableRefObject<(hasValue: boolean) => void>
  hasPriorityRef: MutableRefObject<(hasValue: boolean) => void>
  resetTitleRef: MutableRefObject<() => void>
  resetStatusRef: MutableRefObject<() => void>
  resetPriorityRef: MutableRefObject<() => void>
}

const ResetButton: FC<ResetButtonProps> = ({
  hasTitleRef,
  hasStatusRef,
  hasPriorityRef,
  resetTitleRef,
  resetStatusRef,
  resetPriorityRef,
  ...rest
}) => {
  const [isShow, { on, off }] = useBoolean()

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

  return isShow ? (
    <Button variant="ghost" rightIcon={<X />} onClick={onReset} {...rest}>
      Reset
    </Button>
  ) : null
}

interface ViewControlButtonProps extends MenuProps {
  viewRef: MutableRefObject<(value: View[]) => void>
  buttonProps?: ButtonProps
}

const ViewControlButton: FC<ViewControlButtonProps> = ({
  viewRef,
  buttonProps,
  ...rest
}) => {
  const [value, setValue] = useState<View[]>([...VIEW])

  return (
    <Menu {...rest}>
      <MenuButton
        as={Button}
        leftIcon={<SlidersHorizontal />}
        variant="outline"
        borderColor={["border", "border"]}
        {...buttonProps}
      >
        View
      </MenuButton>

      <MenuList>
        <MenuOptionGroup
          type="checkbox"
          value={value}
          onChange={(value) => {
            setValue(value)
            viewRef.current(value)
          }}
        >
          {VIEW.map((value) => (
            <MenuOptionItem key={value} value={value}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </MenuOptionItem>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

ViewControlButton.displayName = "ViewControlButton"
