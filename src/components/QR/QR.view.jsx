import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

const CustomQR = function() {
  return (
    <Fragment>
      <QRCode value="http://facebook.github.io/react/" id="canvas" fgColor="#FFFFFF" bgColor="#fecb2e"/>
    </Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<CustomQR />, rootElement);

export default CustomQR;