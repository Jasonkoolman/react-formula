/**
 * Commonly used regular expressions.
 */
 export const Regex = Object.freeze({
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumber: /^\+?\(?(?:[0-9]-?\)? ?){7,15}\)?$/,
    countryCode: /^(\+[\d-]{1,5})$/,
    alpha: /^([a-zA-Z]+)$/,
    alphaNumeric: /^([a-zA-Z0-9]+)$/,
    alphaSpaces: /^[a-zA-Z\s]*$/,
});
