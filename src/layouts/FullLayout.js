import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container, Alert } from "reactstrap";

const FullLayout = () => {
  const [alert, setAlert] = useState(false);
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);
  const [error, setError] = React.useState(null);

  const onDismiss = () => {
    setVisible(false);
  };
  const showAlert = (boolean) => {
    if (boolean) {
      setAlert(true);
    }
  };
  const showError = (err) => {
    if (err && err.code == -32002) {
      const message = `${err.message} Or Connect to Metamask via the extenstion.`;
      setError(message);
    } else {
      setError(err.message);
    }
  };

  const location = useLocation();
  let isSuccessfulLogin;
  if (location && location.state) {
    isSuccessfulLogin = location.state.isSuccessfulLogin;
  }

  return (
    <main>
      {/********header**********/}
      <Header showAlert={showAlert} showError={showError} />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            {alert ? (
              <Alert
                color="info"
                isOpen={visible}
                toggle={onDismiss.bind(null)}
              >
                Wallet Connected
              </Alert>
            ) : (
              ""
            )}

            {isSuccessfulLogin ? (
              <Alert
                color="info"
                isOpen={visible}
                toggle={onDismiss.bind(null)}
              >
                Login Successful
              </Alert>
            ) : (
              ""
            )}

            {error ? (
              <Alert
                color="danger"
                isOpen={visible}
                toggle={onDismiss.bind(null)}
              >
                Error: {error}
              </Alert>
            ) : (
              ""
            )}

            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
