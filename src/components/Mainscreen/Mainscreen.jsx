
import Slider from "../Slider/Slider";
import Items from "../Items/Items";



const Mainscreen = ({ slides, setFilters, products, filteredItems, hasActiveFilters, clearFilters, showProducts, addToCart }) => {
    return (
        <section className="mainscreen">
            <Slider slides={slides} />
            <Items setFilters={setFilters} products={products} filteredItems={filteredItems} hasActiveFilters={hasActiveFilters} clearFilters={clearFilters} showProducts={showProducts} addToCart={addToCart} />
        </section>
    )
}

export default Mainscreen;