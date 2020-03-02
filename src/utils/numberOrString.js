module.exports = function numberOrString(numberOrString) {
  if (typeof numberOrString === 'number') {
    return true;
  } else {
    return false;
  };
};
