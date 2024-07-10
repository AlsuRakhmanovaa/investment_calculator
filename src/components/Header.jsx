import image from '../assets/investment-calculator-logo.png'

export default function Header() {
    return <header id='header'>
        <img src={image} alt="Logo money bag" />
        <h1>Investment Calculator</h1>
    </header>
}