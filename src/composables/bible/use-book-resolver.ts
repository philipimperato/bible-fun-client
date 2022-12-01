export const useBookResolver = (name: string): number => {
  switch (name) {
    case 'Psalms': return 19
    default: return 1
  }
}
