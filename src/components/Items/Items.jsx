import './_items.scss'
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Items = ({ setFilters, products, filteredItems, hasActiveFilters, clearFilters, addToCart }) => {
    const navigate = useNavigate();

    const { i18n } = useTranslation();

    const { t } = useTranslation();

    const itemsToDisplay = hasActiveFilters ? filteredItems : products;

    const allproductsCount = filteredItems.length === 0 ? 0 : itemsToDisplay.length || 0;

    const [list, addToList] = useState(20)

    const [btn, hideBtn] = useState(true);


    useEffect(() => {
        if (!itemsToDisplay || itemsToDisplay.length === 0 || list >= itemsToDisplay.length) {
            hideBtn(false);
        } else {
            hideBtn(true);
        }
    }, [list, itemsToDisplay]);

    const showMore = () => {
        const newListCount = list + 20;
        addToList(newListCount);
        localStorage.setItem('listCount', newListCount.toString());

        if (newListCount >= itemsToDisplay.length) {
            hideBtn(false);
        }
    };


    const [sorted, setSorted] = useState(() => {
        try {
            const savedSortOrder = localStorage.getItem('sortOrder');
            return savedSortOrder || 'incr';
        } catch (error) {
            console.error("Ошибка при загрузке порядка сортировки:", error);
            return 'incr';
        }
    });


    const sortChange = (e) => {
        const newSortValue = e.target.value;
        setSorted(newSortValue);
        localStorage.setItem('sortOrder', newSortValue);
    };


    const sortItems = useMemo(() => {
        if (!itemsToDisplay || !Array.isArray(itemsToDisplay) || itemsToDisplay.length === 0) {
            return [];
        }

        const sortedItems = [...itemsToDisplay];

        if (sorted === 'incr') {
            sortedItems.sort((a, b) => a.price - b.price);
        } else if (sorted === 'decr') {
            sortedItems.sort((a, b) => b.price - a.price);
        }

        return sortedItems;
    }, [itemsToDisplay, sorted]);


    const noProductsFound = (hasActiveFilters && filteredItems.length === 0) ||
        (filteredItems.length === 0 && Array.isArray(filteredItems));

    const countWord = () => {
        const count = itemsToDisplay.length
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return t("itmsCountFv3");
        }

        if (filteredItems.length === 0) {
            return t("itmsCountFv3")
        }


        if (lastDigit === 1) {
            return t("itmsCountFv1");
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return t("itmsCountFv2");
        } else {
            return t("itmsCountFv3");
        }
    };



    return (
        <section className="items">
            <div className="items__wrapper">
                <div className="items__info">
                    <div className="items__info-smallvh">
                        <div className="items__info-total">{t("itmsCountF")} {allproductsCount} {countWord(allproductsCount)}</div>

                        {hasActiveFilters && <button className="items__info-filtersremove" onClick={clearFilters}>{t("clearFiltItms")}</button>}
                        <button className="items__info-addfilters" onClick={() => setFilters(true)}>{t("mobFiltrsBtn")} </button>
                    </div>
                    <select
                        className="items__info-priceswitch"
                        name="items__sort"
                        id="items__sort"
                        value={sorted}
                        onChange={sortChange}
                    >
                        <option value="incr">{t("itmsPriceL")}</option>
                        <option value="decr">{t("itmsPriceH")}</option>
                    </select>
                </div>

                {noProductsFound ? (
                    <div className="items__no-products" style={{ display: "block", margin: "0 auto", padding: 30 }}>
                        <h3>{t("noItems")}</h3> <br />
                        <p>{t("noItemsReq")}</p>
                    </div>
                ) : (
                    <div className="items__list">
                        {sortItems.slice(0, list).map((item) => (
                            <div className="items__list-item" key={item.id}>
                                <img
                                    className="items__list-item-img"
                                    src={item.pic}
                                    alt={item.alt}
                                    onClick={() => navigate(`/Store/${item.id}`)}
                                />
                                <h4
                                    className="items__list-item-descr"
                                    onClick={() => navigate(`/Store/${item.id}`)}
                                >
                                    {i18n.language === "ru" && item.nameRU ? item.nameRU :
                                        i18n.language === "ua" && item.nameUA ? item.nameUA :
                                            i18n.language === "en" && item.name ? item.name :
                                                item.name}

                                </h4>
                                <div
                                    className="items__list-item-status"
                                    style={{ color: item.status === "Есть" ? "blue" : "grey" }}
                                >
                                    {item.status === "Есть" ? t("available") : t("notAvalaible")}
                                </div>

                                <div className="items__list-item-buy">
                                    <div className="items__list-item-price">{item.price}</div>
                                    {item.status === "Есть" && (
                                        <img
                                            className="items__list-item-cart"
                                            src="img/icons/cart.svg"
                                            alt="Cart"
                                            onClick={() => addToCart(prev => {
                                                if (prev.find(cartItem => cartItem.id === item.id)) return prev;
                                                return [...prev, item];
                                            })}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {btn &&
                    itemsToDisplay &&
                    itemsToDisplay.length > 0 &&
                    list < itemsToDisplay.length &&
                    !(Array.isArray(filteredItems) && filteredItems.length === 0) && (
                        <button className="items__addbtn" onClick={showMore}>
                            {t("showMoreItmsBtn")}
                        </button>
                    )}
            </div>
        </section>
    );
};

export default Items;