import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'ru';

i18n.use(initReactI18next).init({

    resources: {
        ru: {
            translation: {
                //хедер
                search: "Поиск товара...",
                searchButton: "Найти",
                promoBtn: "Акции",
                deliveryBtn1: "Оплата и",
                deliveryBtn2: "Доставка",
                aboutBtn: "О нас",
                currency: "Курс валют",

                // окно логина
                login: "Логин",
                email: "Ваш e-mail",
                password: "Ваш пароль",
                enter: "Войти",
                firstT: "Впервые у нас?",
                registerW: "Регистрация",

                // окно регистр
                register: 'Регистрация',
                emailR: "Укажите Ваш e-mail*",
                phoneR: 'Укажите Ваш телефон',
                passwordR: "Укажите пароль*",
                repeatpassR: "Повторите пароль*",
                enterR: "Зарегистрироваться",
                alreadyR: "Уже зарегистрированы?",
                loginW: "Логин",

                // окно сайдменю
                cart: "Корзина",
                social: "Мы в соц сетях",
                app: "Наше приложение",
                adress: "Наш адрес:",

                // раздел таймера
                promoST: "Специальное предложение для Новых пользователей!",
                promoSD: "Зарегистрируй профиль на нашем сайте в течении предложения",
                promoSD2: "и получи бесплатную доставку на товар !",
                promoSLT: "Ознакомится с условиями можно",
                promoSL: "тут",

                // раздел  о нас
                aboutShow: "Подробнее ▼",
                aboutHide: "Cкрыть ▲",
                aboutAdressT: "Наше расположение:",
                aboutAdress: "Город ул.",
                aboutContact: "Наши контакты:",
                aboutSocial: "Также мы в сети",

                // раздел доставка и опл
                deliveryQ: "Ответили не на все Ваши вопросы?",
                deliveryQT: "Рады ответить на них по нашему телефону:",
                deliveryQE: "Или электронным письмом:",

                // футер
                companyF: "Компания",
                contactsF: "Контакты",
                request: "Мы только открылись, помогите нам стать лучше",
                requestBtn: "Заполнить форму",

                // всплыв смс
                reminderT: "Успей ознакомиться с нашими акциями",
                reminderBtn: "Перейти",

                // фильтры
                categoryF: "Категория товара",
                priceF: 'Цена, грн',
                availableF: "В наличии",
                countryF: "Производитель",
                colorF: "Цвет товара",

                categoryF1: "Телефоны",
                categoryF2: "Тв",
                categoryF3: "Еда",
                categoryF4: "Здоровье и уход",
                categoryF5: "Одежда",

                countryC1: "Украина",
                countryC2: "Англия",
                countryC3: "Китай",
                countryC4: "Япония",
                countryC5: "Германия",

                colorF1: "Черный",
                colorF2: "Синий",
                colorF3: "Красный",
                colorF4: "Желтый",
                colorF5: "Зеленый",

                filtersBtnClear: "Сбросить",


                // форма в футере
                requestP1: "Что бы вы хотели видеть ещё на нашем сайте.",
                requestP2: "Возможно у вас есть замечания касательно работы сайта?",
                requestP3: "Ответ, пожалуйста, укажите, заполнив форму ниже",
                requestEm: "Ваш e-mail",
                requestNm: "Вашe имя",
                requestT: "Укажите Ваше пожелание",
                requestSend: "Отправить",

                // корзина (пуст и с товар)
                cartF: "Ваша корзина",
                cartC: "Позиций в корзине:",
                cartClean: "Очистить корзину",
                cartEx: "Продолжить покупки",
                cartOr: "Оформить заказ",

                // кнопки в промос  промо  спецпромо
                promoSbtn: "Все товары и условия акции",
                allPromoBtn: "Посмотреть все акции на сайте",
                promoSgomain: "Вернуться  на главную",

                // таймер
                timerD1: 'дней',
                timerD2: 'дня',
                timerD3: 'день',
                timerH1: "часов",
                timerH2: 'часа',
                timerH3: 'час',
                timerM1: "минут",
                timerM2: 'минута',
                timerM3: 'минуты',

                // товар по 1
                available: "В наличии",
                notAvalaible: "Нет в наличии",
                buyI: "Купить",
                sellerI: 'Продавец :',
                countryI: "Страна :",
                typeI: "Тип :",
                weightI: "Вес :",
                warantyI: "Гарантия :",

                // кнопки и значен над товарами и под
                clearFiltItms: "Очистить фильтры",
                mobFiltrsBtn: "Фильтры",

                itmsPriceL: "От дешевых к дорогим",
                itmsPriceH: "От дорогих к дешевым",

                itmsCountF: "Найдено",
                itmsCountFv1: "товар",
                itmsCountFv2: "товара",
                itmsCountFv3: "товаров",

                noItems: "Товар не найден по выбранным фильтрам",
                noItemsReq: "Пожалуйста, попробуйте изменить критерии фильтрации.",

                showMoreItmsBtn: "Показать еще",

            },
        },
        en: {
            translation: {
                //хедер
                search: "Search...",
                searchButton: "Search",
                promoBtn: "Promo",
                deliveryBtn1: "Payment  &",
                deliveryBtn2: "Delivery",
                aboutBtn: "About us",
                currency: "Exchange",

                // окно логина
                login: "Log in",
                email: "Write email",
                password: "Write password",
                enter: "Log in",
                firstT: "First time?",
                registerW: "Register",


                register: 'Register',
                emailR: "Write your email*",
                phoneR: 'Write your phone-n',
                passwordR: "Write password*",
                repeatpassR: "Repeat password*",
                enterR: "Register",
                alreadyR: "Already have an account?",
                loginW: "Log in",


                cart: "Сart",
                social: "Our social contacts",
                app: "Our mobile App",
                adress: "Our Adres:",


                promoST: "Special offer for New Users!",
                promoSD: "Register your profile on our website during the offer period",
                promoSD2: "and get free shipping on product!",
                promoSLT: "You can check the terms",
                promoSL: "here",


                aboutShow: "More ▼",
                aboutHide: "Hide ▲",
                aboutAdressT: "Our adres",
                aboutAdress: "City, st.",
                aboutContact: "Our contacts:",
                aboutSocial: "We on social media",


                deliveryQ: "Didn't answer all your questions?",
                deliveryQT: "We're happy to answer them by phone:",
                deliveryQE: "Or by email:",


                companyF: "Company",
                contactsF: "Contacts",
                request: "We’ve just opened — help us get better!",
                requestBtn: "Fill form",


                requestP1: "What would you like to see on our site?",
                requestP2: "Do you have any comments about how the site works?",
                requestP3: "Please provide your answer by filling out the form below.",
                requestEm: "Your e-mail",
                requestNm: "Your name",
                requestT: "Enter your suggestion",
                requestSend: "Send",


                reminderT: "Don't miss out on our promotions",
                reminderBtn: "View offers",


                categoryF: "Category",
                priceF: "Price, UAH",
                availableF: "In Stock",
                countryF: "Manufacturer",
                colorF: "Color",

                categoryF1: "Phones",
                categoryF2: "TV",
                categoryF3: "Food",
                categoryF4: "Health & Care",
                categoryF5: "Clothing",

                countryC1: "Ukraine",
                countryC2: "England",
                countryC3: "China",
                countryC4: "Japan",
                countryC5: "Germany",

                colorF1: "Black",
                colorF2: "Blue",
                colorF3: "Red",
                colorF4: "Yellow",
                colorF5: "Green",

                filtersBtnClear: "Reset",

                cartF: "Your Cart",
                cartC: "Items in Cart:",
                cartClean: "Clear Cart",
                cartEx: "Continue Shopping",
                cartOr: "Place Order",


                promoSbtn: "All promo products & terms",
                allPromoBtn: "To all promotions",
                promoSgomain: "To Homepage",


                timerD1: 'days',
                timerD2: 'days',
                timerD3: 'day',
                timerH1: 'hours',
                timerH2: 'hours',
                timerH3: 'hour',
                timerM1: 'minutes',
                timerM2: 'minute',
                timerM3: 'minutes',


                available: "In stock",
                notAvalaible: "Out of stock",
                sellerI: "Seller :",
                buyI: "Buy",
                countryI: "Country :",
                typeI: "Type :",
                weightI: "Weight :",
                warantyI: "Warranty :",


                clearFiltItms: "Clear filters",
                mobFiltrsBtn: "Filters",


                itmsPriceL: "Low to high price",
                itmsPriceH: "High to low price",

                itmsCountF: "Found",
                itmsCountFv1: "item",
                itmsCountFv2: "items",
                itmsCountFv3: "items",

                noItems: "No items found for the selected filters",
                noItemsReq: "Please try changing the filter criteria.",

                showMoreItmsBtn: "Show more",
            },
        },
        ua: {
            translation: {
                // хедер
                search: "Пошук товару...",
                searchButton: "Пошук",
                promoBtn: "Акцiї",
                deliveryBtn1: "Оплата та",
                deliveryBtn2: "Доставка",
                aboutBtn: "Про нас",
                currency: "Курс Валюти",

                // окно логина
                login: "Вхід",
                email: "Ваша e-пошта",
                password: "Ваш пароль",
                enter: "Увійти",
                firstT: "Вперше в нас?",
                registerW: "Реєстрація",


                register: 'Реєстрація',
                emailR: "Вкажіть вашу е-пошту*",
                phoneR: 'Вкажіть ваш телефон',
                passwordR: "Вкажіть пароль*",
                repeatpassR: "Повторіть пароль*",
                enterR: "Зареєструватися",
                alreadyR: "Вже зареєстровані?",
                loginW: "Вхід",


                cart: "Кошик",
                social: "Ми в мережі",
                app: "Наш додаток",
                adress: "Наша адреса:",



                promoST: "Cпеціальна пропозиція для Нових користувачів!",
                promoSD: "Зареєструй профіль на нашому сайті до кінця акції",
                promoSD2: "та отримуй безкоштовту доставку на товар!",
                promoSLT: "Ознайомитися з умовами можно",
                promoSL: "тут",


                aboutShow: "Детальніше ▼",
                aboutHide: "Сховати ▲",
                aboutAdressT: "Наша адреса:",
                aboutAdress: "Місто, вул.",
                aboutContact: "Наші контакти:",
                aboutSocial: "Також ми в мережі",


                deliveryQ: "Не відповіли на всі Ваші питання?",
                deliveryQT: "Раді відповісти на них за нашим телефоном:",
                deliveryQE: "Або електронною поштою:",


                companyF: "Компанія",
                contactsF: "Контакти",
                request: "Ми щойно відкрились, допоможіть нам стати кращими!",
                requestBtn: "Заповнити форму",


                requestP1: "Що ще ви хотіли б побачити на нашому сайті?",
                requestP2: "Можливо, у вас є зауваження щодо роботи сайту?",
                requestP3: "Будь ласка, вкажіть свою відповідь, у формі нижче.",
                requestEm: "Ваш e-mail",
                requestNm: "Ваше ім’я",
                requestT: "Вкажіть ваше побажання",
                requestSend: "Надіслати",


                reminderT: "Встигніть ознайомитися з усіма акціями",
                reminderBtn: "Перейти",


                categoryF: "Категорія товару",
                priceF: "Ціна, грн",
                availableF: "В наявності",
                countryF: "Виробник",
                colorF: "Колір товару",

                categoryF1: "Телефони",
                categoryF2: "ТВ",
                categoryF3: "Їжа",
                categoryF4: "Здоров’я та догляд",
                categoryF5: "Одяг",

                countryC1: "Україна",
                countryC2: "Англія",
                countryC3: "Китай",
                countryC4: "Японія",
                countryC5: "Німеччина",

                colorF1: "Чорний",
                colorF2: "Синій",
                colorF3: "Червоний",
                colorF4: "Жовтий",
                colorF5: "Зелений",

                filtersBtnClear: "Скинути",

                cartF: "Ваш кошик",
                cartC: "Позицій у кошику:",
                cartClean: "Очистити кошик",
                cartEx: "Продовжити покупки",
                cartOr: "Оформити замовлення",


                promoSbtn: "Усі товари та умови акції",
                allPromoBtn: "Переглянути всі акції на сайті",
                promoSgomain: "На головну",


                timerD1: 'днів',
                timerD2: 'дні',
                timerD3: 'день',
                timerH1: 'годин',
                timerH2: 'години',
                timerH3: 'година',
                timerM1: 'хвилин',
                timerM2: 'хвилина',
                timerM3: 'хвилини',


                available: "В наявності",
                notAvalaible: "Немає",
                buyI: "Купити",
                sellerI: "Продавець :",
                countryI: "Країна :",
                typeI: "Тип :",
                weightI: "Вага :",
                warantyI: "Гарантія :",


                clearFiltItms: "Очистити фільтри",
                mobFiltrsBtn: "Фільтри",

                itmsPriceL: "Від дешевших до дорожчих",
                itmsPriceH: "Від дорожчих до дешевших",

                itmsCountF: "Знайдено",
                itmsCountFv1: "товар",
                itmsCountFv2: "товари",
                itmsCountFv3: "товарів",

                noItems: "Товар не знайдено за обраними фільтрами",
                noItemsReq: "Будь ласка, змініть критерії фільтрації.",

                showMoreItmsBtn: "Показати ще",

            },
        },
    },

    lng: savedLanguage,
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
})

export default i18n;
