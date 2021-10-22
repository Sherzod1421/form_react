import {connect} from "react-redux";

function Profile(props){
    return(
        <h1>{props.login}</h1>
    )
}

function mapStateToProps(state){
    return{
        login: state.formReducers.login,
    }
}


export default connect(mapStateToProps, ()=>{return {}})(Profile);