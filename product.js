// Copyright (c) 2023 smable<316245279@qq.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const products = [
  {
    id: 0,
    title: "iphone 14",
    price: 5000,
    number: 10, //表示库存
  },
  {
    id: 1,
    title: "xiaomi 13",
    price: 3000,
    number: 20, //表示库存
  },
  {
    id: 2,
    title: "huawei mate10",
    price: 4000,
    number: 8, //表示库存
  },
  {
    id: 3,
    title: "iPhone 12",
    price: 6999,
    number: 20
  },
  {
    id: 4,
    title: "Samsung Galaxy S21",
    price: 7999,
    number: 15
  },
  {
    id: 5,
    title: "Google Pixel 6",
    price: 8999,
    number: 12
  },
   {
    id: 6,
    title: "MacBook Pro M1",
    price: 12999,
    number: 8
  },
  {
    id: 7,
    title: "Sony PlayStation 5",
    price: 4999,
    number: 4
  },
  {
    id: 8,
    title: "Nintendo Switch",
    price: 2999,
    number: 10
  },
  {
    id: 9,
    title: "Fitbit Charge 4",
    price: 899,
    number: 25
  },
  {
    id: 10,
    title: "Bose QuietComfort 35",
    price: 1599,
    number: 18
  },
  {
    id: 11,
    title: "GoPro HERO9 Black",
    price: 2799,
    number: 6
  },
  {
    id: 12,
    title: "DJI Mavic Air 2",
    price: 6499,
    number: 9
  },
  {
    id: 13,
    title: "HP Spectre x360",
    price: 8499,
    number: 7
  },
  {
    id: 14,
    title: "LG OLED CX Series",
    price: 12999,
    number: 3
  },
  {
    id: 15,
    title: "Microsoft Surface Laptop 4",
    price: 8999,
    number: 11
  },
  {
    id: 16,
    title: "Beats Studio Buds",
    price: 999,
    number: 20
  },
  {
    id: 17,
    title: "Garmin Forerunner 945",
    price: 3999,
    number: 15
  },
  {
    id: 18,
    title: "Xbox Series X",
    price: 4999,
    number: 8
  },
  {
    id: 19,
    title: "Canon EOS R5",
    price: 18999,
    number: 5
  },
  {
    id: 20,
    title: "Nikon Z7 II",
    price: 15999,
    number: 10
  },
  {
    id: 21,
    title: "Apple Watch Series 7",
    price: 3999,
    number: 12
  },
  {
    id: 22,
    title: "Razer Blade 15",
    price: 10999,
    number: 6
  },
  {
    id: 23,
    title: "Samsung QLED Q80T",
    price: 8999,
    number: 7
  },
  {
    id: 24,
    title: "Huawei MateBook X Pro",
    price: 8999,
    number: 9
  },
  {
    id: 25,
    title: "Sony WH-1000XM4",
    price: 1999,
    number: 12
  },
  {
    id: 26,
    title: "AMD Ryzen 9 5900X",
    price: 5699,
    number: 5
  },
  {
    id: 27,
    title: "Samsung Odyssey G9",
    price: 12999,
    number: 3
  },
  {
    id: 28,
    title: "Logitech MX Master 3",
    price: 699,
    number: 25
  },
  {
    id: 29,
    title: "Bose SoundLink Revolve+",
    price: 1899,
    number: 18
  },
  {
    id: 30,
    title: "Apple AirPods Pro",
    price: 1799,
    number: 14
  },
  {
    id: 31,
    title: "Microsoft Xbox Elite Wireless Controller Series 2",
    price: 1099,
    number: 10
  },
  {
    id: 32,
    title: "Dell Ultrasharp U2720Q",
    price: 2399,
    number: 8
  },
  {
    id: 33,
    title: "Sony A7R IV",
    price: 20999,
    number: 6
  },
  {
    id: 34,
    title: "Nintendo Switch Lite",
    price: 1999,
    number: 15
  },
  {
    id: 35,
    title: "Google Nest Hub (2nd Gen)",
    price: 699,
    number: 12
  },
  {
    id: 36,
    title: "JBL Charge 5",
    price: 1299,
    number: 20
  },
  {
    id: 37,
    title: "Fitbit Versa 3",
    price: 1499,
    number: 10
  },
  {
    id: 38,
    title: "Razer Huntsman Elite",
    price: 1599,
    number: 15
  },
  {
    id: 39,
    title: "Xiaomi Mi 11",
    price: 3999,
    number: 9
  },
  {
    id: 40,
    title: "ASUS ROG Swift PG279Q",
    price: 4999,
    number: 7
  },
  {
    id: 41,
    title: "LG Tone Free FN7",
    price: 699,
    number: 18
  },
  {
    id: 42,
    title: "GoPro Hero 10 Black",
    price: 3499,
    number: 10
  },
  {
    id: 43,
    title: "Bose Frames Alto",
    price: 1099,
    number: 8
  },
  {
    id: 44,
    title: "HP Envy x360",
    price: 7999,
    number: 15
  },
  {
    id: 45,
    title: "Sony WH-1000XM3",
    price: 1699,
    number: 12
  },
  {
    id: 46,
    title: "Garmin Fenix 6 Pro",
    price: 5499,
    number: 9
  },
  {
    id: 47,
    title: "Nikon Z6 II",
    price: 12999,
    number: 5
  },
  {
    id: 48,
    title: "手机模型A",
    price: 199,
    number: 1
  },
  {
    id: 49,
    title: "手机模型B",
    price: 299,
    number: 1
  },
];
//1s中之后返回数组数据
export const getProducts = async () => {
  //为了模拟真实的接口请求
  await wait(1000);
  return products;
};
//结算商品
export const buyProducts = async () => {
  await wait(1000);
  //如果返回true 页面显示结算成功 否则显示结算失败
  return Math.random() > 0.5;
};
function wait(delay) {
  //实现一个wait方法 模拟了 一秒后再执行后面的函数
  return new Promise((res) => {
    setTimeout(res, delay);
  });
}

