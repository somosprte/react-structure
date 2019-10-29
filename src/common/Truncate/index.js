export default function(string, length, separator = ' [...]') {
  return string !== undefined ? `${string.substring(0, length)}${string.length > length ? separator : ''}` : '';
}
