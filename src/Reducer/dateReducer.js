
export const dateReducer = (state, {type, payload}) => {
    switch(type) {
        default:
            return state;
        case 'ChangeMonth':
            return {
                ...state,
                month: payload
            }
        case 'ChangeYear':
            return {
                ...state,
                year: payload
            }
    }
}