import logo from './logo.svg';
import './App.css';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal , Web3Button} from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";
const chains = [arbitrum, mainnet, polygon];
/*** Change It To Your Project ID */
const WalletProject_ID = "96bb8152c672836620037e3bc7d39133";
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: {WalletProject_ID} }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: {WalletProject_ID},
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Just Connect And Pay Easily
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <Web3Button />
      </header>
    </div>
    </WagmiConfig>

<Web3Modal
  projectId={WalletProject_ID}
  ethereumClient={ethereumClient}
/>
</>
  );
}

export default App;
