import './App.css'

import { useTranslation } from 'react-i18next';
import './i18n.js'

import products from './db/products.js'
import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import {
  Header, Menu, Overlay, Cart, Login, Register, Main, Promos,
  Promo, Item, Promotion, PromotionFull, About, Delivery,
  Reminder, Footer, Form
} from './components';


const App = () => {


  const [onMenu, setonMenu] = useState(false);

  const [onCart, setonCart] = useState(false);

  const [onLog, setLog] = useState(false);
  const [onReg, setReg] = useState(false);

  const [fullDell, setfullDell] = useState(false)
  const [fullDescr, setfullDescr] = useState(false);

  const [filters, setFilters] = useState(false);

  const [form, setForm] = useState(false);

  const [submit, setSubmit] = useState(false);

  const restartForm = () => {
    setForm(false);
    setSubmit(false)
  }

  const upLink = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setonMenu(false);
  };

  useEffect(() => {
    if (onMenu || onCart || onLog || onReg || form) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [onMenu, onCart, onLog, onReg, form]);

  const slides = [
    { id: 0, src: "/Store/img/promo/promo1.jpg", alt: "promo1" },
    { id: 1, src: "/Store/img/promo/promo2.jpg", alt: "promo2" },
    { id: 2, src: "/Store/img/promo/promo3.jpg", alt: "promo3" },
    { id: 3, src: "/Store/img/promo/promo4.jpg", alt: "promo4" }
  ]


  const ShowReminder = () => {
    const location = useLocation();
    const homePage = location.pathname === '/Store/';

    return homePage ? <Reminder upLink={upLink} /> : null;
  }

  const SpecPromo = () => {
    const location = useLocation();
    const hideSpecPromo = location.pathname !== '/Store/special';

    return hideSpecPromo ? <Promotion /> : null;
  }

  const ReturnToTop = () => {
    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
      if (prevPathname.current !== pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        prevPathname.current = pathname;
      }
    }, [pathname]);

    return null;
  };

  const [search, setSearch] = useState('');

  const [showProducts, setShowProducts] = useState(products);

  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  const startSearch = () => {
    if (search.trim() === '') {
      setShowProducts(products);
    } else {
      setCurrentSearchTerm(search.toLowerCase());
    }
  };

  const [toCart, addToCart] = useState(() => {
    const savedItems = sessionStorage.getItem('cart');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(toCart));
  }, [toCart]);

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currency = { usd: 42, eur: 46 };

  window.addEventListener(
    'error',
    function (event) {
      if (event.target.tagName === 'IMG') {
        console.error(
          `%c⛔ Не удалось загрузить изображение:\n${event.target.src}`,
          'color: red; font-weight: bold;'
        );
      }
    },
    true // важно! чтобы поймать "каптуринг" ошибок
  );

  return (
    <>
      <Router>
        <Overlay onMenu={onMenu} setonMenu={setonMenu} onCart={onCart} setonCart={setonCart} onLog={onLog} setLog={setLog} onReg={onReg} setReg={setReg} form={form} setForm={setForm} restartForm={restartForm} filters={filters} setFilters={setFilters} />

        <Menu onMenu={onMenu} setonMenu={setonMenu} setonCart={setonCart} setLog={setLog} fullDell={fullDell} setfullDell={setfullDell} fullDescr={fullDescr} setfullDescr={setfullDescr} upLink={upLink} changeLanguage={changeLanguage} toCart={toCart} currency={currency} />
        <Cart onCart={onCart} setonCart={setonCart} toCart={toCart} addToCart={addToCart} currency={currency} />
        <Login onLog={onLog} setLog={setLog} setReg={setReg} />
        <Register onReg={onReg} setReg={setReg} setLog={setLog} />

        <Header setonMenu={setonMenu} setonCart={setonCart} setLog={setLog} setfullDell={setfullDell} setfullDescr={setfullDescr} upLink={upLink} search={search} setSearch={setSearch} startSearch={startSearch} setCurrentSearchTerm={setCurrentSearchTerm} toCart={toCart} changeLanguage={changeLanguage} currency={currency} />

        <ReturnToTop />
        <Routes>
          <Route path="/Store/" element={<Main slides={slides} filters={filters} setFilters={setFilters} products={products} showProducts={showProducts} currentSearchTerm={currentSearchTerm} addToCart={addToCart} />} />
          <Route path="/Store/promos" element={<Promos slides={slides} />} />
          <Route path="/Store/promos/promo/:promoId" element={<Promo slides={slides} products={products} addToCart={addToCart} />} />
          <Route path="/Store/special" element={<PromotionFull products={products} addToCart={addToCart} />} />
          <Route path="/Store/:itemId" element={<Item products={products} slides={slides} addToCart={addToCart} />} />
        </Routes>


        <SpecPromo />
        <About fullDescr={fullDescr} setfullDescr={setfullDescr} />
        <Delivery fullDell={fullDell} setfullDell={setfullDell} />

        <ShowReminder />
        <Footer setForm={setForm} upLink={upLink} setfullDell={setfullDell} setfullDescr={setfullDescr} />
        <Form form={form} setForm={setForm} submit={submit} setSubmit={setSubmit} restartForm={restartForm} />

      </Router>

    </>
  )
}
export default App