import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function ConnectWallet() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
        setWalletConnected(true);
        setConnButtonText("Wallet Connected");
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      alert("Please Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  return (
    // conectbtn
    <div className="">
      <p className="" onClick={connectHandler}>
        {/* {connButtonText} */}
        {walletConnected ? (
          <>
            <img className="img_conect1" src="/images/Connected.png" alt="" />
          </>
        ) : (
          <>
            <img className="img_conect1" src="/images/Connect.png" alt="" />
          </>
        )}
      </p>
    </div>
  );
}

export default ConnectWallet;
