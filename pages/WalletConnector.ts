import { Wallet } from '@harmonicpool/cardano-wallet-interface';

export const connectNami = async () => {
    if (Wallet.has(Wallet.Names.Nami)) {
      if (!await Wallet.isEnabled(Wallet.Names.Nami)) {
        Wallet.enable(Wallet.Names.Nami)
      }
    }
  }