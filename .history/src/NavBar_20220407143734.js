import React from "react";
import { Box, Button, Flex, Flow, Image, Link, Spacer } from "@chakra-ui/react"
import discord from "icons8-discord-100.png";
import twitter from "icons8-twitter-100.png"
import facebook from 

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
                <link href="https://www.discord.com">
                    <image src={discord} boxSize="42px" margin="0 15px">
                </link>
            </Flex>
            <div>Twitter</div>
            <div>Email</div>

            {/* {RIght SIde - Section and connect} */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

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