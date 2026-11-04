
const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add": {
            const selectedSize =
                action.image.selectedSize || action.image.sizes?.[0];

            const price =
                action.image.priceBySize?.[selectedSize] ??
                action.image.price;

            const idx = state.findIndex(
                p => p.id === action.image.id
            );

            if (idx !== -1) {
                return state.map((item, i) =>
                    i === idx
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...state,
                {
                    ...action.image,
                    selectedSize,
                    price,
                    quantity: 1,
                },
            ];
        }

        case "Increment": {
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }

        case "Decrement": {
            return state.map(item =>
                item.id === action.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        }

        case "UpdateSize": {
            return state.map(item =>
                item.id === action.id
                    ? {
                        ...item,
                        selectedSize: action.size,
                        price: item.priceBySize[action.size],
                    }
                    : item
            );
        }

        case "Reset":
            return state.filter(p => p.id !== action.id);

        default:
            return state;
    }
};

export default CartReducer;
