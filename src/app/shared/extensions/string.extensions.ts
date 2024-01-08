export { }

declare global {
  interface String {
    toCamelCase(): string;
    toPascalCase(): string;
  }
}

String.prototype.toCamelCase = function (): string {
  return this.replace(/^\w|[A-Z]|\b\w/g, (match, index) => {
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  }).replace(/\s+/g, '');
};

String.prototype.toPascalCase = function (): string {
  return this.toCamelCase().replace(/^\w/, match => match.toUpperCase());
};
