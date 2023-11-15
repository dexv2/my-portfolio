const truncateText = (text: string = ``, maxLength: number = 200): string => {
  var trimmedText = text.substr(0, maxLength);
  trimmedText = trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(` `)))
  return `${trimmedText} ...`;
}

export default truncateText;
