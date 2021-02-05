export const studentsList = (state = null, action) => {
  if (action.type === 'STUDENTs-LIST') {
    return action.payload
  }
  return state
}
