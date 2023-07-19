// @ts-check

/**
 * 1. Please show how you applied a Markdown File to a piece of your code.
 * 2. Please show how you applied JSDoc Comments to a piece of your code.
 * 3. Please show how you applied the @ts-check annotation to a piece of your code.
 * 4. As a BONUS, please show how you applied any other concept covered in the 'Documentation' module.
 **/

/**
 * Student Name
 * @type {string} - Student name type can only be a string
 **/
const studentName =
  "Ruan Pienaar";

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: "Ruan Pienaar",
  age: 37,
  isActive: true,
};
