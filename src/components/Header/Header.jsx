import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('sign out successful');
      }).catch((error) => {
        console.log('sign out Unsuccessful');
      });
  }

  return (
    <div>
      <div className="bg-[#1C2B35] h-20 flex justify-between items-center">
        <Link to="/"><img className="ml-20" src={logo} alt="" /></Link>
        <div className="text-white mr-20">
          <Link className="ml-7 hover:text-orange-300" to="/">Shop</Link>
          <Link className="ml-7 hover:text-orange-300" to="/order">Order</Link>
          <Link className="ml-7 hover:text-orange-300" to="/inventory">Inventory</Link>
          {
            user ?
              <div>
                <span className="ml-7 text-lime-600" >{user.email}</span>
                <button onClick={handleLogOut} className="ml-5 bg-lime-800 hover:bg-green-900 text-white py-1 px-4 rounded">Log Out</button>
              </div>
              :
              <Link className="ml-7 hover:text-orange-300" to={'/login'}>Login</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;
