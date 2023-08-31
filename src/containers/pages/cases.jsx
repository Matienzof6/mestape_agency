import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/cases/Header"
import CasesList from "components/cases/CasesList"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function Cases(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>MESTAPE | Cases</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.mestape.com/" />
                <meta name="author" content='Matias Pereiro' />
                <meta name="publisher" content='Matias Pereiro' />

                {/* Social Media Tags */}
                <meta property="og:title" content='MESTAPE | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://www.mestape.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='MESTAPE | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>   
            <Navbar/>
            <div className="pt-28">
                <div data-scroll-section className="pt-28">
                    <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-1700">
                            {/* Content goes here */}
                            <Header/>
                            <CasesList/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </Layout>
    )
}

export default Cases