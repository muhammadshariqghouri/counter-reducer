const counterReducer = (state, action) => {
    switch(action) {
        case 'Increase':
            return state + 1
        case 'Decrease':
            return state - 1
    }
}

export default counterReducer;