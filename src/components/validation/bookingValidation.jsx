export const validateDates = (dates) => {
  if (!dates[0] || !dates[1]) {
    return "Please select a valid date range.";
  }
  return null;
};

export const validateGuests = (guests, maxGuests) => {
  if (guests < 1 || guests > maxGuests) {
    return `Number of guests must be between 1 and ${maxGuests}.`;
  }
  return null;
};
