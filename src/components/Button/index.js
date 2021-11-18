import React from "react";
import { ButtonTag } from "./styles";

const Button = ({children , type, color}) => {
    return (
        <>
            <ButtonTag type={type} color={color}>
                {children} 
            </ButtonTag>
        </>
    )
}

export default Button