import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className="flex bg-[#000] min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Squid game ethiopia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Image src="/soldier.png" alt="Vercel Logo" width={100} height={100} />
	<div className="border-4 w-3/4 mt-3 h-96 border-[#ca3576] rounded-2xl  "><h1 className="text-white text-center text-2xl">GAME-ONE</h1>

	</div>
    </div>
  )
}

export default Home

