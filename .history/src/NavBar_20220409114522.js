import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";


const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "9da65cf530174e218e154a9fdd4bc229" // required
      }
    }
  };
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  
  const provider = await web3Modal.connect();
  
  const web3 = new Web3(provider);
  

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