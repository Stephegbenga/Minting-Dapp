import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react"

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
            <Box margin="0 15px">About</Box>
            <Spacer />
            <Box margin="0 15px">Mint</Box>
            <Spacer />
            <Box margin="0 15px">Team</Box>
            <Spacer />

            
            {/* connect */}
            {isConnected ? (
                <box margin="0 15px">Conncted</box>
            ) : (
                <Button
                    backgroundColor="#f7cd2a"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #f7cd2a"
                    color="white"
                    fontFamily="inherit"
                    padding="10px"
                    margin="0 10px"
                    onClick={connectAccount}
                >
                    connect
                </Button>
            )} 
            </Flex>
        </Flex>
    );

};

export default Navbar;