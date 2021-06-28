import { signin } from 'next-auth/client'
import Image from 'next/image'

function Login() {
 return (
  <div className="grid place-items-center">
   <Image
   src="https://links.papareact.com/t4i"
   height={400}
   width={400}
   objectFit="contain"
   />

   <h1 
   onClick={signin} 
   className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>

   <h1 className="p-5 text-center cursor-pointer">এটা একটা Safe Facebook Login. Login করলে এই App টি শুধু আপনার নাম ও Profile Picture ই শুধু সংরক্ষণ করবে</h1>
  </div>
 )
}

export default Login


