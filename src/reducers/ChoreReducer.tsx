export const choreReducer = (state : any = {
    chores: [{
        id: 1,
        name: 'Mop the floor'
      },
      {
        id: 2,
        name: 'Sweep the floor'
      },
      {
        id: 3,
        name: 'Clean toilets'
      },
      {
        id: 4,
        name: 'Empty trashcans'
      }
    ]
}, action : any) => {
    switch(action.type) {
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;     
    }
}