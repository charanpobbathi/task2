import { GET_DETAILS } from '../Types';

 

export const apiReducer =  (state,actions) => {

    switch (actions.type) {

        case GET_DETAILS:
           return{
                ...state,
                data:actions.payload
            }
        default:
           return{
                   ...state,
                }
    }
}
export default apiReducer;