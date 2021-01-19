
export const initialState = {
    basket: [],
    user:null,
  };

  export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

  export const getBasketFinalTotal = (basket)=> getBasketTotal(basket)+ getBasketTotal*(8.25/100)+5.25;
  




  const reducer = (state, action) => {
    
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };

        case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
      
        case "REMOVE_FROM_BASKET":
        return {
          ...state,
          basket: state.basket.filter(item=>item.id !== action.id)
        }

        case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    


        default:
            return state;
    }
};

export default reducer;