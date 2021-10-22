const initialState = {
    login: '',
    password: '',
    disabledBtn: true
}


function formReducers(state=initialState, action){
    switch (action.type) {
        case "FORM_SUBMIT":
            return {
                ...state,
                login: action.login,
                password: action.password,
                disabledBtn: false
            }
        case "LOGIN_CHANGE":
            if(action.payload ==='developer21' && state.password==='123456'){
                return {
                    ...state,
                    login: action.payload,
                    disabledBtn: false
                }
            }else{
                return {
                    ...state,
                    login: action.payload,
                    disabledBtn: true,
                }
            }
        case "PASSWORD_CHANGE":
            if(state.login === 'developer21' && action.payload==='123456'){
                return {
                    ...state,
                    password: action.payload,
                    disabledBtn: false
                }
            }else{
                return {
                    ...state,
                    password: action.payload,
                    disabledBtn: true
                }
            }
        default:
            return state;
    }
}

export default formReducers;