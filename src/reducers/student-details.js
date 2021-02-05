export const studentsDetails = (state = null, action) => {
  console.log('here' + action)
  if (action.type === 'STUDENT-DETAILS') {
    return action.payload
  }
  return state
}
