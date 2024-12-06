import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingCalendar = () => {
  const [dates, setDates] = useState([null, null]);
  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md">
      <div className="flex justify-center gap-16 w-full mb-4 bg-[#EFE7DA] px-7 rounded-[20px]">
        <p className="text-sm uppercase font-semibold">
          Check in:{" "}
          <span className={`uppercase ${!dates[0] ? "break-words, ml-1" : ""}`}>
            {dates[0] ? dates[0].toLocaleDateString("en-EN", { day: "2-digit", month: "short" }) : "Select a date"}
          </span>
        </p>
        <p className="text-sm uppercase font-semibold">
          Check out:{" "}
          <span className={`uppercase ${!dates[1] ? "break-words, ml-1" : ""}`}>
            {dates[1] ? dates[1].toLocaleDateString("en-EN", { day: "2-digit", month: "short" }) : "Select a date"}
          </span>
        </p>
      </div>

      <Calendar
        selectRange={true}
        onChange={setDates}
        value={dates}
        locale="en-EN"
        className="react-calendar bg-[#F7F4F0] rounded-xl p-4"
        tileClassName={({ date }) =>
          dates[0] && dates[1] && dates[0] <= date && date <= dates[1] ? "bg-[#d6cfc7] font-bold" : ""
        }
        navigationLabel={({ date }) => date.toLocaleDateString("en-EN", { month: "long" }).toUpperCase()}
        formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: "short" }).charAt(0)}
      />
    </div>
  );
};

export default BookingCalendar;
