import image from '../assets/logo-money.png'

export default function Header() {
    return <header id='header'>
        <img src={image} alt="Logo money" />
        <h1>Investment Calculator</h1>
    </header>
}