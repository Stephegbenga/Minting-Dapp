import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { Box, Button, Flow, Image, Link, Spacer } from "@chakra-ui/react";
import logo from "./Assets/Logo/Enhanced Apes Logo.png";

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
       
        <Flex justify="space-between" align="center" padding="30px">
            {/* { Logo } */}
            <flex justify="space-between" width="40%" padding="0 75px">logo</flex>

            {/* connect */}
            {isConnected ? (
                <p>Conncted</p>
            ) : (
                <button onClick={connectAccount}>connect</button>
            )}
        </Flex>
    );

};

export default Navbar;