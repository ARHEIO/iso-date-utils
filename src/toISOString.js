/**
 * @license
 * Copyright Adam Eggleston. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

function toISOString(date) {

  const newDate = `${date.getFullYear()}-${date.getMonth() + 1}-${('0' + date.getDate()).slice(-2)}`;
  const time = `T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const timezoneOffset = -date.getTimezoneOffset() / 60;

  let timezoneOffsetAsHours
  if (Number.isInteger(timezoneOffset)) {
    timezoneOffsetAsHours = `${('0' + Math.abs(timezoneOffset)).slice(-2)}:00`;
  } else {
    timezoneOffsetAsHours = `${('0' + Math.abs(Math.floor(timezoneOffset))).slice(-2)}:30`;
  }
  timezoneOffsetAsHours = timezoneOffset < 0 ? `-${timezoneOffsetAsHours}` : `+${timezoneOffsetAsHours}`;
  return newDate + time + timezoneOffsetAsHours;
}

module.exports = toISOString;