import '@styles/global.css';
import Provider from '@components/Provider'
import Footer from '@components/Footer';

export const metadata = {
    title: 'MPrompts',
    description: 'HUSTLE for making jeevan sarthak'
}

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
        </head>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    {children}
                    <Footer />
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Layout;
