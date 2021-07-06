const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case 'ADD_ITEM':
      return {
        items: [action.payload, ...state.items],
      };

    case 'EDIT_ITEM':
      const updateItem = action.payload;

      const updateItems = state.items.map((item) => {
        if (item.id === updateItem.id) {
          return updateItem;
        }
        return item;
      });
      return {
        items: updateItems,
      };

    default:
      return state;
  }
};

export default AppReducer;
