import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


function Form(props) {

    function formSubmit(e){
        props.submitForm(props.login, props.password)
    }

    function loginChange(e){
        let text = e.target.value
        props.loginDispatch(text);
    }

    function passwordChange(e) {
        props.passwordDispatch(e.target.value)
    }


    return (
        <div className={'row'}>
            <div className={'col-md-3 m-auto'}>
            <form action="/profile" className={'form-control'} onSubmit={formSubmit}>
                <p>Login</p>
                <input type={'text'} className={'m-2 form-control'} value={props.login} onChange={loginChange}/>
                <p>Password</p>
                <input type="password" className={'m-2 form-control'} value={props.password} onChange={passwordChange}/>
                <button className={'btn btn-success d-block'} type={'submit'} disabled={props.disabledBtn}>
                    <NavLink to={'/profile'}>Войти</NavLink>
                </button>
            </form>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        login: state.formReducers.login,
        password: state.formReducers.password,
        disabledBtn: state.formReducers.disabledBtn
    }
}

function mapDispatchToProps(dispatch){
    return {
        submitForm: (login, password)=>{
            console.log(login,password)
        },
        loginDispatch: (text)=>{
            dispatch({
                type: "LOGIN_CHANGE",
                payload: text
            })
        },
        passwordDispatch: (passwordText)=>{
            dispatch({
                type: "PASSWORD_CHANGE",
                payload: passwordText
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)