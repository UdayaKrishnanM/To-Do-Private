import './index.css'

const Header = ({ title }) => {
    return(
        <header>
            <h1>{title}</h1>
        </header>
    )

}


// Default Prop is used incase any props value in not passed. So the react takes the default props as the prop
Header.defaultProps = {
    title: "Default List"
}

export default Header;