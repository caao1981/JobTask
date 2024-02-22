import React from "react";
import StackCompoent from "../StackCompoent";
import { add, isEqual } from "date-fns";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const SingleDate = ({
  date,
  day,
  isSelected,
  selectHandler,
  dateString,
  selectedBGColor,
  selectedTextColor,
}) => {
  return (
    <StackCompoent
      sx={{
        alignItems: "center",
        backgroundColor: isSelected ? selectedBGColor : "#FFFFFF",
        color: isSelected ? selectedTextColor : "#000000",
        cursor: "pointer",
        borderRadius: relative_width_size_generator(20),
        height: relative_height_size_generator(74),
      }}
      justifyContent="center"
      className="single-date-row-date-picker"
      onClick={() => selectHandler(dateString)}
      direction="column"
    >
      <span>{date}</span>
      <span>{day}</span>
    </StackCompoent>
  );
};

const RowDatePicker = ({
  width,
  fullWidth,
  numberOfDates,
  startingDateWithoutZeroIndex,
  selectedDateIndex,
  selectedTextColor,
  selectedBGColor,
  getSelection,
  ...otherProps
}) => {
  const { date, month, year } = startingDateWithoutZeroIndex;

  const startDate = new Date(year, month - 1, date);

  const [selectedDate, setSelectedDate] = React.useState(
    add(new Date(startDate), { days: selectedDateIndex })
  );

  React.useEffect(() => {
    getSelection(selectedDate);
  }, [selectedDate]);

  return (
    <StackCompoent
      justifyContent="space-between"
      {...otherProps}
      sx={{ width: fullWidth ? "100%" : width }}
    >
      {new Array(numberOfDates).fill(null).map((_, index) => {
        const iteratedDate = add(startDate, { days: index });

        return (
          <SingleDate
            key={index}
            date={iteratedDate.getDate()}
            day={iteratedDate.toLocaleString("en-us", { weekday: "short" })}
            selectHandler={(e) => {
              setSelectedDate(new Date(e));
            }}
            isSelected={isEqual(iteratedDate, selectedDate)}
            dateString={iteratedDate.toDateString()}
            selectedBGColor={selectedBGColor}
            selectedTextColor={selectedTextColor}
          />
        );
      })}
    </StackCompoent>
  );
};

RowDatePicker.defaultProps = {
  width: "200px",
  fullWidth: true,
  numberOfDates: 11,
  startingDateWithoutZeroIndex: {
    date: 12,
    month: 5,
    year: 2023,
  },
  selectedDateIndex: 1,
  selectedTextColor: "#FFFFFF",
  selectedBGColor: "#000000",
  getSelection: (e) => {
    return;
  },
};

export default RowDatePicker;
