import type {
  ButtonProps,
  Component,
  CSSUIProps,
  GridProps,
  IconProps,
  InputProps,
  MenuProps,
} from "@yamada-ui/react"
import type { FC, MutableRefObject, ReactNode } from "react"
import type { Priority, Status, View } from "./data"
import { CirclePlusIcon, SlidersHorizontalIcon, XIcon } from "@yamada-ui/lucide"
import {
  assignRef,
  Button,
  Grid,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  noop,
  Separator,
  Text,
  useBoolean,
} from "@yamada-ui/react"
import { memo, useCallback, useMemo, useRef, useState } from "react"
import { PRIORITY, STATUS, VIEW } from "./data"

export interface FilterProps extends GridProps {
  priorityRef: MutableRefObject<(value: Priority[]) => void>
  statusRef: MutableRefObject<(value: Status[]) => void>
  titleRef: MutableRefObject<(value: string) => void>
  viewRef: MutableRefObject<(value: View[]) => void>
}

export const Filter: FC<FilterProps> = memo(
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
  passHasRef: MutableRefObject<(hasValue: boolean) => void>
  passValueRef: MutableRefObject<(value: string) => void>
  resetRef: MutableRefObject<() => void>
}

const TitleInput: FC<TitleInputProps> = memo(
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
  extends MenuProps {
  items: T extends Status ? typeof STATUS : typeof PRIORITY
  label: ReactNode
  passHasRef: MutableRefObject<(hasValue: boolean) => void>
  passValueRef: MutableRefObject<(value: T[]) => void>
  resetRef: MutableRefObject<() => void>
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

  const labelProps = useMemo<CSSUIProps>(
    () => ({
      bg: ["blackAlpha.100", "whiteAlpha.100"],
      color: ["black", "white"],
      display: "inline-block",
      fontSize: "sm",
      fontWeight: "normal",
      lineHeight: "8",
      px: "sm",
      rounded: "md",
    }),
    [],
  )

  assignRef(resetRef, onReset)

  return (
    <Menu {...rest}>
      <MenuButton
        as={Button}
        variant="outline"
        borderColor={["border", "border"]}
        borderStyle="dashed"
        justifyContent="flex-start"
        leftIcon={<Icon />}
        {...buttonProps}
      >
        {label}

        {value.length ? (
          <>
            <Separator h="5" orientation="vertical" />

            <HStack gap="xs">
              {value.length >= 3 ? (
                <Text as="span" {...labelProps}>
                  {value.length} selected
                </Text>
              ) : (
                value.map((key) => (
                  <Text key={key} as="span" {...labelProps}>
                    {
                      (items as unknown as typeof PRIORITY & typeof STATUS)[key]
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
          {Object.entries(items).map(([value, { icon: Icon, label }]) => (
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
  hasPriorityRef: MutableRefObject<(hasValue: boolean) => void>
  hasStatusRef: MutableRefObject<(hasValue: boolean) => void>
  hasTitleRef: MutableRefObject<(hasValue: boolean) => void>
  resetPriorityRef: MutableRefObject<() => void>
  resetStatusRef: MutableRefObject<() => void>
  resetTitleRef: MutableRefObject<() => void>
}

const ResetButton: FC<ResetButtonProps> = ({
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

  return isShow ? (
    <Button variant="ghost" rightIcon={<XIcon />} onClick={onReset} {...rest}>
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
        variant="outline"
        borderColor={["border", "border"]}
        leftIcon={<SlidersHorizontalIcon />}
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
