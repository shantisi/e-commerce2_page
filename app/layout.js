import { Inter } from 'next/font/google'
import './globals.css'
import Navbaar from "./navbaar.js"; 
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
        <Navbaar/><br/>
     {children}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.js"></script>  	
    </body>
    </html>
  )
}
