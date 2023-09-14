"use strict";

/** Formatting date
 * @private
 */
const dateType = {
  y: (date, length) => {
    const year = date.getFullYear();
    return year % 10 ** length;
  },
  M: (date, length) => {
    const month = date.getMonth() + 1;
    return String(month).padStart(length, "0");
  },
  d: (date, length) => {
    const day = date.getDate();
    return String(day).padStart(length, "0");
  },
  // time
  h: (date, length) => {
    const hour = date.getHours();
    return String(hour).padStart(length, "0");
  },
  m: (date, length) => {
    const minute = date.getMinutes();
    return String(minute).padStart(length, "0");
  },
  s: (date, length) => {
    const second = date.getSeconds();
    return String(second).padStart(length, "0");
  },
};

/** Converts a date to a string based on an expression.
 * @param {Number} date
 * @param {string} expression yyyy-mm-dd hh:mm:ss
 *
 * @return {string} yyyy-MM-dd
 */
export default function dateFormat(date, expression = "yyyy-MM-dd") {
  date = new Date(date);

  const result = [];
  const expressionSplit = expression.split(" ");

  for (const item of expressionSplit) {
    const temp = [];
    const delimiter = item.replace(/y|M|d|h|m|s/g, "")[0];
    const format = item.split(delimiter);

    for (const type of format) {
      temp.push(dateType[type[0]](date, type.length));
    }

    result.push(temp.join(delimiter));
  }

  return result.join(" ");
}
