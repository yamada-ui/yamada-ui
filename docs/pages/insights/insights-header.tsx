import {
  Box,
  Center,
  forwardRef,
  Heading,
  HStack,
  MultiAutocomplete,
  Text,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { memo, useCallback, useMemo, useRef, useState } from "react"
import { useInsights } from "./insights-provider"
import { useI18n } from "contexts"
import { useRouter } from "next/router"
import type { InsightPeriodSuggest, InsightUserSuggest } from "./insights-utils"
import {
  INSIGHT_PERIOD_SUGGEST,
  INSIGHT_USER_IDS,
  INSIGHT_MIN_DATE,
  INSIGHT_USER_SUGGEST,
  INSIGHT_MEMBERS_IDS,
  INSIGHT_MAINTAINERS_IDS,
  INSIGHT_MAX_DATE,
} from "./insights-utils"
import { RangeDatePicker } from "@yamada-ui/calendar"
import type { ManipulateType } from "dayjs"
import dayjs from "dayjs"
import "dayjs/locale/ja"

export interface InsightsHeaderProps extends StackProps {}

export const InsightsHeader = memo(
  forwardRef<InsightsHeaderProps, "div">(({ ...rest }, ref) => {
    const { t } = useI18n()

    return (
      <HStack
        ref={ref}
        w="full"
        flexDirection={{ base: "row", md: "column" }}
        justifyContent="space-between"
        alignItems={{ base: "center", md: "flex-start" }}
        {...rest}
      >
        <Heading>{t("insights.title")}</Heading>

        <HStack
          w={{ base: "auto", md: "full" }}
          flexDirection={{ base: "row", md: "column" }}
        >
          <UserSelect />
          <PeriodSelect />
        </HStack>
      </HStack>
    )
  }),
)

InsightsHeader.displayName = "InsightsHeader"

interface UserSelectProps {}

const UserSelect: FC<UserSelectProps> = memo(() => {
  const { t } = useI18n()
  const router = useRouter()
  const { users, setUsers } = useInsights()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const count = users.length
  const isExceeded = count > 1

  const onChange = useCallback(
    (value: string[]) => {
      const { query } = router
      const params = new URLSearchParams(query as { [key: string]: string })

      const computedValue = value.join(",")

      if (computedValue.length) {
        params.set("users", computedValue)
      } else {
        params.delete("users")
      }

      router.push(`/insights?${params.toString()}`, undefined, {
        shallow: true,
      })

      setUsers(value)
    },
    [router, setUsers],
  )

  const onSuggestChange = useCallback(
    (type: InsightUserSuggest) => {
      if (type === "all") {
        onChange(INSIGHT_USER_IDS)
      } else if (type === "maintainers") {
        onChange(INSIGHT_MAINTAINERS_IDS)
      } else if (type === "members") {
        onChange(INSIGHT_MEMBERS_IDS)
      }
      onClose()
    },
    [onChange, onClose],
  )

  const items = useMemo(
    () => INSIGHT_USER_IDS.map((value) => ({ label: value, value })),
    [],
  )

  return (
    <MultiAutocomplete
      w={{ base: "64", md: "full" }}
      items={items}
      value={users}
      onChange={onChange}
      clearIconProps={{
        onClick: () => onChange([]),
      }}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      component={({ label, index }) => {
        const isLast = count === index + 1

        if (isExceeded && !isLast) return null

        return (
          <Text as="span" me="0.25">
            {isExceeded ? t("insights.user-exceeded", count) : label}
            {!isLast || isOpen ? "," : ""}
          </Text>
        )
      }}
      footer={
        <Box px="sm">
          <VStack
            py="sm"
            gap="sm"
            borderTopWidth="1px"
            borderColor={["blackAlpha.200", "whiteAlpha.100"]}
          >
            {INSIGHT_USER_SUGGEST.map((value) => {
              return (
                <Center
                  key={value}
                  as="button"
                  type="button"
                  w="full"
                  h="8"
                  fontSize="sm"
                  bg={["blackAlpha.100", "whiteAlpha.100"]}
                  _hover={{
                    bg: ["blackAlpha.200", "whiteAlpha.200"],
                  }}
                  rounded="md"
                  transitionProperty="background"
                  transitionDuration="slower"
                  onClick={() => onSuggestChange(value)}
                >
                  {t(`insights.user.${value}`)}
                </Center>
              )
            })}
          </VStack>
        </Box>
      }
    />
  )
})

UserSelect.displayName = "UserSelect"

interface PeriodSelectProps {}

const PeriodSelect: FC<PeriodSelectProps> = memo(() => {
  const { t, locale } = useI18n()
  const router = useRouter()
  const { period, onChangePeriod } = useInsights()
  const defaultValue: [(Date | undefined)?, (Date | undefined)?] = [
    dayjs(period.start).toDate(),
    dayjs(period.end).toDate(),
  ]
  const valueRef =
    useRef<[(Date | undefined)?, (Date | undefined)?]>(defaultValue)
  const [value, onChange] =
    useState<[(Date | undefined)?, (Date | undefined)?]>(defaultValue)
  const { isOpen, onOpen, onClose } = useDisclosure({
    onClose: () => onChangeQuery(valueRef.current),
  })

  const onChangeQuery = useCallback(
    (value: [(Date | undefined)?, (Date | undefined)?]) => {
      const { query } = router
      const params = new URLSearchParams(query as { [key: string]: string })

      let start: string | undefined
      let end: string | undefined

      const currentDate = dayjs().format("YYYY-MM-DD")
      const startDate = dayjs(value[0]).format("YYYY-MM-DD")
      const endDate = dayjs(value[1]).format("YYYY-MM-DD")

      const isReset = currentDate === startDate && currentDate === endDate

      if (value[0] && !isReset) {
        params.set("start", startDate)
        start = startDate
      } else {
        params.delete("start")
      }

      if (value[1] && !isReset) {
        params.set("end", endDate)
        end = endDate
      } else {
        params.delete("end")
      }

      router.push(`/insights?${params.toString()}`, undefined, {
        shallow: true,
      })

      if (isReset) onChange([undefined, undefined])

      onChangePeriod(start, end)
    },
    [router, onChangePeriod],
  )

  const onSuggestChange = useCallback(
    (type: InsightPeriodSuggest) => {
      const [, count, unit] = type.match(/^(\d+)([dMy])$/) ?? []

      const value: [Date, Date] = [
        dayjs()
          .tz()
          .subtract(parseInt(count), unit as ManipulateType)
          .toDate(),
        dayjs().tz().subtract(1, "d").toDate(),
      ]

      if (dayjs(value[0]).isBefore(INSIGHT_MIN_DATE)) {
        value[0] = INSIGHT_MIN_DATE
      }

      valueRef.current = value
      onChange(value)
      onClose()
    },
    [onChange, onClose],
  )

  return (
    <RangeDatePicker
      w={{ base: "64", md: "full" }}
      startInputProps={{ overflowX: "hidden" }}
      endInputProps={{ overflowX: "hidden" }}
      value={value}
      onChange={(value) => {
        valueRef.current = value
        onChange(value)
      }}
      locale={locale}
      dateFormat={locale === "ja" ? "YYYY年 MMMM" : undefined}
      yearFormat={locale === "ja" ? "YYYY年" : undefined}
      minDate={INSIGHT_MIN_DATE}
      maxDate={INSIGHT_MAX_DATE}
      isClearable={false}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <VStack
        pt="sm"
        gap="sm"
        borderTopWidth="1px"
        borderColor={["blackAlpha.200", "whiteAlpha.100"]}
      >
        {INSIGHT_PERIOD_SUGGEST.map((value) => {
          return (
            <Center
              key={value}
              as="button"
              type="button"
              w="full"
              h="8"
              fontSize="sm"
              bg={["blackAlpha.100", "whiteAlpha.100"]}
              _hover={{
                bg: ["blackAlpha.200", "whiteAlpha.200"],
              }}
              rounded="md"
              transitionProperty="background"
              transitionDuration="slower"
              onClick={() => onSuggestChange(value)}
            >
              {t(`insights.period.${value}`)}
            </Center>
          )
        })}
      </VStack>
    </RangeDatePicker>
  )
})

PeriodSelect.displayName = "PeriodSelect"
