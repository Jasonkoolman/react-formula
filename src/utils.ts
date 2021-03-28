/**
 * Slugifies the given string.
 */
export const slugify = (str: string, separator = "-") => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove invalid chars
    .replace(/\s+/g, separator); // replace whitespaces
};

/**
 * Merges the default classes with additional classes.
 *
 * Keys of the `classes` object that do not exist in the
 * defaultClasses object will be ignored.
 */
export const mergeClasses = (
  defaultClasses: { [key: string]: string },
  classes: { [key: string]: string } = {}
) => {
  return Object.keys(defaultClasses).reduce((result, key) => {
    const defaultClass = defaultClasses[key];
    const customClasses = classes[key];
    result[key] = customClasses
      ? defaultClass + " " + customClasses
      : defaultClass;
    return result;
  }, {} as { [key: string]: string });
};

/**
 * Generates a unique ID for use as pseudo-private/protected names.
 *
 * @param {any} value
 * @returns {boolean}
 */
export const generateId = (prefix = "") => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9
  // characters after the decimal.
  return prefix + "_" + Math.random().toString(36).substr(2, 9);
};

/**
 * Logs internal errors to the console.
 */
export const warn = (message: string): null => {
  console.warn(message);
  return null;
};

/**
 * Determines whether the given value is considered empty.
 */
export const isEmptyInputValue = (value: any): boolean => {
  return value === null || value === undefined || value.length === 0;
};

export const isFunction = (obj: any): obj is Function => {
  return typeof obj === "function";
};

export const validatorMessage = <V = any>(
  { message, value }: { message?: string | ((value: V) => string); value: V },
  defaultMessage: string
): string => {
  return message
    ? isFunction(message)
      ? message(value)
      : message
    : defaultMessage;
};
