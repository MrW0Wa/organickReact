import style from './Offerbanner.module.scss'

const OfferBanner = () => {
    return (
        <div className={style.container}>
            <ul className={style.banners}>
                <img src="banner1.png" alt="banner 1" />
                <img src="banner2.png" alt="banner 1" />
            </ul>
        </div>
    )
}

export default OfferBanner