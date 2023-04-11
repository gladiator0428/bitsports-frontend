import { MenuBars, OfficialLogo } from "@/public/icons";
import PoolLogo from "@/public/pool-logo.png";
import Image from "next/image";
import { useState } from "react";
import Button, { variantTypes } from "../Button";
import Login from "../Login";
import Modal from "../Modal";
import { MobileNav } from "../Nav";
import Signup from "../Signup";

const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleLogin = () => {
    setIsOpenSignup(false);
    setIsOpenLogin(!isOpenLogin);
  };
  const toggleSignup = () => {
    setIsOpenLogin(false);
    setIsOpenSignup(!isOpenSignup);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="bg-primary-200 small-border-b xl:border-b-primary-150 border-b-black">
        <header className="hidden w-full xl:flex xl:items-center xl:justify-between container mx-auto py-6">
          <div>
            <h1 className="text-3xl font-bold text-white">BITPOOL</h1>
            <div className="flex items-center justify-center gap-1">
              <OfficialLogo size="22" />
              <div className="text-primary-300 text-sm pt-0.5 font-Poppins">
                Official Page
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <Button
              variant={variantTypes.outline}
              px="px-5"
              text="Create Challenge"
            />
            <div className="flex items-center gap-4">
              <Button onClick={toggleSignup} px="px-7" text="SIGN UP" />
              <Button
                onClick={toggleLogin}
                variant={variantTypes.outline}
                text="SIGN IN"
              />
            </div>
          </div>
        </header>
        <header className="flex justify-between items-center xl:hidden bg-primary-50 px-5 py-4">
          <div className="flex items-center gap-6">
            <div onClick={toggleNav}>
              <MenuBars />
            </div>
            <Image
              priority={true}
              height={53.75}
              width={65.39}
              src={PoolLogo}
              alt="pool logo"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">BITPOOL</h1>
              <div className="flex items-center justify-center gap-1">
                <OfficialLogo size="15" />
                <div className="text-primary-300 text-xs pt-0.5 font-Poppins">
                  Official Page
                </div>
              </div>
            </div>
          </div>
          <Button onClick={toggleSignup} text="SIGN UP" />
        </header>
      </div>
      <MobileNav open={isNavOpen} close={toggleNav} />
      <Modal key={0} Body={Login} isOpen={isOpenLogin} close={toggleLogin} />
      <Modal key={1} Body={Signup} isOpen={isOpenSignup} close={toggleSignup} />
    </>
  );
};

export default Header;
