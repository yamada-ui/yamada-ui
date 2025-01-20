import type { Meta, StoryFn } from "@storybook/react"
import type { CalendarProps } from "./"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useRef, useState } from "react"
import { Button } from "../button"
import { Center } from "../center"
import { Flex, Wrap } from "../flex"
import { Heading } from "../heading"
import { GhostIcon } from "../icon"
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "../popover"
import { Portal } from "../portal"
import { VStack } from "../stack"
import { Text } from "../text"
import { Tooltip } from "../tooltip"
import { Calendar } from "./"
import "dayjs/locale/ja"

type Story = StoryFn<typeof Calendar>

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "Components / Calendar",
}

export default meta

export const Basic: Story = () => {
  return <Calendar />
}

export const WithSize: Story = () => {
  return (
    <>
      <Calendar size="sm" />

      <Calendar size="md" />

      <Calendar size="lg" />

      <Calendar size="full" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Calendar
        variant="solid"
        defaultValue={new Date(new Date().setDate(1))}
        today
      />

      <Calendar
        variant="subtle"
        defaultValue={new Date(new Date().setDate(1))}
        today
      />

      <Calendar
        variant="unstyled"
        defaultValue={new Date(new Date().setDate(1))}
        today
      />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Wrap gap="md">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Calendar
            key={colorScheme}
            colorScheme={colorScheme}
            variant="solid"
            defaultValue={new Date(new Date().setDate(1))}
            today
          />
        ))}

        {COLOR_SCHEMES.map((colorScheme) => (
          <Calendar
            key={colorScheme}
            colorScheme={colorScheme}
            variant="subtle"
            defaultValue={new Date(new Date().setDate(1))}
            today
          />
        ))}
      </Wrap>
    </>
  )
}

export const WithDefaultType: Story = () => {
  return (
    <>
      <Calendar defaultType="date" />

      <Calendar defaultType="month" />

      <Calendar defaultType="year" />
    </>
  )
}

export const WithDefaultValue: Story = () => {
  return <Calendar defaultValue={new Date()} />
}

export const WithDefaultMonth: Story = () => {
  return <Calendar defaultMonth={new Date("1993-08-18")} />
}

export const WithFirstDayOfWeek: Story = () => {
  return (
    <>
      <Calendar firstDayOfWeek="monday" />

      <Calendar firstDayOfWeek="sunday" />
    </>
  )
}

export const WithMinMaxDate: Story = () => {
  return (
    <Calendar
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
    />
  )
}

export const WithToday: Story = () => {
  return <Calendar today />
}

export const WithWeekendDays: Story = () => {
  return <Calendar weekendDays={[0, 1]} />
}

export const WithHolidays: Story = () => {
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

export const WithExcludeDate: Story = () => {
  return (
    <Calendar
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  )
}

export const WithLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <Calendar locale="ja" />
}

export const WithFormat: Story = () => {
  return (
    <Wrap gap="md">
      <Calendar dateFormat="YYYY年 MMMM" locale="ja" />

      <Calendar defaultType="month" locale="ja" yearFormat="YYYY年" />

      <Calendar defaultType="month" locale="ja" monthFormat="MM" />

      <Calendar defaultType="year" locale="ja" yearFormat="YY" />

      <Calendar locale="ja" weekdayFormat="dd曜" />
    </Wrap>
  )
}

export const WithAmountOfMonths: Story = () => {
  return (
    <>
      <Calendar amountOfMonths={1} disableOutsideDays />

      <Calendar amountOfMonths={2} disableOutsideDays />

      <Calendar amountOfMonths={3} disableOutsideDays />
    </>
  )
}

export const WithPaginateBy: Story = () => {
  return <Calendar amountOfMonths={3} disableOutsideDays paginateBy={1} />
}

export const HiddenOutsideDays: Story = () => {
  return <Calendar hiddenOutsideDays />
}

export const DisabledOutsideDays: Story = () => {
  return <Calendar disableOutsideDays />
}

export const DisabledHeader: Story = () => {
  return <Calendar withHeader={false} />
}

export const DisabledControls: Story = () => {
  return <Calendar withControls={false} />
}

export const DisabledLabel: Story = () => {
  return <Calendar withLabel={false} />
}

export const DisabledWeekdays: Story = () => {
  return <Calendar withWeekdays={false} />
}

export const UseMultiValue: Story = () => {
  return (
    <>
      <Calendar enableMultiple />
      <Calendar defaultValue={[]} />
      <Calendar enableMultiple maxSelectValues={3} />
      <Calendar amountOfMonths={3} enableMultiple />
    </>
  )
}

export const UseRangeValue: Story = () => {
  return (
    <>
      <Calendar enableRange />
      <Calendar enableRange maxSelectValues={3} />
      <Calendar
        enableRange
        maxDate={new Date(new Date().setDate(25))}
        minDate={new Date(new Date().setDate(5))}
      />
      <Calendar amountOfMonths={3} enableRange />
    </>
  )
}

