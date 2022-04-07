import { useState } from 'react';
import './Mint.css';
import MainMint from './MainMint'
import Navbar from './NavBar'

function Mint() {
    const [accounts, setAccounts] = useState([]);

    return (
        <div className=''
        <div className='Mint'>
            <Navbar accounts={accounts} setAccounts={setAccounts} />
            <MainMint accounts={accounts} setAccounts={setAccounts} />
        </div>
    );
}

export default Mint;
