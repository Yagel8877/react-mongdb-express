import { Link } from "react-router-dom";

function home(){
    return(
    <div>
        <p>home!</p>
        <Link to='/login'>login</Link>
    </div>
    )
};

export default home;