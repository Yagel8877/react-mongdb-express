import { Link } from "react-router-dom";

function home(){
    return(
    <div>
        <p>home!</p>
        <p>youre in the home page</p>
        <Link to='/login'>login</Link>
    </div>
    )
};

export default home;