import React from "react";

export const isValidEmail = (email: string) => {
    const regexEmail = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    return regexEmail.test(email)
}

