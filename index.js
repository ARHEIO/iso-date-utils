export default function createProperISOString(date) {
  const dateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${('0' + date.getDate()).slice(-2)}`;
  const timezoneOffset = -date.getTimezoneOffset() / 60;

  let timezoneOffsetAsHours
  if (Number.isInteger(timezoneOffset)) {
    timezoneOffsetAsHours = `${('0' + Math.abs(timezoneOffset)).slice(-2)}:00`;
  } else {
    timezoneOffsetAsHours = `${('0' + Math.abs(Math.floor(timezoneOffset))).slice(-2)}:30`;
  }
  timezoneOffsetAsHours = timezoneOffset < 0 ? `-${timezoneOffsetAsHours}` : `+${timezoneOffsetAsHours}`;
  return dateTime + timezoneOffsetAsHours;
}