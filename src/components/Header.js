import {Link} from 'react-router-dom'
import "./Header.css"

function Header() {
    return ( 
        <div>
            <Link to="/band"><img src="https://upload.wikimedia.org/wikipedia/de/f/f2/Black_Sabbath_Logo.jpg" alt="blackSabbathLogo" className='m-auto mt-10 w-96'/></Link> 
            <ul className='flex pt-10 gap-10 text-white justify-center text-2xl'>
                <Link to='/vocals'>Vocals</Link>
                <Link to='/guitar'><li>Guitar</li></Link>
                <Link to='/bass'>Bass</Link>
                <Link to='/drums'>Drums</Link>
            </ul>
            
        </div>
     );
}

export default Header;