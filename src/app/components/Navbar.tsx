import Image from 'next/image';
import logo from '../images/logo.png';

export default function Navbar() {
    return (
      <div className="w-full h-16 bg-black bg-opacity-90 shadow-xl flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="ModularPrompts Logo" className="h-12 w-12" />
          <h4 className="text-white">ModularPrompts</h4>
        </div>
        <div className="flex items-center space-x-6">
          <h4 className="text-white">Browse</h4>
          <h4 className="text-white">Sign In</h4>
        </div>
      </div>
    );
  }
  
