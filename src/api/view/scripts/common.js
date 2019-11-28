String.prototype.format = function() {
  current = this;
  for (single_argument in arguments) {
    current = current.replace("{" + single_argument + "}", arguments[single_argument]);
  }
      return current;
  }