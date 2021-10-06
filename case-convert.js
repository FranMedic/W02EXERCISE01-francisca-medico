function kebabcase(stringText) {
  if (stringText.trim().length < 1) {
    return "You must provide some text";
  }
  //let noSpaceString = tryString.split(" ").join("");
  for (let i = 0; i <= stringText.length; i++) {
    if (stringText[i] === " ") {
      return "This text is not in kebab-case";
    }
    if (stringText[i] === "_") {
      return "The text contains underscores";
    } else if (!(stringText[i] === stringText[i].toLowerCase())) {
      return "The text contains capital letters";
    }
  }

  return `${stringText} is written in kebab-case.`;
}

module.exports = kebabcase;
