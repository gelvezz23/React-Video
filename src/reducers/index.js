
const reducer = (state, action) => {

    switch(action.type){

        case 'SET_FAVORITE':
            return {
                ...state,
                mylist:[...state.mylist, action.payload ]
            }

        case 'DELETE_FAVORITE':
            return{
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }

        case 'LOGIN_REQUEST':
            return{
                ...state,
                user:action.payload,
            } 
            
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload,     
            }
        
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(items => items.id === Number(action.payload)) 
                || state.original.find(items => items.id === Number(action.payload))
            }
            
        default:
            return state;
    }

};


export default reducer;