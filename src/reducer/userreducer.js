const userReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "API_ERROR":
            return {
                ...state,
                isError: true,
            };
        case "MY_API_DATA":
            
            // using function
            const DonerUsers = action.payload.filter((curElem) => {
                return curElem.isDoner=== true;
            })
            
            return {
                ...state,
                isLoading: false,
                isError: false,
                users: action.payload,
                donerusers: DonerUsers,
            };
       
        default:
            return state;
    };
};
export default userReducer;