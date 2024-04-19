import Header from '../../ui/Header/Header'
import Banner from './Banner'
import style from './Home.module.scss'
import OfferBanner from './Offerbanner'

const Home = () => {
    return(
        <div>
            <Header></Header>
            <Banner></Banner>
            <OfferBanner></OfferBanner>
        </div>
    )
}

export default Home