import { useState, useEffect } from "react";
import CalendarDisplay from "./UI/CalenderDisplay";
import GuestSelector from "./UI/GuestSelector";
import BookingButton from "./UI/BookingButton";
import { BOOKINGS_URL, API_KEY } from "../API/constants";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const BookingCalendar = ({ venueId, maxGuests }) => {
  const [dates, setDates] = useState([null, null]);
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [bookedDates, setBookedDates] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${venueId}?_bookings=true`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bookings.");
        }

        const data = await response.json();

        const bookings = data?.data?.bookings || [];
        const dates = bookings.map((booking) => ({
          startDate: new Date(booking.dateFrom),
          endDate: new Date(booking.dateTo),
        }));

        setBookedDates(dates);
      } catch (error) {
        console.error(error);
        setMessage("Could not fetch booked dates.");
      }
    };

    if (venueId && token) {
      fetchBookings();
    }
  }, [venueId, token]);

  const handleBooking = async () => {
    if (!dates[0] || !dates[1]) {
      setMessage("Please select a date range.");
      return;
    }
    if (guests < 1 || guests > maxGuests) {
      setMessage(`Number of guests must be between 1 and ${maxGuests}.`);
      return;
    }

    const bookingData = {
      dateFrom: dates[0].toISOString(),
      dateTo: dates[1].toISOString(),
      guests,
      venueId,
    };

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(BOOKINGS_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || "Failed to create booking.");
      }

      const data = await response.json();
      setBookingDetails(data);
      setMessage("Booking successful!");
    } catch (error) {
      setMessage(error.message || "Failed to book. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Redirect to login if not logged in
  const handleLoginRedirect = () => {
    navigate("/login"); // Use navigate instead of history.push
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md">
      {token ? (
        <>
          <GuestSelector guests={guests} setGuests={setGuests} maxGuests={maxGuests} />
          <CalendarDisplay dates={dates} setDates={setDates} bookedDates={bookedDates} />
          <BookingButton handleBooking={handleBooking} loading={loading} />
          {bookingDetails && message && <p className="mt-4 text-center">{message}</p>}
        </>
      ) : (
        <button onClick={handleLoginRedirect} className="bg-primary text-white px-2 py-1 rounded-xl mt-3">
          Login to book
        </button>
      )}
    </div>
  );
};

BookingCalendar.propTypes = {
  venueId: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

export default BookingCalendar;
