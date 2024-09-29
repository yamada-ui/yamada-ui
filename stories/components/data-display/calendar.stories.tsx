import type { Meta, StoryFn } from "@storybook/react"
import { useRef, useState } from "react"
import { colorSchemes } from "../../components"
import type { CalendarProps } from "@yamada-ui/calendar"
import { Calendar } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import {
  Heading,
  Wrap,
  Tooltip,
  Center,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  VStack,
  Button,
  Flex,
} from "@yamada-ui/react"
import "dayjs/locale/ja"

type Story = StoryFn<typeof Calendar>

const meta: Meta<typeof Calendar> = {
  title: "Components / Data Display / Calendar",
  component: Calendar,
}

export default meta

export const basic: Story = () => {
  return <Calendar />
}

export const withSize: Story = () => {
  return (
    <>
      <Calendar size="sm" />

      <Calendar size="md" />

      <Calendar size="lg" />

      <Calendar size="full" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Calendar
        variant="solid"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />

      <Calendar
        variant="subtle"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />

      <Calendar
        variant="unstyled"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Wrap gap="md">
        {colorSchemes.map((colorScheme) => (
          <Calendar
            key={colorScheme}
            variant="solid"
            colorScheme={colorScheme}
            today
            defaultValue={new Date(new Date().setDate(1))}
          />
        ))}

        {colorSchemes.map((colorScheme) => (
          <Calendar
            key={colorScheme}
            variant="subtle"
            colorScheme={colorScheme}
            today
            defaultValue={new Date(new Date().setDate(1))}
          />
        ))}
      </Wrap>
    </>
  )
}

