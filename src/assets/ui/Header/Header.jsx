import style from './Header.module.scss'

const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.logo}>
                    <img src="../../../../public/logo.svg" alt="logo" />
                    <p>Organick</p>
                </div>
                <nav className="navigation">
                    <ul className={style.list}>
                        <li className='list_element'>
                            <a href="#" className="link">
                                Home
                            </a>
                        </li>
                        <li className='list_element'>
                            <a href="#" className="link">
                                About
                            </a>
                        </li>
                        <li className='list_element'>
                            <a href="#" className="link">
                                Pages
                            </a>
                        </li>
                        <li className='list_element'>
                            <a href="#" className="link">
                                Shop
                            </a>
                        </li>
                        <li className='list_element'>
                            <a href="#" className="link">
                                Projects
                            </a>
                        </li>
                        <li className='list_element'>
                            <a href="#" className="link">
                                News
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={style.buttons}>
                
            </div>
        </div>
    )
}

export default Header