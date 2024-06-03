import { Link, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";
import {auth} from '../firebase';
import { signOut } from "firebase/auth";
import { LuLogOut } from "react-icons/lu";
import { TbLogin } from "react-icons/tb";
const Header = () => {
 const navigate = useNavigate();
  const handleLogout = () => {               
    signOut(auth).then(() => {
    
        navigate("/");
     
    });

}

  const user = useSelector((state)=>state.user.user)
  return (
    <header className="sticky top-0 left-0 z-[9999] py-4 pb-6 sm:pb-4 border-b-4 border-slate-600 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="container max-w-[1300px] mx-auto flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between">
        <h1 className="font-primary font-bold text-xl">MoviesSR</h1>

        <div className="navigation flex flex-row items-center gap-6 text-base font-semibold font-secondary text-neutral-200">
          <SearchInput />
        </div>
        <div className="pointer" >
        {user?
          <div className="logo-logout1" onClick={handleLogout}>

            
            <div className='logo-logout flex justify-center items-center gap-1 cursor-pointer'> 
              <p>Logout</p>
          <LuLogOut/>
          </div>
         
          </div>:<div className="logo-logout flex justify-center items-center gap-1 cursor-pointer">
           <p>Login</p>
           <TbLogin/>
          </div>
         }
        </div>
      </div>
    </header>
  );
};

export default Header;
