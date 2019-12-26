module.exports = function (str) {
  /* return whether str begins with the string "LITERALLY" */
    return /^[^0-9][^A-Z]/.test(str)
}
