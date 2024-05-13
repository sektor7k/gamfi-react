import { useState } from "react";
import { MdNotes, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavWrapper from "./Header.style";
import Button from "components/button";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect } from "react";

import data from "assets/data/menu/menuData";
import logo from "assets/images/logo.png";
import connectIcon from "assets/images/icons/connect.png";

import { connect, disconnect } from 'starknetkit'

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [address, setAddress] = useState('');
  const [isConnect, setIsConnect] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const handleWalletConnection = async () => {
    if (isConnect) {
      
      await disconnect();
      setAddress('');
      setIsConnect(false);
    } else {
      
      try {
        const { wallet } = await connect();
        if (wallet && wallet.isConnected) {
          setAddress(wallet.selectedAddress);
          setIsConnect(true);
        }
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    }
  };

  useEffect(() => {

    const connectToStarknet = async () => {

      const { wallet } = await connect({ modalMode: "neverAsk" })

      if (wallet && wallet.isConnected) {
        setAddress(wallet.selectedAddress);
        setIsConnect(true);
      }
    };

    connectToStarknet();
  }, [])

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="gamfi nft logo" />
              </a>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              <ul>
                {data?.map((menu, i) => (
                  <li key={i}>
                    <a href={menu.url}>{menu.title} {menu.subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}</a>
                    {menu.subMenus?.length > 0 && (
                      <ul className="sub_menu_list">
                        {menu.subMenus?.map((subMenu, i) => (
                          <li key={i}>
                            <a href={subMenu.url}>{subMenu.title} {subMenu?.subMenuChilds?.length > 0 && <MdOutlineKeyboardArrowRight />}</a>
                            {subMenu?.subMenuChilds?.length > 0 && (
                              <ul className="sub_menu_child_list">
                                {subMenu?.subMenuChilds?.map((subChild, i) => (
                                  <li key={i}>
                                    <a href={subChild.url}> {subChild.title} </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
              <button className="menu_btn" onClick={handleMobileMenu}>
                <MdNotes />
              </button>
              <a href="/login" className="wallet_btn">Login</a>
              <Button
                href="#"
                sm
                variant="white"
                className="connect_btn"
                onClick={handleWalletConnection}
              >
                <img src={connectIcon} alt="icon" />
                {isConnect ? address.slice(0, 9) + '..' : 'Connect'}
              </Button>
            </div>
          </div>
        </div>
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;