export const withDefaultType: Story = () => {
  return (
    <>
      <Calendar defaultType="date" />

      <Calendar defaultType="month" />

      <Calendar defaultType="year" />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <Calendar defaultValue={new Date()} />
}

export const withDefaultMonth: Story = () => {
  return <Calendar defaultMonth={new Date("1993-08-18")} />
}

export const withFirstDayOfWeek: Story = () => {
  return (
    <>
      <Calendar firstDayOfWeek="monday" />

      <Calendar firstDayOfWeek="sunday" />
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <Calendar
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
    />
  )
}

export const withToday: Story = () => {
  return <Calendar today />
}

export const withWeekendDays: Story = () => {
  return <Calendar weekendDays={[0, 1]} />
}

export const withHolidays: Story = () => {
  const holidays = [
    new Date("2022-01-01"),
    new Date("2022-01-10"),
    new Date("2022-02-11"),
    new Date("2022-02-23"),
    new Date("2022-03-21"),
    new Date("2022-04-29"),
    new Date("2022-05-03"),
    new Date("2022-05-04"),
    new Date("2022-05-05"),
    new Date("2022-07-18"),
    new Date("2022-08-11"),
    new Date("2022-09-19"),
    new Date("2022-09-23"),
    new Date("2022-10-10"),
    new Date("2022-11-03"),
    new Date("2022-11-23"),
    new Date("2023-01-01"),
    new Date("2023-01-02"),
    new Date("2023-01-09"),
    new Date("2023-02-11"),
    new Date("2023-02-23"),
    new Date("2023-03-21"),
    new Date("2023-04-29"),
    new Date("2023-05-03"),
    new Date("2023-05-04"),
    new Date("2023-05-05"),
    new Date("2023-07-17"),
    new Date("2023-08-11"),
    new Date("2023-09-18"),
    new Date("2023-09-23"),
    new Date("2023-10-09"),
    new Date("2023-11-03"),
    new Date("2023-11-23"),
    new Date("2024-01-01"),
    new Date("2024-01-08"),
    new Date("2024-02-11"),
    new Date("2024-02-12"),
    new Date("2024-02-23"),
    new Date("2024-03-20"),
    new Date("2024-04-29"),
    new Date("2024-05-03"),
    new Date("2024-05-04"),
    new Date("2024-05-05"),
    new Date("2024-05-06"),
    new Date("2024-07-15"),
    new Date("2024-08-11"),
    new Date("2024-08-12"),
    new Date("2024-09-16"),
    new Date("2024-09-22"),
    new Date("2024-09-23"),
    new Date("2024-10-14"),
    new Date("2024-11-03"),
    new Date("2024-11-04"),
    new Date("2024-11-23"),
  ]

  return <Calendar holidays={holidays} />
}

export const withExcludeDate: Story = () => {
  return (
    <Calendar
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <Calendar locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Wrap gap="md">
      <Calendar locale="ja" dateFormat="YYYY年 MMMM" />

      <Calendar locale="ja" defaultType="month" yearFormat="YYYY年" />

      <Calendar locale="ja" defaultType="month" monthFormat="MM" />

      <Calendar locale="ja" defaultType="year" yearFormat="YY" />

      <Calendar locale="ja" weekdayFormat="dd曜" />
    </Wrap>
  )
}

export const withAmountOfMonths: Story = () => {
  return (
    <>
      <Calendar amountOfMonths={1} disableOutsideDays />

      <Calendar amountOfMonths={2} disableOutsideDays />

      <Calendar amountOfMonths={3} disableOutsideDays />
    </>
  )
}

export const withPaginateBy: Story = () => {
  return <Calendar amountOfMonths={3} disableOutsideDays paginateBy={1} />
}

export const hiddenOutsideDays: Story = () => {
  return <Calendar hiddenOutsideDays />
}

export const disabledOutsideDays: Story = () => {
  return <Calendar disableOutsideDays />
}

export const disabledHeader: Story = () => {
  return <Calendar withHeader={false} />
}

export const disabledControls: Story = () => {
  return <Calendar withControls={false} />
}

export const disabledLabel: Story = () => {
  return <Calendar withLabel={false} />
}

export const disabledWeekdays: Story = () => {
  return <Calendar withWeekdays={false} />
}

export const useMultiValue: Story = () => {
  return (
    <>
      <Calendar enableMultiple />
      <Calendar defaultValue={[]} />
      <Calendar enableMultiple maxSelectValues={3} />
      <Calendar enableMultiple amountOfMonths={3} />
    </>
  )
}

export const useRangeValue: Story = () => {
  return (
    <>
      <Calendar enableRange />
      <Calendar enableRange maxSelectValues={3} />
      <Calendar
        enableRange
        minDate={new Date(new Date().setDate(5))}
        maxDate={new Date(new Date().setDate(25))}
      />
      <Calendar enableRange amountOfMonths={3} />
    </>
  )
}

export const useControl: Story = () => {
  const typeRef = useRef<() => void>(null)
  const prevRef = useRef<() => void>(null)
  const nextRef = useRef<() => void>(null)

  const onChangeType = () => typeRef.current?.()
  const onPrev = () => prevRef.current?.()
  const onNext = () => nextRef.current?.()

  return (
    <>
      <Wrap gap="md">
        <Button onClick={onPrev}>Prev</Button>
        <Button onClick={onChangeType}>Change Type</Button>
        <Button onClick={onNext}>Next</Button>
      </Wrap>

      <Calendar
        withHeader={false}
        typeRef={typeRef}
        prevRef={prevRef}
        nextRef={nextRef}
      />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<CalendarProps["type"]>("month")

  return <Calendar type={type} onChangeType={onChangeType} />
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return <Calendar month={month} onChangeMonth={onChangeMonth} />
}

export const customControlValue: Story = () => {
  const [value, onChange] = useState<Date>(new Date())
  const [multiValue, onMultiChange] = useState<Date[]>([new Date()])
  const [rangeValue, onRangeChange] = useState<[Date?, Date?]>([])

  return (
    <>
      <Calendar value={value} onChange={onChange} />
      <Calendar value={multiValue} onChange={onMultiChange} />
      <Calendar enableRange value={rangeValue} onChange={onRangeChange} />
    </>
  )
}

export const customLabelButton: Story = () => {
  return (
    <>
      <Calendar labelProps={{ color: "gray.500" }} />

      <Calendar labelProps={{ icon: <Ghost fontSize="sm" /> }} />
    </>
  )
}

export const customControlButton: Story = () => {
  return (
    <>
      <Calendar controlProps={{ icon: <Ghost fontSize="sm" /> }} />

      <Calendar prevProps={{ icon: <Ghost fontSize="sm" /> }} />

      <Calendar nextProps={{ icon: <Ghost fontSize="sm" /> }} />
    </>
  )
}

export const customYearButton: Story = () => {
  return (
    <>
      <Calendar defaultType="year" yearProps={{ color: "gray.500" }} />

      <Calendar
        defaultType="year"
        yearProps={{
          component: ({ year }) => (
            <Tooltip label={year}>
              <Center as="span" w="full" h="full">
                {year}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const customMonthButton: Story = () => {
  return (
    <>
      <Calendar defaultType="month" monthProps={{ color: "gray.500" }} />

      <Calendar
        defaultType="month"
        monthProps={{
          component: ({ year, month }) => (
            <Tooltip label={year}>
              <Center as="span" w="full" h="full">
                {month}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const customWeekday: Story = () => {
  return (
    <>
      <Calendar locale="ja" weekdayProps={{ color: "orange.500" }} />

      <Calendar
        locale="ja"
        weekdayProps={{
          component: ({ weekday }) => (
            <Tooltip label={`${weekday}曜日`} gutter={-8}>
              <Center as="span" w="full" h="full">
                {weekday}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const customDayButton: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <Calendar
          dayProps={{
            color: "blue.500",
            _weekend: { color: "green.500" },
            _outside: { color: "orange.500" },
          }}
        />

        <Calendar
          dayProps={{
            sx: { _outside: { pointerEvents: "none" } },
            component: ({ isOutside, date }) =>
              !isOutside ? <Text as="span">{date.getDate()}</Text> : null,
          }}
        />

        <Calendar
          dayProps={{
            component: ({ isSelected, col, row, date }) => (
              <Text
                as="span"
                color={
                  !isSelected && (col === 3 || row === 3)
                    ? "blue.500"
                    : undefined
                }
              >
                {date.getDate()}
              </Text>
            ),
          }}
        />
      </Wrap>

      <Wrap gap="md">
        <Calendar
          dayProps={{
            component: ({ date }) => (
              <Tooltip label="No schedule">
                <Center as="span" w="full" h="full">
                  {date.getDate()}
                </Center>
              </Tooltip>
            ),
          }}
        />

        <Calendar
          dateFormat="YYYY年 MMMM"
          locale="ja"
          colorScheme="primary"
          dayProps={{
            component: ({ date }) => (
              <Popover>
                <PopoverTrigger>
                  <Center as="span" w="full" h="full">
                    {date.getDate()}
                  </Center>
                </PopoverTrigger>

                <Portal>
                  <PopoverContent>
                    <PopoverHeader>
                      {date.getMonth() + 1}月{date.getDate()}日
                    </PopoverHeader>
                    <PopoverBody>
                      <VStack minW="sm" gap="sm">
                        <Flex
                          px="sm"
                          bg="secondary"
                          color="white"
                          rounded="md"
                          lineHeight="taller"
                          fontSize="sm"
                        >
                          <Text>山田の誕生日</Text>
                        </Flex>
                      </VStack>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            ),
          }}
        />
      </Wrap>

      <Calendar
        dateFormat="YYYY年 MMMM"
        locale="ja"
        size="full"
        type="date"
        headerProps={{ mb: 2 }}
        labelProps={{ pointerEvents: "none", icon: { display: "none" } }}
        tableProps={{
          border: "1px solid",
          borderColor: "border",
          th: { border: "1px solid", borderColor: "border" },
          td: { border: "1px solid", borderColor: "border" },
        }}
        dayProps={{
          variant: "ghost",
          h: "auto",
          p: 2,
          _selected: {},
          _hover: {},
          _active: {},
          _ripple: {
            display: "none",
          },
          transitionProperty: "none",
          component: ({ date, isSelected }) => (
            <VStack alignItems="center">
              <Center
                bg={isSelected ? "primary" : undefined}
                w={8}
                lineHeight={8}
                rounded="full"
                color={isSelected ? "white" : undefined}
                transitionProperty="background"
                transitionDuration="normal"
              >
                {date.getDate()}
              </Center>

              <VStack gap="sm">
                <Flex
                  px="sm"
                  bg="secondary"
                  color="white"
                  rounded="md"
                  lineHeight="taller"
                  fontSize="sm"
                >
                  <Text>山田の誕生日</Text>
                </Flex>
              </VStack>
            </VStack>
          ),
        }}
      />
    </>
  )
}
