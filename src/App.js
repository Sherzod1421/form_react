import React from "react";
import Form from "./Components/Form/Form";
import {Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className={"container"}>
            <Route exact path={'/'} component={Form}/>
            <Route exact path={'/profile'} component={Profile}/>
        </div>
    );
}


export default App;
