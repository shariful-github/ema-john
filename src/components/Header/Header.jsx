import logo from "../../assets/images/Logo.svg";
const Header = () => {
  return (
    <div>
      <div className="bg-[#1C2B35] h-20 flex justify-between items-center">
          <img className="ml-20" src={logo} alt="" />
          <div className="text-white mr-20">
            <a className="ml-7 hover:text-orange-300" href="">Order</a>
            <a className="ml-7 hover:text-orange-300" href="">Order Review</a>
            <a className="ml-7 hover:text-orange-300" href="">Manage Inventory</a>
            <a className="ml-7 hover:text-orange-300" href="">Login</a>
          </div>
      </div>
    </div>
  );
};

export default Header;
