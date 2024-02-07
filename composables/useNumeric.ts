const isNumeric: RegExp = /^[^a-zA-Z]+$/;

export const numeric = (value: string): boolean => isNumeric.test(value);