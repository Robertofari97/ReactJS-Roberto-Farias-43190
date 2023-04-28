import cartwidget from "../cartwidget/cartwidget"

const navbar = () => {
    return (
        <nav>
            <h3>Celulares Store</h3>
            <div>
                <button>Iphone</button>
                <button>Samsung</button>
                <button>Motorola</button>
            </div>
            <cartwidget/>
        </nav>
    )
}

export default navbar