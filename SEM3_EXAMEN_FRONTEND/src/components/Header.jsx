import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{marginTop:'40px'}}>
      <ul className="header">
        <li> <NavLink exact activeClassName="active" to="/"> Home </NavLink></li>
  
          <li><NavLink activeClassName="active" to="/mypage">MyPage</NavLink></li>
         
      </ul>
    </div>
  );
}

export default Header;
