const formatTime = async (time) => {
  const timeString = String(time);
  return `${
    parseInt(timeString.slice(0, 2)) > 12
      ? parseInt(timeString.slice(0, 2) - 12)
      : parseInt(timeString.slice(0, 2))
  }:${timeString.slice(2, 4)} ${
    parseInt(timeString.slice(0, 2)) > 12 ? "PM" : "AM"
  } `;
};

const formatRemainingTime = async (remaining) => {
  return `${remaining.months} months, ${remaining.days} days`;
};

export default { formatTime, formatRemainingTime };
