import '@/app/styles/globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopBar  from '@/components/TopBar';
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
        <TopBar/>
        {children} <Footer/></body>
        
      </html>
    )
  }