import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import Kongz from './Kongz/Kongz.json';

const KongzAddress = "0x0aee4e215fd9c07093fc7c31f67028e291c633c5";

const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                KongzAddress,
                Kongz.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            }   catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handlIncrement = () => {
        if (mintAmount >= 20) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div className="overlay"></div>
        <div>
            <h1>A collection of 10,000 Enhanced Apes NFTs—unique digital collectibles residing on the BSC blockchain.</h1>
            {isConnected ? (
            <div>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" value={mintAmount} />
                    <button onClick={handlIncrement}>+</button>
                </div>
                <button onClick={handleMint}>Mint Now</button>
            </div>
        ) : (
            <p>You must be connected to Mint</p>
        )}
        </div>
    
    );
};

export default MainMint; 