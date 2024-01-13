import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
const Header = () => {
  return (
    <div>
      <div className="bg-[#1C2B35] h-20 flex justify-between items-center">
          <Link to="/"><img className="ml-20" src={logo} alt="" /></Link>
          <div className="text-white mr-20">
            <Link className="ml-7 hover:text-orange-300" to="/">Shop</Link>
            <Link className="ml-7 hover:text-orange-300" to="/order">Order</Link>
            <Link className="ml-7 hover:text-orange-300" to="/inventory">Inventory</Link>
            <Link className="ml-7 hover:text-orange-300" to="/login">Login</Link>
            <Link className="ml-7 hover:text-orange-300" to="/signup">Sign Up</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
