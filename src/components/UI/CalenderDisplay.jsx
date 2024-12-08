import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PropTypes from "prop-types";

const CalendarDisplay = ({ dates, setDates, bookedDates }) => {
  const isDateBooked = (date) => {
    return bookedDates.some((booking) => {
      const startDate = new Date(booking.startDate);
      const endDate = new Date(booking.endDate);

      date.setHours(0, 0, 0, 0);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      return date >= startDate && date <= endDate;
    });
  };

  return (
    <div className="flex flex-col items-center w-full mb-4">
      <div className="flex justify-between w-full bg-[#EFE7DA] px-7 py-1 rounded-[20px] text-sm font-semibold uppercase mb-4">
        <p>
          Check in:{" "}
          <span>
            {dates[0]
              ? dates[0].toLocaleDateString("en-EN", {
                  day: "2-digit",
                  month: "short",
                })
              : "Select a date"}
          </span>
        </p>
        <p>
          Check out:{" "}
          <span>
            {dates[1]
              ? dates[1].toLocaleDateString("en-EN", {
                  day: "2-digit",
                  month: "short",
                })
              : "Select a date"}
          </span>
        </p>
      </div>
      <Calendar
        selectRange={true}
        onChange={setDates}
        value={dates}
        locale="en-EN"
        className="react-calendar bg-[#F7F4F0] mx-auto rounded-xl p-4"
        tileClassName={({ date }) => {
          if (dates[0] && dates[1] && dates[0] <= date && date <= dates[1]) {
            return "bg-[#d6cfc7] font-bold";
          }
          return "";
        }}
        tileDisabled={({ date }) => isDateBooked(date)}
      />
    </div>
  );
};

CalendarDisplay.propTypes = {
  dates: PropTypes.array.isRequired,
  setDates: PropTypes.func.isRequired,
  bookedDates: PropTypes.array.isRequired,
};

export default CalendarDisplay;
