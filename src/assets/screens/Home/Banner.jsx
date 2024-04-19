import style from './Banner.module.scss'
const Banner = () => {
    return(
        <div>
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.content}>

                        <div className="label">
                            <img src="100.png" alt="100% natural" />
                        </div>

                        <div className={style.title}>
                            <p>Choose the best 
                                healthier way
                                of life</p>
                        </div>
                        <div className={style.button}>
                            <button>
                                Explore now
                                <img src="arrowbutton.png" alt="" />
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner