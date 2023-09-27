import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css';

export const metadata = {
    title: 'Threads',
    description: 'A next.js Meta threads application'
}

const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({ 
    children 
}: { 
    children:React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1` }>
                    {children}

                </body>
            </html>

        </ClerkProvider>

    ) 
}






//IGNORE: Comments here are for my own learning //

/**
 * metadata object contains the two properties which are used for SEO purposes.
 * 
 * RootLayout is a React functional component that
 * takes the single prop 'children'.
 * 
 * The prop is expected to be a type of React.ReactNode which is 
 * a type provided by react for representing the contents of a
 * react component. 
 */