import style from './Home.module.scss';

const Home = () => {
    return (
        <div className={style.home}>
            <section className={style.home__hero}>
                <h1>Extract <span className={style.home__hero_color}>colors</span> from a <span className={style.home__hero_webpage}>webpage</span> in one click
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7303 4.48285L0 0L4.48291 16.7303L8.85419 12.359L16.902 17.9941L19.7698 13.8983L12.4443 8.76892L16.7303 4.48285Z" fill="#5800FF"/>
                    </svg>
                </h1>
                <p>Get color codes and recommended pallete from your favorite websites.</p>
            </section>
            <section className={style.home__form}>
                <form action="">
                    <input type="text" placeholder="https://www.example.org" />
                    <button type="submit">Extract</button>
                </form>
            </section>
        </div>
    )
}

export default Home;