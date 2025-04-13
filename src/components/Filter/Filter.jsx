import './_filters.scss'
import './_media__filters.scss'

import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';


const Filter = ({ filters, addFilter, setPriceRange, priceRange, chosenFilter, clearFilters }) => {
    const { t } = useTranslation();

    const [minValue, setMinValue] = useState(priceRange[0]);
    const [maxValue, setMaxValue] = useState(priceRange[1]);

    useEffect(() => {
        setMinValue(priceRange[0]);
        setMaxValue(priceRange[1]);
    }, [priceRange]);


    const sliderUse = (e) => {
        const isLeftSlider = e.target.id === 'slider-left';
        const value = parseInt(e.target.value);

        if (isLeftSlider) {
            if (value > maxValue) {
                setMinValue(maxValue);
            } else {
                setMinValue(value);
            }
        } else {
            if (value < minValue) {
                setMaxValue(minValue);
            } else {
                setMaxValue(value);
            }
        }
    };

    const [dropdown, setDropdown] = useState({});

    const click = (key) => {
        setDropdown((prev) => ({ ...prev, [key]: !prev[key] }))
    }


    const priceChoose = () => {
        setPriceRange([minValue, maxValue]);
    };

    return (
        <aside className={`filters ${filters ? 'active' : ''}`}>

            <div className="filters__wrapper">

                <div className="filters__category">

                    <div className="filters__category-head" onClick={() => click('category')}  >
                        <h4 className="filters__category-title">{t("categoryF")}</h4>
                        <img className={`arrow ${dropdown['category'] ? "active" : ""}`} src="/Store/img/icons/pointdown.svg" alt="arrow" />
                    </div>


                    <div className={`filters__category-body ${dropdown['category'] ? "active" : ''}`}>
                        <ul className="filters__category-list">
                            <li><label><input value="Phone" type="checkbox" onChange={addFilter} checked={chosenFilter.includes("Phone")} />{t("categoryF1")}</label></li>
                            <li><label><input value="TV" type="checkbox" onChange={addFilter} checked={chosenFilter.includes("TV")} />{t("categoryF2")}</label></li>
                            <li><label><input value="Food" type="checkbox" onChange={addFilter} checked={chosenFilter.includes("Food")} />{t("categoryF3")}</label></li>
                            <li><label><input value="Health" type="checkbox" onChange={addFilter} checked={chosenFilter.includes("Health")} />{t("categoryF4")}</label></li>
                            <li><label><input value="Clothes" type="checkbox" onChange={addFilter} checked={chosenFilter.includes("Clothes")} />{t("categoryF5")}</label></li>
                        </ul>
                    </div>

                </div>

                <div className="filters__divider"></div>

                <div className="filters__price">

                    <div className="filters__price-head" onClick={() => click('price')}  >
                        <h4 className="filters__price-title">{t("priceF")}</h4>
                        <img className={`arrow ${dropdown['price'] ? "active" : ""}`} src="/Store/img/icons/pointdown.svg" alt="arrow" />
                    </div>

                    <div className={`filters__price-body ${dropdown['price'] ? "active" : ''}`}>
                        <input className="filters__price-inputleft" min="1" type="number" value={minValue} id="filtermincount" name="filtermincount" onChange={(e) => setMinValue(parseInt(e.target.value))} />
                        -
                        <input className="filters__price-inputright" type="number" value={maxValue} min="1" id="filtermaxcount" name="filtermaxcount" onChange={(e) => setMaxValue(parseInt(e.target.value))} />

                        <button className="filters__price-btn" onClick={priceChoose}>Ок</button>





                        <div className="filters__price-slider">
                            <input type="range" min="0" max="10000" value={minValue} className="slider-left" id="slider-left" onChange={sliderUse} />
                            <input type="range" min="1" max="10000" value={maxValue} className="slider-right" id="slider-right" onChange={sliderUse} />
                        </div>

                    </div>

                </div>

                <div className="filters__divider"></div>

                <label className="filters__available">{t("availableF")}<input type="checkbox" onChange={addFilter} value="Есть" checked={chosenFilter.includes("Есть")} /></label>

                <div className="filters__divider"></div>

                <div className="filters__country">

                    <div className="filters__country-head" onClick={() => click('country')}  >
                        <h4 className="filters__country-title">{t("countryF")}</h4>
                        <img className={`arrow ${dropdown['country'] ? "active" : ""}`} src="/Store/img/icons/pointdown.svg" alt="arrow" />
                    </div>


                    <div className={`filters__country-body ${dropdown['country'] ? "active" : ''}`}>
                        <ul className="filters__country-list">
                            <li><label><input type="checkbox" onChange={addFilter} value="UA" checked={chosenFilter.includes("UA")} />{t("countryC1")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="UK" checked={chosenFilter.includes("UK")} />{t("countryC2")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="China" checked={chosenFilter.includes("China")} />{t("countryC3")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="Japan" checked={chosenFilter.includes("Japan")} />{t("countryC4")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="Germany" checked={chosenFilter.includes("Germany")} />{t("countryC5")}</label></li>
                        </ul>
                    </div>
                </div>

                <div className="filters__color">

                    <div className="filters__color-head" onClick={() => click('color')} >
                        <h4 className="filters__country-title">{t("colorF")}</h4>
                        <img className={`arrow ${dropdown['color'] ? "active" : ""}`} src="/Store/img/icons/pointdown.svg" alt="arrow" />
                    </div>


                    <div className={`filters__color-body ${dropdown['color'] ? "active" : ''}`}>
                        <ul className="filters__color-list">
                            <li><label><input type="checkbox" onChange={addFilter} value="black" checked={chosenFilter.includes("black")} />{t("colorF1")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="blue" checked={chosenFilter.includes("blue")} />{t("colorF2")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="red" checked={chosenFilter.includes("red")} />{t("colorF3")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="yellow" checked={chosenFilter.includes("yellow")} />{t("colorF4")}</label></li>
                            <li><label><input type="checkbox" onChange={addFilter} value="green" checked={chosenFilter.includes("green")} />{t("colorF5")}</label></li>
                        </ul>
                    </div>

                </div>

                <div className="filters__confirm-btn" onClick={clearFilters}>{t("filtersBtnClear")}</div>
            </div>
        </aside>
    )
}

export default Filter;