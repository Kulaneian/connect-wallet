import { Wallet } from '@harmonicpool/cardano-wallet-interface';

export const connectNami = async () => {
  if (Wallet.has(Wallet.Names.Nami)) {
    if (!await Wallet.isEnabled(Wallet.Names.Nami)) {
      Wallet.enable(Wallet.Names.Nami)
    }
  }
}

const WalletConnector = () => {
  return (
    <button
      onClick={() => connectNami}
      className='w-48 mt-8 text-white bg-blue-500 shadow-xl h-14 rounded-xl hover:scale-95'>
      Connect wallet
    </button>

  )
}

export default WalletConnector;