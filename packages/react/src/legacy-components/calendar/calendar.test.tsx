import { Calendar } from "."
import { a11y, fireEvent, render, screen, waitFor } from "@/test"
import { Icon } from "../../components/icon"

describe("<Calendar />", () => {
  test("Calendar renders correctly", async () => {
    await a11y(<Calendar />)
  })

  describe("Calendar test", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test("should render days", () => {
      const defaultDate = new Date("2024-06-10")
      render(
        <Calendar defaultValue={defaultDate} labelProps={{ icon: <Icon /> }} />,
      )

      const button = screen.getByRole("button", {
        name: "June 2024",
      })
      expect(button).toBeInTheDocument()

      const days = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "31",
      ]

      for (const day of days) {
        const dayButton = screen.getByRole("button", {
          name: day,
        })
        expect(dayButton).toBeInTheDocument()
      }

      for (const day of ["27", "28", "29", "30"]) {
        const dayButtons = screen.getAllByRole("button", {
          name: day,
        })
        for (const button of dayButtons) {
          expect(button).toBeInTheDocument()
        }
      }
    })

    test("should render months", () => {
      const defaultDate = new Date("2024-06-10")
      render(<Calendar defaultValue={defaultDate} />)

      const button = screen.getByRole("button", {
        name: "June 2024",
      })

      fireEvent.click(button)

      const yearButton = screen.getByRole("button", {
        name: "2024",
      })
      expect(yearButton).toBeInTheDocument()

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]
      for (const month of months) {
        const monthButton = screen.getByRole("button", {
          name: month,
        })
        expect(monthButton).toBeInTheDocument()
      }
    })

    test("should render years", () => {
      const defaultDate = new Date("2024-06-10")
      render(<Calendar defaultValue={defaultDate} />)

      const button = screen.getByRole("button", {
        name: "June 2024",
      })

      fireEvent.click(button)

      const yearButton = screen.getByRole("button", {
        name: "2024",
      })
      fireEvent.click(yearButton)

      const years = [
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
      ]
      for (const year of years) {
        const yearButton = screen.getByRole("button", {
          name: year,
        })
        expect(yearButton).toBeInTheDocument()
      }
    })

    test("should change selected date", () => {
      const { container } = render(
        <Calendar
          variant="solid"
          defaultValue={new Date(new Date().setDate(1))}
          today
        />,
      )
      const selectDate = new Date(new Date().setDate(7))
      const value = new Date(selectDate.setHours(0, 0, 0, 0)).getDate()
      const selectBtn = container.querySelector(`button[data-value="${value}"]`)

      fireEvent.click(selectBtn!)

      expect(selectBtn).toHaveAttribute("data-selected")
    })

    test("should change selected month", () => {
      const { container } = render(
        <Calendar
          variant="subtle"
          defaultValue={new Date(new Date().setDate(1))}
          today
        />,
      )

      const headerLabelBtn = container.querySelector(
        `button.ui-calendar__header__label`,
      )
      fireEvent.click(headerLabelBtn!)

      const monthListButtons = container.querySelectorAll(
        `button.ui-calendar__month-list__button`,
      )
      const targetMonthEl = monthListButtons[7]
      expect(targetMonthEl).toHaveTextContent("Aug")
      fireEvent.click(targetMonthEl!)

      const headerLabelBtnAfter = container.querySelector(
        `button.ui-calendar__header__label`,
      )
      expect(headerLabelBtnAfter).toHaveTextContent(
        "August " + new Date().getFullYear(),
      )
    })

    describe("Change Default Type", () => {
      test("should render with defaultType date", () => {
        const { container } = render(<Calendar defaultType="date" />)
        const calendarMonth = container.querySelector(`.ui-calendar__month`)
        expect(calendarMonth).toBeInTheDocument()
      })
      test("should render with defaultType month", () => {
        const { container } = render(<Calendar defaultType="month" />)
        const calendarMonthList = container.querySelector(
          `.ui-calendar__month-list`,
        )
        expect(calendarMonthList).toBeInTheDocument()
      })
      test("should render with defaultType year", () => {
        const { container } = render(<Calendar defaultType="year" />)
        const calendarYearList = container.querySelector(
          `.ui-calendar__year-list`,
        )
        expect(calendarYearList).toBeInTheDocument()
      })
    })

    describe("Set Default Date", () => {
      test("should render with defaultValue", () => {
        const defaultSelectDate = new Date()
        const { container } = render(
          <Calendar defaultValue={defaultSelectDate} />,
        )
        const value = new Date(defaultSelectDate.setHours(0, 0, 0, 0)).getDate()
        const defaultValueBtn = container.querySelector(
          `button[data-value="${value}"]`,
        )
        waitFor(() => {
          expect(defaultValueBtn).toHaveAttribute("data-selected")
        })
      })
    })

    describe("Set Default Month", () => {
      test("should render with defaultMonth", () => {
        const defaultSelectMonth = new Date("1993-08-18")
        const { container } = render(
          <Calendar defaultMonth={defaultSelectMonth} />,
        )
        const defaultValueBtn = container.querySelector(
          `button.ui-calendar__header__label`,
        )
        expect(defaultValueBtn).toHaveTextContent("August 1993")
      })
    })

    describe("Change First Day of the Week", () => {
      test("should render with firstDayOfWeek sunday", () => {
        const { container } = render(<Calendar firstDayOfWeek="sunday" />)
        const defaultValueBtn = container.querySelector(
          `.ui-calendar__month__weekday__label`,
        )
        expect(defaultValueBtn).toHaveTextContent("Su")
      })
      test("should render with firstDayOfWeek monday", () => {
        const { container } = render(<Calendar firstDayOfWeek="monday" />)
        const defaultValueBtn = container.querySelector(
          `.ui-calendar__month__weekday__label`,
        )
        expect(defaultValueBtn).toHaveTextContent("Mo")
      })
    })

    describe("Set Minimum and Maximum Dates", () => {
      test("should render with minDate and maxDate", () => {
        const { container } = render(
          <Calendar
            defaultValue={new Date(new Date(2024, 2))}
            maxDate={new Date(new Date(2024, 2).setDate(18))}
            minDate={new Date(new Date(2024, 2).setDate(1))}
          />,
        )
        const minDateUnder = new Date(new Date(2024, 2).setDate(0))
        const valueMin = new Date(minDateUnder.setHours(0, 0, 0, 0)).getDate()
        const minDateUnderBtn = container.querySelector(
          `button[data-value="${valueMin}"]`,
        )
        expect(minDateUnderBtn).toHaveAttribute("data-disabled")

        const maxDateOver = new Date(new Date(2024, 2).setDate(19))
        const valueMax = new Date(maxDateOver.setHours(0, 0, 0, 0)).getDate()
        const maxDateOverBtn = container.querySelector(
          `button[data-value="${valueMax}"]`,
        )
        expect(maxDateOverBtn).toHaveAttribute("data-disabled")
      })
    })

    describe("Highlight Today's Date", () => {
      test("should render with today", () => {
        const { container } = render(<Calendar today />)
        const today = new Date(new Date().setHours(0, 0, 0, 0)).getDate()
        const todayBtn = container.querySelector(
          `button[data-value="${today}"]`,
        )
        waitFor(() => {
          expect(todayBtn).toHaveAttribute("data-today")
        })
      })
    })

    describe("Set Weekend Days", () => {
      test("should render with weekendDays", () => {
        const { container } = render(<Calendar weekendDays={[0, 1]} />)
        const monthDays = container.querySelectorAll(".ui-calendar__month__day")
        ;[monthDays[6], monthDays[0]].forEach((monthDay) => {
          expect(monthDay).toHaveAttribute("data-weekend")
        })
      })
    })

    describe("Set Holidays", () => {
      const holidays = [
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

      test("should render with holidays", () => {
        const { container } = render(
          <Calendar
            defaultMonth={new Date("2024-02-18")}
            holidays={holidays}
          />,
        )
        holidays.slice(2, 5).forEach((_holiday) => {
          const holiday = new Date(_holiday.setHours(0, 0, 0, 0)).getDate()
          const holidayBtn = container.querySelector(
            `button[data-value="${holiday}"]`,
          )
          expect(holidayBtn).toHaveAttribute("data-holiday")
        })

        const prevBtn = container.querySelector(
          `button.ui-calendar__header__control--prev`,
        )

        fireEvent.click(prevBtn!)

        holidays.slice(0, 2).forEach((_holiday) => {
          const holiday = new Date(_holiday.setHours(0, 0, 0, 0)).getDate()
          const holidayBtn = container.querySelector(
            `button[data-value="${holiday}"]`,
          )
          expect(holidayBtn).toHaveAttribute("data-holiday")
        })

        const nextBtn = container.querySelector(
          `button.ui-calendar__header__control--next`,
        )

        fireEvent.click(nextBtn!)

        fireEvent.click(nextBtn!)

        holidays.slice(5, 6).forEach((_holiday) => {
          const holiday = new Date(_holiday.setHours(0, 0, 0, 0)).getDate()
          const holidayBtn = container.querySelector(
            `button[data-value="${holiday}"]`,
          )
          expect(holidayBtn).toHaveAttribute("data-holiday")
        })
      })
    })

    describe("Exclude Specific Dates", () => {
      test("should render with excludeDate", () => {
        const { container } = render(
          <Calendar
            excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
          />,
        )
        const monthDays = container.querySelectorAll(".ui-calendar__month__day")
        ;[monthDays[12], monthDays[13]].forEach((monthDay) => {
          expect(monthDay).toHaveAttribute("data-disabled")
        })
      })
    })

    describe("Set Locale", () => {
      beforeEach(async () => {
        await import("dayjs/locale/ja")
      })

      test("should render with locale", () => {
        const { container } = render(<Calendar locale="ja" />)
        const weekdayLabel = container.querySelector(
          ".ui-calendar__month__weekday__label",
        )
        expect(weekdayLabel).toHaveTextContent("月")
      })
    })

    describe("Change Date Format", () => {
      beforeEach(async () => {
        await import("dayjs/locale/ja")
      })

      test("should render with dateFormat 'YYYY年 MMMM'", () => {
        const { container } = render(
          <Calendar dateFormat="YYYY年 MMMM" locale="ja" />,
        )
        const today = new Date(new Date().setHours(0, 0, 0, 0))
        const headerLabel = container.querySelector(
          ".ui-calendar__header__label",
        )
        expect(headerLabel).toHaveTextContent(
          today.getFullYear() + "年 " + (+today.getMonth() + 1) + "月",
        )
      })

      test("should render with yearFormat 'YYYY年'", () => {
        const { container } = render(
          <Calendar defaultType="month" locale="ja" yearFormat="YYYY年" />,
        )
        const today = new Date(new Date().setHours(0, 0, 0, 0))
        const headerLabel = container.querySelector(
          ".ui-calendar__header__label",
        )
        expect(headerLabel).toHaveTextContent(today.getFullYear() + "年")
      })

      test("should render with monthFormat 'MM'", () => {
        const { container } = render(
          <Calendar defaultType="month" locale="ja" monthFormat="MM" />,
        )
        const headerLabel = container.querySelector(
          ".ui-calendar__month-list__button",
        )
        expect(headerLabel).toHaveTextContent("01")
      })

      test("should render with yearFormat 'YY'", () => {
        const { container } = render(
          <Calendar defaultType="year" locale="ja" yearFormat="YY" />,
        )
        const today = new Date(new Date().setHours(0, 0, 0, 0))
        const headerLabel = container.querySelector(
          `button[data-value="${today.getFullYear()}"]`,
        )
        expect(headerLabel).toHaveTextContent(
          today.getFullYear().toString().slice(-2),
        )
      })

      test("should render with weekdayFormat 'dd曜'", () => {
        const { container } = render(
          <Calendar locale="ja" weekdayFormat="dd曜" />,
        )
        const weekdayLabel = container.querySelector(
          `.ui-calendar__month__weekday__label`,
        )
        expect(weekdayLabel).toHaveTextContent("月曜")
      })
    })

    describe("Disable Dates Outside the Current Month", () => {
      test("should render with disableOutsideDays", () => {
        const { container } = render(<Calendar disableOutsideDays />)
        const outsides = container.querySelectorAll(`button[data-outside]`)
        outsides.forEach((outside) => {
          expect(outside).toHaveAttribute("data-disabled")
        })
      })
    })

    describe("Hide Dates Outside the Current Month", () => {
      test("should render with hiddenOutsideDays", () => {
        const { container } = render(<Calendar hiddenOutsideDays />)
        const outsides = container.querySelectorAll(`button[data-outside]`)
        outsides.forEach((outside) => {
          expect(outside).toHaveStyle("appearance: none;")
        })
      })
    })

    describe("Change the Number of Months Displayed", () => {
      test.each([1, 6, 13])(
        "should render with amountOfMonths %i",
        (number) => {
          const { getByTestId } = render(
            <Calendar
              data-testid="Calender"
              amountOfMonths={number}
              disableOutsideDays
            />,
          )
          const children = getByTestId("Calender").children
          expect(children).toHaveLength(number)
        },
      )
    })

    describe("Change Pagination Unit", () => {
      test("should render with paginateBy default", () => {
        const { container } = render(
          <Calendar
            amountOfMonths={2}
            defaultMonth={new Date("2024-01-18")}
            disableOutsideDays
          />,
        )
        const headerLabelBtn = container.querySelector(
          ".ui-calendar__header__label",
        )
        expect(headerLabelBtn).toHaveTextContent("January 2024")

        const prevBtn = container.querySelector(
          `button.ui-calendar__header__control--prev`,
        )
        fireEvent.click(prevBtn!)
        const headerLabelBtnAfterPrev = container.querySelector(
          ".ui-calendar__header__label",
        )
        expect(headerLabelBtnAfterPrev).toHaveTextContent("November 2023")

        const nextBtn = container.querySelector(
          `button.ui-calendar__header__control--next`,
        )
        fireEvent.click(nextBtn!)
        fireEvent.click(nextBtn!)
        const headerLabelBtnAfterNext = container.querySelector(
          ".ui-calendar__header__label",
        )
        expect(headerLabelBtnAfterNext).toHaveTextContent("March 2024")
      })

      test.each([
        {
          expectedNext: "February 2024",
          expectedPrev: "December 2023",
          paginateBy: 1,
        },
      ])(
        "should render with paginateBy $paginateBy",
        ({ expectedNext, expectedPrev, paginateBy }) => {
          const { container } = render(
            <Calendar
              amountOfMonths={2}
              defaultMonth={new Date("2024-01-18")}
              disableOutsideDays
              paginateBy={paginateBy}
            />,
          )
          const headerLabelBtn = container.querySelector(
            ".ui-calendar__header__label",
          )
          expect(headerLabelBtn).toHaveTextContent("January 2024")

          const prevBtn = container.querySelector(
            `button.ui-calendar__header__control--prev`,
          )
          fireEvent.click(prevBtn!)
          const headerLabelBtnAfterPrev = container.querySelector(
            ".ui-calendar__header__label",
          )
          expect(headerLabelBtnAfterPrev).toHaveTextContent(expectedPrev)

          const nextBtn = container.querySelector(
            `button.ui-calendar__header__control--next`,
          )
          fireEvent.click(nextBtn!)
          fireEvent.click(nextBtn!)
          const headerLabelBtnAfterNext = container.querySelector(
            ".ui-calendar__header__label",
          )
          expect(headerLabelBtnAfterNext).toHaveTextContent(expectedNext)
        },
      )
    })

    describe("Enable Multiple Selection", () => {
      test.each([
        <Calendar key={1} enableMultiple />,
        <Calendar key={2} defaultValue={[]} />,
      ])("should render with enableMultiple %#", (jsx) => {
        const { container } = render(jsx)

        const monthDays = container.querySelectorAll(".ui-calendar__month__day")
        const selectDays = [monthDays[7], monthDays[10], monthDays[13]]
        selectDays.forEach((monthDayBtn) => {
          fireEvent.click(monthDayBtn!)
          expect(monthDayBtn).toHaveAttribute("data-selected")
        })

        const prevBtn = container.querySelector(
          `button.ui-calendar__header__control--prev`,
        )
        fireEvent.click(prevBtn!)

        const monthDaysPrev = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        const days = [monthDaysPrev[7], monthDaysPrev[10], monthDaysPrev[13]]
        days.forEach((monthDayBtn) => {
          fireEvent.click(monthDayBtn!)
          expect(monthDayBtn).toHaveAttribute("data-selected")
        })

        const nextBtn = container.querySelector(
          `button.ui-calendar__header__control--next`,
        )
        fireEvent.click(nextBtn!)
        selectDays.forEach((monthDayBtn) => {
          expect(monthDayBtn).toHaveAttribute("data-selected")
        })

        selectDays.forEach((monthDayBtn) => {
          fireEvent.click(monthDayBtn!)
          expect(monthDayBtn).not.toHaveAttribute("data-selected")
        })
      })
    })

    describe("Enable Range Selection", () => {
      test("should render with enableRange", () => {
        const { container } = render(<Calendar enableRange />)
        const prevBtn = container.querySelector(
          `button.ui-calendar__header__control--prev`,
        )
        fireEvent.click(prevBtn!)
        const monthDaysPrev = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        const selectDayFrom = monthDaysPrev[7]
        fireEvent.click(selectDayFrom!)
        expect(selectDayFrom).toHaveAttribute("data-selected")

        const nextBtn = container.querySelector(
          `button.ui-calendar__header__control--next`,
        )
        fireEvent.click(nextBtn!)
        fireEvent.click(nextBtn!)
        const monthDaysNext = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        const selectDayTo = monthDaysNext[7]
        fireEvent.click(selectDayTo!)
        expect(selectDayTo).toHaveAttribute("data-selected")

        Array.from(monthDaysNext)
          .splice(0, 8)
          .forEach((monthDayBtn) => {
            expect(monthDayBtn).toHaveAttribute("data-between")
          })

        fireEvent.click(prevBtn!)
        const monthDaysCurrent = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        expect(monthDaysCurrent[14]).toHaveAttribute("data-between")
      })
    })

    describe("Set Maximum Number of Selectable Values", () => {
      test("should render with enableMultiple maxSelectValues 3", () => {
        const { container } = render(
          <Calendar enableMultiple maxSelectValues={3} />,
        )
        const prevBtn = container.querySelector(
          `button.ui-calendar__header__control--prev`,
        )
        fireEvent.click(prevBtn!)
        const monthDaysPrev = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        const selectDay1 = monthDaysPrev[7]
        fireEvent.click(selectDay1!)
        expect(selectDay1).toHaveAttribute("data-selected")

        const nextBtn = container.querySelector(
          `button.ui-calendar__header__control--next`,
        )
        fireEvent.click(nextBtn!)
        const monthDaysCurrent = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        const selectDay2 = monthDaysCurrent[14]
        fireEvent.click(selectDay2!)
        expect(selectDay2).toHaveAttribute("data-selected")

        fireEvent.click(nextBtn!)
        const monthDaysNext = container.querySelectorAll(
          ".ui-calendar__month__day",
        )
        const selectDay3 = monthDaysNext[21]
        fireEvent.click(selectDay3!)
        expect(selectDay3).toHaveAttribute("data-selected")

        const selectDay4 = monthDaysNext[28]
        expect(selectDay4).toHaveAttribute("data-disabled")
      })
      test("should render with enableRange maxSelectValues 3", () => {
        const { container } = render(
          <Calendar enableRange maxSelectValues={3} />,
        )
        const monthDays = container.querySelectorAll(".ui-calendar__month__day")
        fireEvent.click(monthDays[14]!)
        expect(monthDays[14]).toHaveAttribute("data-selected")
        expect(monthDays[11]).toHaveAttribute("data-disabled")
        expect(monthDays[17]).toHaveAttribute("data-disabled")

        fireEvent.click(monthDays[16]!)
        expect(monthDays[15]).toHaveAttribute("data-between")

        fireEvent.click(monthDays[14]!)
        expect(monthDays[11]).toHaveAttribute("data-disabled")
        expect(monthDays[17]).toHaveAttribute("data-disabled")

        fireEvent.click(monthDays[12]!)
        expect(monthDays[13]).toHaveAttribute("data-between")
      })
    })

    describe("Disable (Hide) Elements", () => {
      test("should render with withHeader false", () => {
        const { container } = render(<Calendar withHeader={false} />)
        const header = container.querySelector(".ui-calendar__header")
        expect(header).toBeNull()
      })
      test("should render with withControls false", () => {
        const { container } = render(<Calendar withControls={false} />)
        const control = container.querySelector(".ui-calendar__header__control")
        expect(control).toBeNull()
      })
      test("should render with withLabel false", () => {
        const { container } = render(<Calendar withLabel={false} />)
        const headerLabel = container.querySelector(
          ".ui-calendar__header__label",
        )
        expect(headerLabel).toBeNull()
      })
      test("should render with withWeekdays false", () => {
        const { container } = render(<Calendar withWeekdays={false} />)
        const monthWeekday = container.querySelector(
          ".ui-calendar__month__weekday",
        )
        expect(monthWeekday).toBeNull()
      })
    })
  })
})
