type ObjectWithName = object & {
  name: string;
};

export function useSortNameAlphabetically(a: ObjectWithName, b: ObjectWithName): number {
  const nameA: string = a.name.toUpperCase();
  const nameB: string = b.name.toUpperCase();
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
}
