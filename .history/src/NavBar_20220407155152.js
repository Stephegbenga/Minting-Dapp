import React from "react";
import { Box, Button, Flex, Flow, Image, Link, Spacer } from "@chakra-ui/react"
import Discord from "./Assets/icons8-discord-100(1).png";
import Twitter from "./Assets/icons8-twitter-100.png"
import Facebook from "./Assets/icons8-facebook-100.png";

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
       x>

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