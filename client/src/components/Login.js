const axios = require('axios');


const Login = () => {
    const handleClickLogin = (e) => {
        e.preventDefault();

        const data = new FormData(document.querySelector("#login"));

        const username = data.get('userName')
        const pass = data.get('password')

        console.log(`${username} and ${pass}`)

        axios.post('/login', {
            userName: username,
            password: pass
        
        }).catch(err => console.log(err))
            
        }
        
    
    
    
    return ( 
        <div><form id="login" method='GET' action='/login'>
        <input name="userName" />
        <input name='password'/>
        <button onClick={(e) => {handleClickLogin(e)}}>click me</button>
        <p></p>
    </form>
    </div>

     );
}
 
export default Login;