export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
