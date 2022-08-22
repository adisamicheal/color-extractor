import style from './Navbar.module.scss';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <img src={Logo} alt="" />
            </div>
        </header>
    )
}

export default Navbar;