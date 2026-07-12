const CartReducer = (state, action) => {
    switch(action.type){
        case "Add":
            {
            const idx = state.findIndex(p=> p.id === action.image.id);
            if(idx !== -1) {
                return state.map((item, i) =>
                    i === idx ? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...state, {...action.image, quantity: 1}];
            }
        case "Increment":
            { const idx = state.findIndex(p => p.id === action.id);
            if(idx === -1) {
                return state;
            }
            return state.map((item, i) =>
                i === idx ? {...item, quantity: item.quantity + 1} : item
            ); }
        case "Decrement":
            { const idx = state.findIndex(p => p.id === action.id);
            if(idx === -1 || state[idx].quantity <= 1) {
                return state;
            }
            return state.map((item, i) =>
                i === idx ? {...item, quantity: item.quantity - 1} : item
            ); }
        case "Reset":
            return state.filter(p => p.id !== action.id);
        default:
            return state;
    }
};

export default CartReducer;
