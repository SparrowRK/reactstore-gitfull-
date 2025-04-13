import './_main.scss'
import './_media__main.scss'

import { useState, useMemo, useEffect } from 'react';

import Filter from '../Filter/Filter';
import Mainscreen from '../Mainscreen/Mainscreen';

const Main = ({ slides, filters, setFilters, products, showProducts, currentSearchTerm, addToCart }) => {
    const [chosenFilter, addToChosenFilter] = useState(() => {
        try {
            const savedFilters = localStorage.getItem('chosenFilter');
            return savedFilters ? JSON.parse(savedFilters) : [];
        } catch (error) {
            console.error("Ошибка при загрузке фильтров:", error);
            return [];
        }
    });


    const [priceRange, setPriceRange] = useState(() => {
        try {
            const savedPriceRange = localStorage.getItem('priceRange');
            return savedPriceRange ? JSON.parse(savedPriceRange) : [0, 10000];
        } catch (error) {
            console.error("Ошибка при загрузке диапазона цен:", error);
            return [0, 10000];
        }
    });


    useEffect(() => {
        localStorage.setItem('chosenFilter', JSON.stringify(chosenFilter));
        localStorage.setItem('priceRange', JSON.stringify(priceRange));
    }, [chosenFilter, priceRange]);


    const categoryKeywords = useMemo(() => ({
        "food": ['еда', 'food', 'їжа', 'вермишель', 'noodle', 'вермішель', 'питание', 'nutrition', 'харчування', 'кухня', 'kitchen', 'кухня', 'суп', 'soup', 'суп', 'лапша', 'noodles', 'локшина', 'чипсы', 'chips', 'чіпси', 'снеки', 'snacks', 'снеки', 'закуски', 'appetizers', 'закуски', 'сухарики', 'croutons', 'сухарики', 'чипс', 'chip', 'чіпс', 'орехи', 'nuts', 'горіхи', 'орешки', 'nuts', 'горішки', 'фисташки', 'pistachios', 'фісташки', 'арахис', 'peanuts', 'арахіс', 'пиво', 'beer', 'пиво', 'напитки', 'drinks', 'напої', 'алкоголь', 'alcohol', 'алкоголь', 'напиток', 'beverage', 'напій', 'макароны', 'macaroni', 'макарони', 'паста', 'pasta', 'паста', 'спагетти', 'spaghetti', 'спагеті', 'пирог', 'pie', 'пиріг', 'пироги', 'pies', 'пироги', 'яблоко', 'apple', 'яблуко', 'рыбные палочки', 'fish sticks', 'рибні палички', 'палочки', 'sticks', 'палички', 'сушенная пища', 'dried food', 'сушена їжа', 'сушеная', 'dried', 'сушений', 'свинина', 'pork', 'свинина'],

        'phone': ['телефон', 'phone', 'телефон', 'смартфон', 'smartphone', 'смартфон', 'мобильный', 'mobile', 'мобільний', 'сотовый', 'cell phone', 'мобільний телефон'],

        'tv': ['телевизор', 'tv', 'телевізор', 'тв', 'tv', 'тв', 'television', 'television', 'телебачення', 'монитор', 'monitor', 'монітор', 'экран', 'screen', 'екран', 'плазма', 'plasma', 'плазма', 'смарт тв', 'smart tv', 'смарт тв', 'lcd', 'oled'],

        'health': ['маска для лица', 'face mask', 'маска для обличчя', 'маска', 'mask', 'маска', 'крем', 'cream', 'крем', 'гель', 'gel', 'гель', 'лосьон', 'lotion', 'лосьйон', 'уход', 'care', 'догляд', 'косметика', 'cosmetics', 'косметика', 'лицо', 'face', 'обличчя', 'кожа', 'skin', 'шкіра'],

        'clothes': ['футболка', 't-shirt', 'футболка', 'кепка', 'cap', 'кепка', 'шорты', 'shorts', 'шорти', 'одежда', 'clothes', 'одяг', 'майка', 'tank top', 'майка', 'шапка', 'hat', 'шапка', 'бейсболка', 'baseball cap', 'кепка', 'головной убор', 'headwear', 'головний убір', 'штаны', 'pants', 'штани', 'шорт', 'shorts', 'шорти', 'футболочка', 't-shirt', 'футболочка', 'одежка', 'clothing', 'одяг'],
    }), []);


    const [isSearchValid, setIsSearchValid] = useState(true);

    useEffect(() => {
        if (currentSearchTerm && currentSearchTerm.trim() !== '') {
            const searchLowerCase = currentSearchTerm.toLowerCase().trim();
            const allCategories = [...new Set(products.map(item => item.category))];
            let foundMatch = false;

            const exactMatch = allCategories.find(category =>
                category.toLowerCase() === searchLowerCase
            );

            if (exactMatch) {
                addToChosenFilter([exactMatch]);
                setIsSearchValid(true);
                return;
            }
            for (const [category, keywords] of Object.entries(categoryKeywords)) {
                if (keywords.some(keyword =>
                    keyword === searchLowerCase
                )) {
                    const matchedCategory = allCategories.find(cat =>
                        cat.toLowerCase() === category.toLowerCase()
                    );

                    if (matchedCategory) {
                        addToChosenFilter([matchedCategory]);
                        setIsSearchValid(true);
                        foundMatch = true;
                        return;
                    }
                    foundMatch = true;
                }
            }

            setIsSearchValid(foundMatch);
        } else {

            setIsSearchValid(true);
        }
    }, [currentSearchTerm, products, categoryKeywords]);

    const filteredItems = useMemo(() => {

        if (!isSearchValid && currentSearchTerm && currentSearchTerm.trim() !== '') {
            return [];
        }

        let result = showProducts.filter(item =>
            item.price >= priceRange[0] && item.price <= priceRange[1]
        );

        if (chosenFilter.length > 0) {
            const allCategory = [...new Set(products.map(item => item.category))];
            const allColor = [...new Set(products.map(item => item.color))];
            const allCountrys = [...new Set(products.map(item => item.country))];
            const allStatuses = [...new Set(products.map(item => item.status))];

            const filterCategory = chosenFilter.filter(item => allCategory.includes(item));
            const filterColor = chosenFilter.filter(item => allColor.includes(item));
            const filterCountry = chosenFilter.filter(item => allCountrys.includes(item));
            const filterStatus = chosenFilter.filter(item => allStatuses.includes(item));

            result = result.filter(item =>
                (filterCategory.length === 0 || filterCategory.includes(item.category)) &&
                (filterColor.length === 0 || filterColor.includes(item.color)) &&
                (filterCountry.length === 0 || filterCountry.includes(item.country)) &&
                (filterStatus.length === 0 || filterStatus.includes(item.status))
            );
        }

        return result;
    }, [chosenFilter, priceRange, showProducts, products, isSearchValid, currentSearchTerm]);


    const hasActiveFilters = useMemo(() => {
        const isPriceFiltered = priceRange[0] !== 0 || priceRange[1] !== 10000;
        return chosenFilter.length > 0 || isPriceFiltered;
    }, [chosenFilter, priceRange]);

    const addFilter = (e) => {
        const value = e.target.value;
        let newFilters;

        if (e.target.checked) {
            newFilters = [...chosenFilter, value];
        } else {
            newFilters = chosenFilter.filter((item) => item !== value);
        }

        addToChosenFilter(newFilters);
    };

    const clearFilters = () => {
        addToChosenFilter([]);
        setPriceRange([0, 10000]);
    };

    return (
        <section className="main">
            <Filter
                filters={filters}
                setFilters={setFilters}
                products={products}
                addFilter={addFilter}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                chosenFilter={chosenFilter}
                clearFilters={clearFilters}
                showProducts={showProducts}
            />
            <Mainscreen
                slides={slides}
                setFilters={setFilters}
                products={products}
                filteredItems={filteredItems}
                hasActiveFilters={hasActiveFilters}
                clearFilters={clearFilters}
                showProducts={showProducts}
                addToCart={addToCart}
            />
        </section>
    );
}

export default Main;