export const UseControl: Story = () => {
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
        nextRef={nextRef}
        prevRef={prevRef}
        typeRef={typeRef}
        withHeader={false}
      />
    </>
  )
}

export const CustomControlType: Story = () => {
  const [type, onChangeType] = useState<CalendarProps["type"]>("month")

  return <Calendar type={type} onChangeType={onChangeType} />
}

export const CustomControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return <Calendar month={month} onChangeMonth={onChangeMonth} />
}

export const CustomControlValue: Story = () => {
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

export const CustomLabelButton: Story = () => {
  return (
    <>
      <Calendar labelProps={{ color: "gray.500" }} />

      <Calendar labelProps={{ icon: <GhostIcon fontSize="sm" /> }} />
    </>
  )
}

export const CustomControlButton: Story = () => {
  return (
    <>
      <Calendar controlProps={{ icon: <GhostIcon fontSize="sm" /> }} />

      <Calendar prevProps={{ icon: <GhostIcon fontSize="sm" /> }} />

      <Calendar nextProps={{ icon: <GhostIcon fontSize="sm" /> }} />
    </>
  )
}

export const CustomYearButton: Story = () => {
  return (
    <>
      <Calendar defaultType="year" yearProps={{ color: "gray.500" }} />

      <Calendar
        defaultType="year"
        yearProps={{
          component: ({ year }) => (
            <Tooltip label={year}>
              <Center as="span" h="full" w="full">
                {year}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const CustomMonthButton: Story = () => {
  return (
    <>
      <Calendar defaultType="month" monthProps={{ color: "gray.500" }} />

      <Calendar
        defaultType="month"
        monthProps={{
          component: ({ month, year }) => (
            <Tooltip label={year}>
              <Center as="span" h="full" w="full">
                {month}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const CustomWeekday: Story = () => {
  return (
    <>
      <Calendar locale="ja" weekdayProps={{ color: "orange.500" }} />

      <Calendar
        locale="ja"
        weekdayProps={{
          component: ({ weekday }) => (
            <Tooltip gutter={-8} label={`${weekday}曜日`}>
              <Center as="span" h="full" w="full">
                {weekday}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const CustomDayButton: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <Calendar
          dayProps={{
            color: "blue.500",
            _outside: { color: "orange.500" },
            _weekend: { color: "green.500" },
          }}
        />

        <Calendar
          dayProps={{
            sx: { _outside: { pointerEvents: "none" } },
            component: ({ date, outside }) =>
              !outside ? <Text as="span">{date.getDate()}</Text> : null,
          }}
        />

        <Calendar
          dayProps={{
            component: ({ col, date, row, selected }) => (
              <Text
                as="span"
                color={
                  !selected && (col === 3 || row === 3) ? "blue.500" : undefined
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
                <Center as="span" h="full" w="full">
                  {date.getDate()}
                </Center>
              </Tooltip>
            ),
          }}
        />

        <Calendar
          colorScheme="primary"
          dateFormat="YYYY年 MMMM"
          locale="ja"
          dayProps={{
            component: ({ date }) => (
              <Popover>
                <PopoverTrigger>
                  <Center as="span" h="full" w="full">
                    {date.getDate()}
                  </Center>
                </PopoverTrigger>

                <Portal>
                  <PopoverContent>
                    <PopoverHeader>
                      {date.getMonth() + 1}月{date.getDate()}日
                    </PopoverHeader>
                    <PopoverBody>
                      <VStack gap="sm" minW="sm">
                        <Flex
                          bg="secondary"
                          color="white"
                          fontSize="sm"
                          lineHeight="taller"
                          px="sm"
                          rounded="md"
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
        type="date"
        size="full"
        dateFormat="YYYY年 MMMM"
        locale="ja"
        dayProps={{
          variant: "ghostIcon",
          component: ({ date, selected }) => (
            <VStack alignItems="center">
              <Center
                bg={selected ? "primary" : undefined}
                color={selected ? "white" : undefined}
                lineHeight={8}
                rounded="full"
                transitionDuration="moderate"
                transitionProperty="background"
                w={8}
              >
                {date.getDate()}
              </Center>

              <VStack gap="sm">
                <Flex
                  bg="secondary"
                  color="white"
                  fontSize="sm"
                  lineHeight="taller"
                  px="sm"
                  rounded="md"
                >
                  <Text>山田の誕生日</Text>
                </Flex>
              </VStack>
            </VStack>
          ),
          h: "auto",
          p: 2,
          transitionProperty: "none",
          _active: {},
          _hover: {},
          _ripple: {
            display: "none",
          },
          _selected: {},
        }}
        headerProps={{ mb: 2 }}
        labelProps={{ icon: { display: "none" }, pointerEvents: "none" }}
        tableProps={{
          border: "1px solid",
          borderColor: "border",
          td: { border: "1px solid", borderColor: "border" },
          th: { border: "1px solid", borderColor: "border" },
        }}
      />
    </>
  )
}
