import React from "react";
import { Box, Button, Flow, Image, Link, Spacer } from "@chakra-ui/react"
import logo from "./Assets/EnhancedApesLogo.png";

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
               method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            {/* { left side - socials } */}
            <div>Discord</div>
            <div>Twitter</div>
            <div>Email</div>

            {/* {RIght SIde - Section and connect} */}

            {/* connect */}
            {isConnected ? (
                <p>Conncted</p>
            ) : (
                <button onClick={connectAccount}>connect</button>
            )}
        </div>
    );

};

export default Navbar;