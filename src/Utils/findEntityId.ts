export function findEntityId(url: string): string {
  const array = url.split('/');
  return array[array.length - 2];
}
