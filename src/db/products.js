
const products = [
    { id: 1, pic: 'img/items/tv.svg', picalt1: 'img/items/tvalt1.svg', picalt2: 'img/items/tvalt2.svg', alt: 'Television', category: 'TV', name: 'Star Tv', status: "Есть", price: 100, color: 'black', country: 'UA', promo: 'promo1' },
    { id: 2, pic: 'img/items/tv.svg', picalt1: 'img/items/tvalt1.svg', picalt2: 'img/items/tvalt2.svg', alt: 'Television', category: 'TV', name: 'Star Tv', status: "Есть", price: 2100, color: 'green', country: 'UA' },
    { id: 3, pic: 'img/items/tv2.svg', alt: 'Television', category: 'TV', name: 'Tv King', status: "Есть", price: 400, color: 'blue', country: 'UK' },
    { id: 4, pic: 'img/items/tv2.svg', picalt1: 'img/items/tvalt4.svg', alt: 'Television', category: 'TV', name: 'Tv King', status: "Есть", price: 4400, color: 'blue', country: 'UK' },
    { id: 5, pic: 'img/items/tv.svg', alt: 'Television', category: 'TV', name: 'Beam Tv', status: "Нет в наличии", price: 1000, color: 'black', country: 'UA', promo: 'promo1' },
    { id: 6, pic: 'img/items/tv.svg', alt: 'Television', category: 'TV', name: 'Beam Tv', status: "Нет в наличии", price: 10000, color: 'blue', country: 'UA', promo: 'promo1' },
    { id: 7, pic: 'img/items/tv3.svg', picalt1: 'img/items/tvalt3.svg', alt: 'Television', category: 'TV', name: 'Zero screen', status: "Есть", price: 3300, color: 'yellow', country: 'Japan' },
    { id: 8, pic: 'img/items/tv3.svg', alt: 'Television', category: 'TV', name: 'Zero screen', status: "Есть", price: 1900, color: 'black', country: 'Japan' },
    { id: 9, pic: 'img/items/tv3.svg', picalt1: 'img/items/tvalt1.svg', picalt2: 'img/items/tvalt2.svg', alt: 'Television', category: 'TV', name: 'Kiki', status: "Есть", price: 199, color: 'red', country: 'Japan', promo: 'promo1' },
    { id: 10, pic: 'img/items/tv3.svg', alt: 'Television', category: 'TV', name: 'Kiki', status: "Есть", price: 1000, color: 'yellow', country: 'Japan' },
    { id: 11, pic: 'img/items/tv.svg', alt: 'Television', category: 'TV', name: 'Tv Shoot', status: "Нет в наличии", price: 400, color: 'blue', country: 'Japan', promo: 'promo1' },
    { id: 12, pic: 'img/items/tv.svg', picalt1: 'img/items/tvalt1.svg', picalt2: 'img/items/tvalt2.svg', alt: 'Television', category: 'TV', name: 'Tv ShootPlus', status: "Нет в наличии", price: 1400, color: 'blue', country: 'Japan', promo: 'promo1' },
    { id: 13, pic: 'img/items/tv.svg', picalt1: 'img/items/tvalt2.svg', picalt2: 'img/items/tvalt4.svg', alt: 'Television', category: 'TV', name: 'Tv ShootMax', status: "Есть", price: 2400, color: 'red', country: 'Japan', promo: 'promo1' },
    { id: 14, pic: 'img/items/tv2.svg', picalt1: 'img/items/tvalt4.svg', picalt2: 'img/items/tvalt2.svg', alt: 'Television', category: 'TV', name: 'Tv Q', status: "Нет в наличии", price: 700, color: 'blue', country: 'China' },
    { id: 15, pic: 'img/items/tv2.svg', picalt1: 'img/items/tvalt3.svg', picalt2: 'img/items/tvalt4.svg', alt: 'Television', category: 'TV', name: 'Tv Q-plus', status: "Нет в наличии", price: 900, color: 'blue', country: 'China' },



    { id: 20, pic: 'img/items/phone.svg', picalt1: 'img/items/phonealt1.svg', picalt2: 'img/items/phonealt2.svg', alt: 'Phone', category: 'Phone', name: 'Songsun', status: "Нет в наличии", price: 1400, color: 'blue', country: 'Japan' },
    { id: 21, pic: 'img/items/phone.svg', picalt1: 'img/items/phonealt3.svg', alt: 'Phone', category: 'Phone', name: 'Songsun', status: "Есть", price: 1400, color: 'black', country: 'Japan', promo: 'promo2' },
    { id: 22, pic: 'img/items/phone.svg', picalt1: 'img/items/phonealt1.svg', picalt2: 'img/items/phonealt2.svg', alt: 'Phone', category: 'Phone', name: 'Songsun', status: "Есть", price: 2400, color: 'red', country: 'Japan', promo: 'promo2' },
    { id: 23, pic: 'img/items/phone2.svg', alt: 'Phone', category: 'Phone', name: 'Chi Chi phone', status: "Есть", price: 150, color: 'red', country: 'China', promo: 'promo2' },
    { id: 24, pic: 'img/items/phone2.svg', picalt1: 'img/items/phonealt2.svg', alt: 'Phone', category: 'Phone', name: 'Chi Chi phonemax', status: "Нет в наличии", price: 1400, color: 'yellow', country: 'China' },
    { id: 25, pic: 'img/items/phone2.svg', alt: 'Phone', category: 'Phone', name: 'Chi Chi phoneplus', status: "Есть", price: 1499, color: 'green', country: 'China' },
    { id: 26, pic: 'img/items/phone2.svg', picalt1: 'img/items/phonealt1.svg', picalt2: 'img/items/phonealt2.svg', alt: 'Phone', category: 'Phone', name: 'Chi', status: "Нет в наличии", price: 400, color: 'blue', country: 'China', promo: 'promo2' },
    { id: 27, pic: 'img/items/phone3.svg', alt: 'Phone', category: 'Phone', name: 'Smart Q+', status: "Есть", price: 700, color: 'green', country: 'UK' },
    { id: 28, pic: 'img/items/phone3.svg', picalt1: 'img/items/phonealt1.svg', alt: 'Phone', category: 'Phone', name: 'Smart', status: "Есть", price: 800, color: 'black', country: 'UA' },
    { id: 29, pic: 'img/items/phone.svg', alt: 'Phone', category: 'Phone', name: 'Boss', status: "Нет в наличии", price: 1600, color: 'yellow', country: 'Germany', promo: 'promo2' },
    { id: 30, pic: 'img/items/phone.svg', alt: 'Phone', category: 'Phone', name: 'Boss', status: "Нет в наличии", price: 1600, color: 'yellow', country: 'Germany' },
    { id: 31, pic: 'img/items/phone3.svg', picalt1: 'img/items/phonealt1.svg', picalt2: 'img/items/phonealt2.svg', alt: 'Phone', category: 'Phone', name: 'Boss-max', status: "Есть", price: 399, color: 'blue', country: 'Germany', promo: 'promo2' },
    { id: 32, pic: 'img/items/phone3.svg', alt: 'Phone', category: 'Phone', name: 'Boss-plus', status: "Есть", price: 400, color: 'red', country: 'Germany' },
    { id: 33, pic: 'img/items/phone2.svg', picalt1: 'img/items/phonealt2.svg', picalt2: 'img/items/phonealt3.svg', alt: 'Phone', category: 'Phone', name: 'S.M.A.R.T', status: "Есть", price: 800, color: 'black', country: 'UK' },
    { id: 34, pic: 'img/items/phone2.svg', picalt1: 'img/items/phonealt1.svg', picalt2: 'img/items/phonealt3.svg', alt: 'Phone', category: 'Phone', name: 'S.M.A.R.T-S', status: "Есть", price: 900, color: 'black', country: 'UK' },




    { id: 40, pic: 'img/items/took.svg', picalt1: 'img/items/dryalt.svg', alt: 'snaks', category: 'Food', name: 'Dry pork', nameUA: 'Сушена свининка', nameRU: "Сушеная свинина", status: "Нет в наличии", price: 100, country: 'Germany', promo: 'promo3' },
    { id: 41, pic: 'img/items/chips.svg', picalt1: 'img/items/chipsalt1.svg', alt: 'food', category: 'Food', nameUA: "Чіпси", nameRU: "Чипсы", name: 'Chips', status: "Есть", price: 200, country: 'Germany' },
    { id: 42, pic: 'img/items/chips.svg', picalt1: 'img/items/chipsalt2.svg', alt: 'food', category: 'Food', nameUA: "Чіпси Сир", nameRU: "Чипсы Сыр", name: 'Chips & chees', status: "Есть", price: 100, country: 'Germany', promo: 'promo3' },
    { id: 43, pic: 'img/items/sticks.svg', picalt1: 'img/items/dryalt.svg', alt: 'food', category: 'Food', nameUA: "Рибні палочки", nameRU: "Рыбные палочки", name: 'Fish stiks', status: "Есть", price: 1100, country: 'UK', promo: 'promo3' },
    { id: 44, pic: 'img/items/beer.svg', picalt1: 'img/items/beeralt1.svg', alt: 'beer', category: 'Food', nameUA: "Пиво", nameRU: "Пиво", name: 'Beer', status: "Есть", price: 110, country: 'UK' },
    { id: 45, pic: 'img/items/beer4.svg', picalt1: 'img/items/beeralt2.svg', alt: 'beer', category: 'Food', nameUA: "ПивоМакс(4пак)", nameRU: "ПивоМакс(4пак)", name: 'BeerMax(4pack)', status: "Нет в наличии", price: 400, country: 'UK' },
    { id: 46, pic: 'img/items/nuts.svg', alt: 'food', category: 'Food', name: 'Nuts', nameUA: "Горiшки", nameRU: "Орешки", status: "Нет в наличии", price: 40, country: 'UA', promo: 'promo3' },
    { id: 47, pic: 'img/items/noodle.svg', picalt1: 'img/items/noodlesalt2.svg', alt: 'food', nameUA: "Лапша", nameRU: "Лапша", category: 'Food', name: 'Noodles', status: "Есть", price: 300, country: 'UA' },
    { id: 48, pic: 'img/items/took.svg', alt: 'food', category: 'Food', name: 'Took pook 4pack', status: "Есть", price: 499, country: 'China' },
    { id: 49, pic: 'img/items/took.svg', picalt1: 'img/items/meatalt1.svg', alt: 'food', category: 'Food', name: 'Took pook', status: "Есть", price: 200, country: 'China', promo: 'promo3' },
    { id: 50, pic: 'img/items/sticks.svg', alt: 'food', category: 'Food', name: 'Dry squid sticks', nameUA: "Сушений кальмар", nameRU: "Сушеный кальмар", status: "Есть", price: 300, country: 'Japan', promo: 'promo3' },
    { id: 51, pic: 'img/items/noodle2.svg', picalt1: 'img/items/noodlesalt1.svg', picalt2: 'img/items/noodlesalt2.svg', alt: 'food', category: 'Food', name: 'sofo noodle', status: "Нет в наличии", price: 1100, country: 'Japan' },
    { id: 52, pic: 'img/items/noodle2.svg', picalt1: 'img/items/noodlesalt2.svg', alt: 'food', category: 'Food', name: 'wofo noodle', status: "Есть", price: 20, country: 'Japan', promo: 'promo3' },
    { id: 53, pic: 'img/items/pie.svg', picalt1: 'img/items/piealt1.svg', alt: 'food', category: 'Food', nameUA: "Пирiг", nameRU: "Пирог", name: 'Pie', status: "Есть", price: 20, country: 'UA' },
    { id: 54, pic: 'img/items/pie.svg', alt: 'food', category: 'Food', name: 'Apple Pie', nameUA: "Яблучний пиріг", nameRU: "Яблочный пирог", status: "Нет в наличии", price: 200, country: 'UA' },
    { id: 55, pic: 'img/items/chips.svg', picalt1: 'img/items/chipsalt1.svg', picalt2: 'img/items/chipsalt2.svg', alt: 'food', category: 'Food', nameUA: "Чіпси", nameRU: "Чипсы", name: 'Chips', status: "Есть", price: 100, country: 'UK', promo: 'promo3' },
    { id: 56, pic: 'img/items/chips.svg', picalt1: 'img/items/chipsalt1.svg', alt: 'food', category: 'Food', nameUA: "Чіпси", nameRU: "Чипсы", name: 'Chips', status: "Есть", price: 370, country: 'UK' },




    { id: 60, pic: 'img/items/cap.svg', picalt1: 'img/items/capalt1.svg', alt: 'cap', category: 'Clothes', nameUA: 'Кепка "Cap 4a"', nameRU: 'Кепка "Cap 4a"', name: 'Cap "Cap 4a"', status: "Нет в наличии", price: 400, color: 'green', country: 'Germany' },
    { id: 61, pic: 'img/items/cap2.svg', alt: 'cap', category: 'Clothes', nameUA: 'Кепка "Cap 5a"', nameRU: 'Кепка "Cap 5a"', name: 'Cap "Cap 5a"', status: "Есть", price: 300, color: 'blue', country: 'Germany' },
    { id: 62, pic: 'img/items/cap2.svg', alt: 'cap', category: 'Clothes', nameUA: 'Кепка Tuffhood', nameRU: 'Кепка Tuffhood', name: 'Cap Tuffhood', status: "Есть", price: 300, color: 'blue', country: 'UA', promo: 'promo4' },
    { id: 63, pic: 'img/items/cap.svg', picalt1: 'img/items/capalt1.svg', alt: 'cap', category: 'Clothes', nameUA: 'Кепка Tuffhood', nameRU: 'Кепка Tuffhood', name: 'Cap Tuffhood', status: "Есть", price: 200, color: 'black', country: 'UA' },
    { id: 64, pic: 'img/items/cap3.svg', alt: 'cap', category: 'Clothes', nameUA: 'Кепка Cappy', nameRU: 'Кепка Cappy', name: "Cap Cappy", status: "Нет в наличии", price: 400, color: 'black', country: 'Japan', promo: 'promo4' },
    { id: 65, pic: 'img/items/short.svg', alt: 'shorts', category: 'Clothes', nameUA: 'Шорти Gang', nameRU: 'Шорты Gang', name: "Shorts Gang", status: "Есть", price: 100, color: 'green', country: 'UK', promo: 'promo4' },
    { id: 66, pic: 'img/items/short.svg', alt: 'shorts', category: 'Clothes', nameUA: 'Шорти Gang', nameRU: 'Шорты Gang', name: "Shorts Gang", status: "Есть", price: 100, color: 'green', country: 'UK' },
    { id: 67, pic: 'img/items/short2.svg', alt: 'shorts', category: 'Clothes', nameUA: 'Шорти Gang 5а', nameRU: 'Шорты Gang 5а', name: "Shorts Gang 5а", status: "Есть", price: 600, color: 'black', country: 'Germany' },
    { id: 68, pic: 'img/items/tshirt.svg', alt: 't-shirt', category: 'Clothes', nameUA: 'Футботка Hi', nameRU: 'Футботка Hi', name: 'T-shirt Hi', status: "Есть", price: 599, color: 'black', country: 'China', promo: 'promo4' },
    { id: 69, pic: 'img/items/tshirt.svg', alt: 't-shirt', category: 'Clothes', nameUA: 'Футботка Hi', nameRU: 'Футботка Hi', name: 'T-shirt Hi', status: "Нет в наличии", price: 40, color: 'red', country: 'China' },
    { id: 70, pic: 'img/items/tshirt2.svg', alt: 't-shirt', category: 'Clothes', nameUA: 'Футботка Tuffhood', nameRU: 'Футботка Tuffhood', name: 'T-shirt Tuffhood', status: "Есть", price: 40, color: 'red', country: 'UK' },
    { id: 71, pic: 'img/items/tshirt2.svg', alt: 't-shirt', category: 'Clothes', nameUA: 'Футботка Gang', nameRU: 'Футботка Gang', name: 'T-shirt Gang', status: "Есть", price: 100, color: 'yellow', country: 'UA', promo: 'promo4' },
    { id: 72, pic: 'img/items/tshirt2.svg', alt: 't-shirt', category: 'Clothes', nameUA: 'Футботка Cappy', nameRU: 'Футботка Cappy', name: 'T-shirt Cappy', status: "Есть", price: 220, color: 'green', country: 'Japan', promo: 'promo4' },
    { id: 73, pic: 'img/items/short2.svg', alt: 'shorts', category: 'Clothes', nameUA: 'Шорти Cappy', nameRU: 'Шорты Cappy', name: "Shorts Cappy", status: "Есть", price: 430, color: 'red', country: 'Japan' },
    { id: 74, pic: 'img/items/short2.svg', alt: 'shorts', category: 'Clothes', nameUA: 'Шорти Cappy', nameRU: 'Шорты Cappy', name: "Shorts Cappy", status: "Нет в наличии", price: 40, color: 'blue', country: 'Japan' },





    { id: 80, pic: 'img/items/cream.svg', picalt1: 'img/items/creamalt2.svg', picalt2: 'img/items/creamalt3.svg', alt: 'cream', category: 'Health', name: 'Крем Touch', status: "Есть", price: 400, country: 'Japan' },
    { id: 81, pic: 'img/items/cream.svg', alt: 'cream', category: 'Health', name: 'Крем Шелковая кожа', status: "Есть", price: 400, country: 'UA', promo: 'promoSp' },
    { id: 82, pic: 'img/items/cream2.svg', picalt1: 'img/items/creamalt2.svg', picalt2: 'img/items/creamalt3.svg', alt: 'cream', category: 'Health', name: 'Крем LightTouch', status: "Есть", price: 300, country: 'Japan' },
    { id: 83, pic: 'img/items/cream3.svg', alt: 'cream', category: 'Health', name: 'Крем Sunlight', status: "Есть", price: 200, country: 'Germany' },
    { id: 84, pic: 'img/items/cream3.svg', picalt1: 'img/items/creamalt3.svg', alt: 'cream', category: 'Health', name: 'Cream Sunlight 2in1', nameUA: 'Крем Sunlight 2in1', nameRU: 'Крем Sunlight 2in1', status: "Нет в наличии", price: 490, country: 'Germany', promo: 'promoSp' },
    { id: 85, pic: 'img/items/lotion.svg', picalt1: 'img/items/creamalt1.svg', alt: 'losion', category: 'Health', name: 'Touch Lotion', nameUA: 'Лосьйон Touch', nameRU: 'Лосьон Touch', status: "Нет в наличии", price: 1400, country: 'Japan' },
    { id: 86, pic: 'img/items/lotion.svg', picalt1: 'img/items/creamalt1.svg', alt: 'losion', category: 'Health', name: 'Touch-Y Lotion', nameUA: 'Лосьйон Touch-Y', nameRU: 'Лосьон Touch-Y', status: "Есть", price: 2400, country: 'Japan', promo: 'promoS' },
    { id: 87, pic: 'img/items/lotion2.svg', picalt1: 'img/items/creamalt1.svg', alt: 'losion', category: 'Health', name: 'Sunlight Lotion', nameUA: 'Лосьйон Sunlight', nameRU: 'Лосьон Sunlight', status: "Есть", price: 1200, country: 'Germany' },
    { id: 88, pic: 'img/items/lotion2.svg', alt: 'losion', category: 'Health', name: 'Touch Lotion', nameUA: 'Лосьйон Touch', nameRU: 'Лосьон Touch', status: "Нет в наличии", price: 220, country: 'Japan', promo: 'promoSp' },
    { id: 89, pic: 'img/items/lotion.svg', picalt1: 'img/items/creamalt1.svg', alt: 'losion', category: 'Health', name: 'EYE Lotion', nameUA: 'Лосьйон EYE', nameRU: 'Лосьон EYE', status: "Есть", price: 2300, country: 'UK' },
    { id: 90, pic: 'img/items/gel2.svg', picalt1: 'img/items/creamalt1.svg', picalt2: 'img/items/creamalt3.svg', alt: 'gel', category: 'Health', name: 'EYE Gel', nameUA: 'Гель EYE', nameRU: 'Гель EYE', status: "Есть", price: 400, country: 'UK' },
    { id: 91, pic: 'img/items/gel2.svg', alt: 'gel', category: 'Health', name: 'EYE-max Gel', nameUA: 'Гель EYE-max', nameRU: 'Гель EYE-max', status: "Есть", price: 500, country: 'UK', promo: 'promoSp' },
    { id: 92, pic: 'img/items/gel.svg', picalt1: 'img/items/creamalt1.svg', picalt2: 'img/items/creamalt2.svg', alt: 'gel', category: 'Health', name: 'Touch Gel', nameUA: 'Гель Touch', nameRU: 'Гель Touch', status: "Нет в наличии", price: 550, country: 'Japan' },
    { id: 93, pic: 'img/items/gel.svg', alt: 'gel', category: 'Health', name: 'Silk Skin Gel', nameUA: 'Гель Шовкова шкіра', nameRU: 'Гель Шелковая кожа', status: "Есть", price: 560, country: 'UA' },
    { id: 94, pic: 'img/items/mask.svg', picalt1: 'img/items/creamalt3.svg', picalt2: 'img/items/creamalt4.svg', alt: 'mask', category: 'Health', name: 'Touch Mask', nameUA: 'Маска Touch', nameRU: 'Маска Touch', status: "Есть", price: 330, country: 'Japan', promo: 'promoSp' },
    { id: 95, pic: 'img/items/mask.svg', alt: 'mask', category: 'Health', name: 'Silk Skin Mask', nameUA: 'Маска Шовкова шкіра', nameRU: 'Маска Шелковая кожа', status: "Нет в наличии", price: 400, country: 'UA' },
    { id: 96, pic: 'img/items/mask.svg', picalt1: 'img/items/creamalt3.svg', alt: 'mask', category: 'Health', name: 'Blum Mask', nameUA: 'Маска Blum', nameRU: 'Маска Blum', status: "Есть", price: 100, country: 'China', promo: 'promoSp' },
    { id: 97, pic: 'img/items/mask.svg', alt: 'mask', category: 'Health', name: 'Touch-Y Mask', nameUA: 'Маска Touch-Y', nameRU: 'Маска Touch-Y', status: "Есть", price: 100, country: 'Japan', promo: 'promoSp' },
    { id: 98, pic: 'img/items/mask.svg', alt: 'mask', category: 'Health', name: 'Frootie Mask', nameUA: 'Маска Frootie', nameRU: 'Маска Frootie', status: "Есть", price: 1200, country: 'China' },
    { id: 99, pic: 'img/items/mask.svg', picalt1: 'img/items/creamalt3.svg', alt: 'mask', category: 'Health', name: 'Frootie-Two Mask', nameUA: 'Маска Frootie-Two', nameRU: 'Маска Frootie-Two', status: "Есть", price: 1300, country: 'China' },


]
export default products;