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
        <Image src="/image.png" alt="Vercel Logo" width={700} height={400} />
         <input placeholder="player number" className="p-2 mb-2 rounded focus:outline-none focus:shadow-outline focus:border-blue-300"/>
	 <input type="password" placeholder="passcode" className="p-2 mb-4 rounded focus:outline-none focus:shadow-outline focus:border-blue-300"/>
	 <Link href="./level">
           <button className="bg-[#ca3576] rounded p-2 ml-32 text-white ">Login</button>
	 </Link>
    </div>
  )
}

export default Home
