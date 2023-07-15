import { Link } from 'react-router-dom/cjs/react-router-dom';

const Header = ()=> {
    return (
        <div>

            <h1>FRİENDS DATABASE</h1>

                <Link to='/login'>
                    <button>LOGIN.</button>
                </Link>

                <Link to='/friends'>
                    <button>FRIENDSLIST.</button>
                </Link>

                <Link to='/friends_add'>
                    <button>ADDFRIENDS.</button>
                </Link>

                <Link to='/logout'>
                    <button>LOGOUT.</button>
                </Link>

        </div>
    )
}

export default Header;