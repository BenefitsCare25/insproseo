const names = new Map([
  ['claims help', 'Claims Support'], ['claims support', 'Claims Support'],
  ['about', 'About Us'], ['about inspro', 'About Us'],
  ['contact', 'Contact Us'],
]);

export function navigationLabel(value) {
  const name = names.get(value.trim().toLowerCase());
  if (name) return value.replace(value.trim(), name);
  return value.replace(/(^|[\s(/-])(\p{L})/gu, (_, prefix, letter) => prefix + letter.toUpperCase())
    .replace(/BenefitsCare For SME/g, 'BenefitsCare for SME');
}
