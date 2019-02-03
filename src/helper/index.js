export const getCategoryFromId = (id, data) => {
  return data.find((el) => el.id === id)
}