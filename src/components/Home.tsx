import HomeImg from './../img/home-img.png'

export default function Home () {

    return (
        <>

        <div className="home">
            <div className="home-left-wrapper">
                <h1>Добро пожаловать на платформу 5S Control!</h1>
                <p>Здесь вы можете добавлять, редактировать задачи , а так же работать с контактами.</p>
            </div>

            <div className="home-right-wrapper">
                <img className="home-img" src={HomeImg} alt="" />
            </div>
        </div>

        <div className="home-mobile">
            <div className="home-mobile-right-wrapper">
                <img className="home-mobile-img" src={HomeImg} alt="" />
            </div>

            <div className="home-mobile-left-wrapper">
                <h1>Добро пожаловать на платформу 5S Control!</h1>
                <p>Здесь вы можете добавлять, редактировать задачи , а так же работать с контактами.</p>
            </div>
        </div>

        </>
                
    )
}