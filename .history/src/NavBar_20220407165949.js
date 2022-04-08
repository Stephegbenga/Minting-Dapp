import React from "react";
import { Box, Button, Flex, Flow, Image, Link, Spacer } from "@chakra-ui/react"

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
            {/* { left side - socials } */}

            <Flex justify="space-around" width="40%" padding="0 75px">
            
            </Flex>

            {/* {RIght SIde - Section and connect} */}
            <Flex
                justify="space-around"
                align="center"
                width="40%"
                padding="30px"
            >
            <box margin="0 15px">About</box>
            <Spacer />
            <box margin="0 15px">Mint</box>
            <Spacer />
            <box margin="0 15px">Team</box>
            <Spacer />

            
            {/* connect */}
            {isConnected ? (
                <box margin="0 15px">Conncted</box>
            ) : (
                <button
                    background
                onClick={connectAccount}>connect</button>
            )} 
            </Flex>
        </Flex>
    );

};

export default Navbar;