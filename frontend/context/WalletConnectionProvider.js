import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import { Connection } from "@solana/web3.js";
import { useMemo } from "react"; 


const HttpProvider = "https://hardworking-snowy-paper.solana-devnet.discover.quiknode.pro/41f01cbe84b1e4444b932d7f3aed31ad5f1b7296/";


const WalletConnectionProvider = ({children}) => {  
    const endpoint = useMemo (() => HttpProvider, [])
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

    return (
        <ConnectionProvider endpoint = {endpoint} >
         
        <WalletProvider wallets = {wallets} >
        
        <WalletModalProvider > {children} </WalletModalProvider>
        </WalletProvider>

        </ConnectionProvider>
    )
}

export default WalletConnectionProvider