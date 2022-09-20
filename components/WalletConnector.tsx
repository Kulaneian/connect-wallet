import { Wallet } from '@harmonicpool/cardano-wallet-interface';

export const connectNami = async () => {
  Wallet.enable(Wallet.Names.Nami)
}


export const connectTyphon = async () => {
  Wallet.enable(Wallet.Names.Typhon)
}

const WalletConnector = () => {
  return (
    <div className='flex flex-row gap-10'>
      <button
        onClick={() => connectNami()}
        className='w-48 mt-8 text-white bg-blue-500 shadow-xl h-14 rounded-xl hover:scale-95'>
        Connect Nami
      </button>

      <button
        onClick={() => connectTyphon()}
        className='w-48 mt-8 text-white bg-blue-500 shadow-xl h-14 rounded-xl hover:scale-95'>
        Connect Typhon
      </button>
    </div>


  )
}

export default WalletConnector;