import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'



const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CPL 2.0',
  description: 'CodeChef Premier League 2.0',
  icons: {
    icon: "/ashenOne-mob.png", // path to your favicon file
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
                {children}
                
          </ThemeProvider>
        </body>
      </html>
   
  )
}
