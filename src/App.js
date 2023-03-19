import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./App.css";

const App = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    connectToMetaMask();
  }, []);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Initialize web3
        const web3 = new Web3(window.ethereum);

        // Get user's account
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="app-container">
      <h1>MetaMask React App</h1>
      {account ? (
        <p className="connected-account">Connected Account: {account}</p>
      ) : (
        <p className="not-connected">Not connected</p>
      )}
    </div>
  );
};

export default App;
