import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import user1 from "../assets/images/users/user4.jpg";
import Web3 from "web3";

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [currentAccount, setCurrentAccount] = React.useState(null);
  const [balance, setBalance] = React.useState(0);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  const connectMetaMaskHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      try {
        await provider.request({
          method: "eth_requestAccounts",
        });
        onConnectMetaMask(provider);
      } catch (err) {
        props.showError(err);
      }
    }
  };

  const onConnectMetaMask = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      props.showAlert(true);
    }
  };

  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          {/* <Logo /> */}
          <h4 style={{ color: "white", fontWeight: "bold", marginBottom: "0" }}>
            VOLTA
          </h4>
        </div>
        <NavbarBrand href="/">
          {/* <LogoWhite className=" d-lg-none" /> */}
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/dashboard" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/dashboard" className="nav-link">
              <button
                style={{
                  background: "none",
                  color: "inherit",
                  border: "none",
                  padding: "0",
                  font: "inherit",
                  cursor: "pointer",
                  outline: "inherit",
                }}
                onClick={connectMetaMaskHandler}
              >
                {currentAccount
                  ? `Wallet: ${currentAccount.substring(0, 9)}..`
                  : "Connect MetaMask"}
              </button>
            </Link>
          </NavItem>
          {currentAccount ? (
            <NavItem>
              <Link to="/dashboard" className="nav-link">
                Balance: {balance}
              </Link>
            </NavItem>
          ) : (
            ""
          )}
          {/* <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Wallet</DropdownItem>
            {/* <DropdownItem>Inbox</DropdownItem> */}
            <DropdownItem>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Logout
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
