import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
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
       
        <Flex justify="space-between" align="center" padding="30px">
             <logo/>
            <flex justify="space-between" width="40%" padding="0 75px">
                <link href="https://localhost:3000">
                    <image src={logo} boxSize="42px" margin="0 15px" />
                </link>
            </flex>

            <flex
                justify="space-around"
                align="center"
                width="40%"
                padding="30px"
                >
            {/* connect */}
            {isConnected ? (
                <p>Conncted</p>
            ) : (
                <button onClick={connectAccount}>connect</button>
            )}

            </flex>



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