import {Routes, Route} from "react-router-dom";


function AllRoutes(){

    return (
        <Routes>
            <Route path="/"></Route>
            <Route path="/orders"></Route>
            <Route path="/cart"></Route>
            <Route path="login"></Route>
            <Route path="/register"></Route>
            <Route path="/notfound"></Route>
        </Routes>
    )
}

export default AllRoutes;