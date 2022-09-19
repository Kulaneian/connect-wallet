import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const WalletConnector = dynamic(
  () => import('../components/WalletConnector'), {
  ssr: false,
});



const Home: NextPage = ({ close, connect }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  function handleConnect(wallet: any) {
    setIsLoading(true);
    connect(wallet);
  }

  function handleClose() {
    setIsLoading(false);
    close();
  }

  // check if wallet is connected

  // connect nami wallet

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>



        <button
          onClick={() => WalletConnector}
          className='w-48 mt-8 text-white bg-blue-500 shadow-xl h-14 rounded-xl hover:scale-95'>
          Connect Nami
        </button>







      </main>







      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
