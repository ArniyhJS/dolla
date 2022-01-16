import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = ({ alt, form, disabled, children, onClick, ...props }) => (
  <ButtonBack alt={alt} form={form} disabled={disabled} {...props}>
    {children}
    <ButtonFront alt={alt} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
