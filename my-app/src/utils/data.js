export const products = [
  // ПРОЦЕССОРЫ INTEL (9 штук)
  {
    id: 1,
    name: 'Intel Core i5-12400F',
    category: 'cpu',
    price: 485,
    brand: 'Intel',
    specs: {
      поколение: '12th Gen Alder Lake',
      ядра: '6',
      потоки: '12',
      частота: '2.5-4.4 GHz',
      socket: 'LGA 1700',
      кэш: '18 MB',
      TDP: '65W'
    },
    image: 'https://img1.akspic.ru/crops/2/9/1/6/4/146192/146192-tovarnyj_znak-intel_core_i7-elektrik-intel-intel_core_i5-1920x1080.jpg',
    rating: 4.6
  },
  {
    id: 2,
    name: 'Intel Core i7-12700K',
    category: 'cpu',
    price: 620,
    brand: 'Intel',
    specs: {
      поколение: '12th Gen Alder Lake',
      ядра: '12',
      потоки: '20',
      частота: '3.6-5.0 GHz',
      socket: 'LGA 1700',
      кэш: '25 MB',
      TDP: '125W'
    },
    image: 'https://img1.akspic.ru/crops/2/9/1/6/4/146192/146192-tovarnyj_znak-intel_core_i7-elektrik-intel-intel_core_i5-1920x1080.jpg',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Intel Core i9-12900KS',
    category: 'cpu',
    price: 920,
    brand: 'Intel',
    specs: {
      поколение: '12th Gen Alder Lake',
      ядра: '16',
      потоки: '24',
      частота: '3.2-5.2 GHz',
      socket: 'LGA 1700',
      кэш: '30 MB',
      TDP: '125W'
    },
    image: 'https://img1.akspic.ru/crops/2/9/1/6/4/146192/146192-tovarnyj_znak-intel_core_i7-elektrik-intel-intel_core_i5-1920x1080.jpg',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Intel Core i5-13600K',
    category: 'cpu',
    price: 590,
    brand: 'Intel',
    specs: {
      поколение: '13th Gen Raptor Lake',
      ядра: '14',
      потоки: '20',
      частота: '3.5-5.1 GHz',
      socket: 'LGA 1700',
      кэш: '24 MB',
      TDP: '125W'
    },
    image: 'https://w0.peakpx.com/wallpaper/966/743/HD-wallpaper-introducing-13th-gen-intel-core-processors-for.jpg',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Intel Core i7-13700KF',
    category: 'cpu',
    price: 768,
    brand: 'Intel',
    specs: {
      поколение: '13th Gen Raptor Lake',
      ядра: '16',
      потоки: '24',
      частота: '3.4-5.4 GHz',
      socket: 'LGA 1700',
      кэш: '30 MB',
      TDP: '125W'
    },
    image: 'https://w0.peakpx.com/wallpaper/966/743/HD-wallpaper-introducing-13th-gen-intel-core-processors-for.jpg',
    rating: 4.8
  },
  {
    id: 6,
    name: 'Intel Core i9-13900',
    category: 'cpu',
    price: 1500,
    brand: 'Intel',
    specs: {
      поколение: '13th Gen Raptor Lake',
      ядра: '24',
      потоки: '32',
      частота: '3.0-5.8 GHz',
      socket: 'LGA 1700',
      кэш: '36 MB',
      TDP: '125W'
    },
    image: 'https://w0.peakpx.com/wallpaper/966/743/HD-wallpaper-introducing-13th-gen-intel-core-processors-for.jpg',
    rating: 4.9
  },
  {
    id: 7,
    name: 'Intel Core Ultra 5 225F',
    category: 'cpu',
    price: 715,
    brand: 'Intel',
    specs: {
      поколение: 'Core Ultra Meteor Lake',
      ядра: '14',
      потоки: '18',
      частота: '3.6-4.5 GHz',
      socket: 'LGA 1851',
      кэш: '18 MB',
      TDP: '45W'
    },
    image: 'https://www.guiahardware.es/wp-content/uploads/2025/09/intel-confirma-arrow-lake-refresh-y-nova-lake-para-2026-1.jpg',
    rating: 4.5
  },
  {
    id: 8,
    name: 'Intel Core Ultra 7 265KF',
    category: 'cpu',
    price: 1200,
    brand: 'Intel',
    specs: {
      поколение: 'Core Ultra Meteor Lake',
      ядра: '16',
      потоки: '22',
      частота: '3.8-4.8 GHz',
      socket: 'LGA 1851',
      кэш: '24 MB',
      TDP: '45W'
    },
    image: 'https://www.guiahardware.es/wp-content/uploads/2025/09/intel-confirma-arrow-lake-refresh-y-nova-lake-para-2026-1.jpg',
    rating: 5.0
  },
  {
    id: 9,
    name: 'Intel Core Ultra 9 285K',
    category: 'cpu',
    price: 2300,
    brand: 'Intel',
    specs: {
      поколение: 'Core Ultra Meteor Lake',
      ядра: '16',
      потоки: '22',
      частота: '3.8-5.1 GHz',
      socket: 'LGA 1851',
      кэш: '24 MB',
      TDP: '45W'
    },
    image: 'https://www.guiahardware.es/wp-content/uploads/2025/09/intel-confirma-arrow-lake-refresh-y-nova-lake-para-2026-1.jpg',
    rating: 4.7
  },

  // ПРОЦЕССОРЫ AMD (9 штук)
  {
    id: 10,
    name: 'AMD Ryzen 5 5600X',
    category: 'cpu',
    price: 480,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 5000',
      ядра: '6',
      потоки: '12',
      частота: '3.7-4.6 GHz',
      socket: 'AM4',
      кэш: '35 MB',
      TDP: '65W'
    },
    image: 'https://wallpaper.forfun.com/fetch/71/71c48f0f1f35f4ae8e5fd7eba07bfbb2.jpeg',
    rating: 4.7
  },
  {
    id: 11,
    name: 'AMD Ryzen 7 5800X',
    category: 'cpu',
    price: 590,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 5000',
      ядра: '8',
      потоки: '16',
      частота: '3.8-4.7 GHz',
      socket: 'AM4',
      кэш: '36 MB',
      TDP: '105W'
    },
    image: 'https://wallpaper.forfun.com/fetch/71/71c48f0f1f35f4ae8e5fd7eba07bfbb2.jpeg',
    rating: 4.6
  },
  {
    id: 12,
    name: 'AMD Ryzen 9 5900X',
    category: 'cpu',
    price: 720,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 5000',
      ядра: '12',
      потоки: '24',
      частота: '3.7-4.8 GHz',
      socket: 'AM4',
      кэш: '70 MB',
      TDP: '105W'
    },
    image: 'https://wallpaper.forfun.com/fetch/71/71c48f0f1f35f4ae8e5fd7eba07bfbb2.jpeg',
    rating: 4.8
  },
  {
    id: 13,
    name: 'AMD Ryzen 5 7800X3D',
    category: 'cpu',
    price: 570,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 7000',
      ядра: '6',
      потоки: '12',
      частота: '4.7-5.3 GHz',
      socket: 'AM5',
      кэш: '128 MB',
      TDP: '105W'
    },
    image: 'https://preview.redd.it/7enpnqb3nw4y.jpg?width=1080&crop=smart&auto=webp&s=ac813e67c1dec24444e8d60f78c18fc250842f7f',
    rating: 4.7
  },
  {
    id: 14,
    name: 'AMD Ryzen 7 7700X',
    category: 'cpu',
    price: 640,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 7000',
      ядра: '8',
      потоки: '16',
      частота: '4.5-5.4 GHz',
      socket: 'AM5',
      кэш: '40 MB',
      TDP: '105W'
    },
    image: 'https://preview.redd.it/7enpnqb3nw4y.jpg?width=1080&crop=smart&auto=webp&s=ac813e67c1dec24444e8d60f78c18fc250842f7f',
    rating: 4.8
  },
  {
    id: 15,
    name: 'AMD Ryzen 9 7900X',
    category: 'cpu',
    price: 890,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 7000',
      ядра: '12',
      потоки: '24',
      частота: '4.7-5.6 GHz',
      socket: 'AM5',
      кэш: '76 MB',
      TDP: '170W'
    },
    image: 'https://preview.redd.it/7enpnqb3nw4y.jpg?width=1080&crop=smart&auto=webp&s=ac813e67c1dec24444e8d60f78c18fc250842f7f',
    rating: 4.8
  },
  {
    id: 16,
    name: 'AMD Ryzen 5 9500F',
    category: 'cpu',
    price: 790,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 9000',
      ядра: '6',
      потоки: '12',
      частота: '4.3-5.0 GHz',
      socket: 'AM5',
      кэш: '22 MB',
      TDP: '65W'
    },
    image: 'https://t2.tudocdn.net/720492?w=1920',
    rating: 4.5
  },
  {
    id: 17,
    name: 'AMD Ryzen 7 9800X',
    category: 'cpu',
    price: 990,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 9000',
      ядра: '8',
      потоки: '16',
      частота: '4.2-5.1 GHz',
      socket: 'AM5',
      кэш: '24 MB',
      TDP: '65W'
    },
    image: 'https://t2.tudocdn.net/720492?w=1920',
    rating: 4.6
  },
  {
    id: 18,
    name: 'AMD Ryzen 9 9950X',
    category: 'cpu',
    price: 1800,
    brand: 'AMD',
    specs: {
      поколение: 'Ryzen 9000',
      ядра: '12',
      потоки: '24',
      частота: '4.4-5.2 GHz',
      socket: 'AM5',
      кэш: '36 MB',
      TDP: '95W'
    },
    image: 'https://t2.tudocdn.net/720492?w=1920',
    rating: 4.7
  },

  // ВИДЕОКАРТЫ NVIDIA (8 штук)
  {
    id: 19,
    name: 'NVIDIA GeForce RTX 4060',
    category: 'gpu',
    price: 1200,
    brand: 'NVIDIA',
    specs: {
      память: '8 GB GDDR6',
      частота: '1830-2460 MHz',
      шина: '128-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '115W'
    },
    image: 'https://i.redd.it/8kbmh2bghhh11.jpg',
    rating: 4.5
  },
  {
    id: 20,
    name: 'NVIDIA GeForce RTX 5060 Ti',
    category: 'gpu',
    price: 1800,
    brand: 'NVIDIA',
    specs: {
      память: '8 GB GDDR6',
      частота: '2310-2535 MHz',
      шина: '128-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '160W'
    },
    image: 'https://wallpapercave.com/wp/wp8749089.jpg',
    rating: 4.6
  },
  {
    id: 21,
    name: 'NVIDIA GeForce RTX 5070',
    category: 'gpu',
    price: 2100,
    brand: 'NVIDIA',
    specs: {
      память: '12 GB GDDR6X',
      частота: '1920-2475 MHz',
      шина: '192-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '200W'
    },
    image: 'https://wallpapercave.com/wp/wp8749089.jpg',
    rating: 4.7
  },
  {
    id: 22,
    name: 'NVIDIA GeForce RTX 4070 Ti',
    category: 'gpu',
    price: 3600,
    brand: 'NVIDIA',
    specs: {
      память: '12 GB GDDR6X',
      частота: '2310-2610 MHz',
      шина: '192-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 16-pin',
      TDP: '285W'
    },
    image: 'https://i.redd.it/8kbmh2bghhh11.jpg',
    rating: 4.7
  },
  {
    id: 23,
    name: 'NVIDIA GeForce RTX 4080',
    category: 'gpu',
    price: 4800,
    brand: 'NVIDIA',
    specs: {
      память: '16 GB GDDR6X',
      частота: '2210-2505 MHz',
      шина: '256-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 16-pin',
      TDP: '320W'
    },
    image: 'https://i.redd.it/8kbmh2bghhh11.jpg',
    rating: 4.8
  },
  {
    id: 24,
    name: 'NVIDIA GeForce RTX 5090',
    category: 'gpu',
    price: 5500,
    brand: 'NVIDIA',
    specs: {
      память: '32 GB GDDR7',
      частота: '2235-2520 MHz',
      шина: '384-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 16-pin',
      TDP: '450W'
    },
    image: 'https://wallpapercave.com/wp/wp8749089.jpg',
    rating: 4.9
  },
  {
    id: 25,
    name: 'NVIDIA RTX 3060',
    category: 'gpu',
    price: 900,
    brand: 'NVIDIA',
    specs: {
      память: '12 GB GDDR6',
      частота: '1320-1777 MHz',
      шина: '192-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '170W'
    },
    image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3090/3090-wallpaper-2560x1440-r1.png',
    rating: 4.4
  },
  {
    id: 26,
    name: 'NVIDIA RTX 3070 Ti',
    category: 'gpu',
    price: 1700,
    brand: 'NVIDIA',
    specs: {
      память: '8 GB GDDR6',
      частота: '1500-1725 MHz',
      шина: '256-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '220W'
    },
    image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3090/3090-wallpaper-2560x1440-r1.png',
    rating: 4.9
  },

  // ВИДЕОКАРТЫ AMD (7 штук)
  {
    id: 27,
    name: 'AMD Radeon RX 7600',
    category: 'gpu',
    price: 1000,
    brand: 'AMD',
    specs: {
      память: '8 GB GDDR6',
      частота: '1720-2655 MHz',
      шина: '128-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '165W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.4
  },
  {
    id: 28,
    name: 'AMD Radeon RX 7700 XT',
    category: 'gpu',
    price: 1900,
    brand: 'AMD',
    specs: {
      память: '12 GB GDDR6',
      частота: '1700-2544 MHz',
      шина: '192-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '2x 8-pin',
      TDP: '245W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.6
  },
  {
    id: 29,
    name: 'AMD Radeon RX 7800 XT',
    category: 'gpu',
    price: 2500,
    brand: 'AMD',
    specs: {
      память: '16 GB GDDR6',
      частота: '1295-2430 MHz',
      шина: '256-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '2x 8-pin',
      TDP: '263W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.7
  },
  {
    id: 30,
    name: 'AMD Radeon RX 7900 GRE',
    category: 'gpu',
    price: 2100,
    brand: 'AMD',
    specs: {
      память: '16 GB GDDR6',
      частота: '1500-2245 MHz',
      шина: '256-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '2x 8-pin',
      TDP: '260W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.7
  },
  {
    id: 31,
    name: 'AMD Radeon RX 7900 XT',
    category: 'gpu',
    price: 3000,
    brand: 'AMD',
    specs: {
      память: '20 GB GDDR6',
      частота: '1500-2394 MHz',
      шина: '320-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '2x 8-pin',
      TDP: '315W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.8
  },
  {
    id: 32,
    name: 'AMD Radeon RX 7900 XTX',
    category: 'gpu',
    price: 3500,
    brand: 'AMD',
    specs: {
      память: '24 GB GDDR6',
      частота: '1900-2485 MHz',
      шина: '384-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '2x 8-pin',
      TDP: '355W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.8
  },
  {
    id: 33,
    name: 'AMD Radeon RX 6700 XT',
    category: 'gpu',
    price: 1500,
    brand: 'AMD',
    specs: {
      память: '12 GB GDDR6',
      частота: '2150-2600 MHz',
      шина: '192-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '2x 8-pin',
      TDP: '250W'
    },
    image: 'https://4kwallpapers.com/images/wallpapers/amd-radeon-gpu-3840x2160-10680.jpg',
    rating: 4.5
  },

  // ВИДЕОКАРТЫ INTEL (3 штуки)
  {
    id: 34,
    name: 'Intel Arc A750',
    category: 'gpu',
    price: 900,
    brand: 'Intel',
    specs: {
      память: '8 GB GDDR6',
      частота: '2050-2400 MHz',
      шина: '256-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin + 1x 6-pin',
      TDP: '225W'
    },
    image: 'https://cdn.wccftech.com/wp-content/uploads/2022/03/2022-03-30_20-10-00.png',
    rating: 4.2
  },
  {
    id: 35,
    name: 'Intel Arc A770',
    category: 'gpu',
    price: 1200,
    brand: 'Intel',
    specs: {
      память: '16 GB GDDR6',
      частота: '2100-2400 MHz',
      шина: '256-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin + 1x 6-pin',
      TDP: '225W'
    },
    image: 'https://cdn.wccftech.com/wp-content/uploads/2022/03/2022-03-30_20-10-00.png',
    rating: 4.3
  },
  {
    id: 36,
    name: 'Intel Arc B580',
    category: 'gpu',
    price: 1500,
    brand: 'Intel',
    specs: {
      память: '12 GB GDDR6',
      частота: '2200-2500 MHz',
      шина: '192-bit',
      порты: '3x DisplayPort, 1x HDMI',
      питание: '1x 8-pin',
      TDP: '185W'
    },
    image: 'https://cdn.wccftech.com/wp-content/uploads/2022/03/2022-03-30_20-10-00.png',
    rating: 4.4
  },

  // SSD НАКОПИТЕЛИ (5 штук)
  {
    id: 37,
    name: 'Samsung 980 Pro 1TB',
    category: 'storage',
    price: 260,
    brand: 'Samsung',
    specs: {
      ёмкость: '1TB',
      тип: 'NVMe M.2',
      скорость_чтения: '7000 MB/s',
      скорость_записи: '5000 MB/s',
      интерфейс: 'PCIe 4.0',
      ресурс: '600 TBW'
    },
    image: 'https://shop.by/images/samsung_980_pro_1tb_mz_v8p1t0bw_2.webp',
    rating: 4.8
  },
  {
    id: 38,
    name: 'WD Black SN850X 2TB',
    category: 'storage',
    price: 450,
    brand: 'WD',
    specs: {
      ёмкость: '2TB',
      тип: 'NVMe M.2',
      скорость_чтения: '7300 MB/s',
      скорость_записи: '6600 MB/s',
      интерфейс: 'PCIe 4.0',
      ресурс: '1200 TBW'
    },
    image: 'https://ir.ozone.ru/s3/multimedia-r/c400/6865931259.jpg',
    rating: 4.7
  },
  {
    id: 39,
    name: 'Crucial P5 Plus 1TB',
    category: 'storage',
    price: 210,
    brand: 'Crucial',
    specs: {
      ёмкость: '1TB',
      тип: 'NVMe M.2',
      скорость_чтения: '6600 MB/s',
      скорость_записи: '5000 MB/s',
      интерфейс: 'PCIe 4.0',
      ресурс: '600 TBW'
    },
    image: 'https://shop.by/images/crucial_p5_plus_1tb_ct1000p5pssd8_2.webp',
    rating: 4.6
  },
  {
    id: 40,
    name: 'Kingston KC3000 2TB',
    category: 'storage',
    price: 360,
    brand: 'Kingston',
    specs: {
      ёмкость: '2TB',
      тип: 'NVMe M.2',
      скорость_чтения: '7000 MB/s',
      скорость_записи: '7000 MB/s',
      интерфейс: 'PCIe 4.0',
      ресурс: '1600 TBW'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6t26bo4ffiOr21ues6eCjCDSPfP8KE2OTIw&s',
    rating: 4.7
  },
  {
    id: 41,
    name: 'Sabrent Rocket 4 Plus 4TB',
    category: 'storage',
    price: 970,
    brand: 'Sabrent',
    specs: {
      ёмкость: '4TB',
      тип: 'NVMe M.2',
      скорость_чтения: '7100 MB/s',
      скорость_записи: '6600 MB/s',
      интерфейс: 'PCIe 4.0',
      ресурс: '3000 TBW'
    },
    image: 'https://i0.wp.com/theoverclockingpage.com/wp-content/uploads/2023/02/sabrent-rocket-4-plus-g-gen4-ssd-released.jpg',
    rating: 4.8
  },

  // ОПЕРАТИВНАЯ ПАМЯТЬ (3 варианта)
  {
    id: 42,
    name: 'Corsair Vengeance RGB 32GB DDR5',
    category: 'ram',
    price: 360,
    brand: 'Corsair',
    specs: {
      объём: '32GB (2x16GB)',
      скорость: '6000MHz',
      тип: 'DDR5',
      тайминги: 'CL36',
      напряжение: '1.35V',
      радиатор: 'RGB'
    },
    image: 'https://m.media-amazon.com/images/I/61D2DDpDITL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.6
  },
  {
    id: 43,
    name: 'G.Skill Trident Z5 RGB 64GB DDR5',
    category: 'ram',
    price: 650,
    brand: 'G.Skill',
    specs: {
      объём: '64GB (2x32GB)',
      скорость: '6400MHz',
      тип: 'DDR5',
      тайминги: 'CL32',
      напряжение: '1.4V',
      радиатор: 'RGB'
    },
    image: 'https://www.gskill.com/_upload/images/166564476414.png',
    rating: 4.7
  },
  {
    id: 44,
    name: 'Kingston Fury Beast 16GB DDR4',
    category: 'ram',
    price: 1880,
    brand: 'Kingston',
    specs: {
      объём: '16GB (2x8GB)',
      скорость: '3200MHz',
      тип: 'DDR4',
      тайминги: 'CL16',
      напряжение: '1.35V',
      радиатор: 'Black'
    },
    image: 'https://www.kivano.kg/images/product/127442/full/1696316656_34954300.jpg',
    rating: 4.5
  },

  // МАТЕРИНСКИЕ ПЛАТЫ (6 видов)
  {
    id: 45,
    name: 'ASUS ROG Strix Z890-E Gaming',
    category: 'motherboard',
    price: 1200,
    brand: 'ASUS',
    specs: {
      сокет: 'LGA 1851',
      чипсет: 'Z790',
      слоты_памяти: '4x DDR5',
      форм_фактор: 'ATX',
      слоты_PCIe: '3x PCIe 5.0',
      порты_SATA: '6x SATA3'
    },
    image: 'https://3dnews.ru/assets/external/illustrations/2024/03/18/1101884/ASUS-Z790-BTF-2.jpg',
    rating: 4.7
  },
  {
    id: 46,
    name: 'Gigabyte B650 AORUS Elite AX',
    category: 'motherboard',
    price: 660,
    brand: 'Gigabyte',
    specs: {
      сокет: 'AM5',
      чипсет: 'B650',
      слоты_памяти: '4x DDR5',
      форм_фактор: 'ATX',
      слоты_PCIe: '1x PCIe 5.0',
      порты_SATA: '4x SATA3'
    },
    image: 'https://cdn.pokde.net/wp-content/uploads/2022/10/gbb650.png',
    rating: 4.6
  },
  {
    id: 47,
    name: 'MSI MPG X670E Carbon WiFi',
    category: 'motherboard',
    price: 1200,
    brand: 'MSI',
    specs: {
      сокет: 'AM5',
      чипсет: 'X670E',
      слоты_памяти: '4x DDR5',
      форм_фактор: 'ATX',
      слоты_PCIe: '2x PCIe 5.0',
      порты_SATA: '6x SATA3'
    },
    image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/X670/mpg/X670E-CARBON-WIFI/mpg_x670e_carbon_wifi-block02.png',
    rating: 4.8
  },
  {
    id: 48,
    name: 'ASRock B760M Steel Legend',
    category: 'motherboard',
    price: 450,
    brand: 'ASRock',
    specs: {
      сокет: 'LGA 1700',
      чипсет: 'B760',
      слоты_памяти: '4x DDR5',
      форм_фактор: 'Micro-ATX',
      слоты_PCIe: '1x PCIe 5.0',
      порты_SATA: '4x SATA3'
    },
    image: 'https://www.asrock.com/mb/photo/B760M%20Steel%20Legend%20WiFi(M1).png',
    rating: 4.5
  },
  {
    id: 49,
    name: 'ASUS TUF Gaming B550-Plus',
    category: 'motherboard',
    price: 350,
    brand: 'ASUS',
    specs: {
      сокет: 'AM4',
      чипсет: 'B550',
      слоты_памяти: '4x DDR4',
      форм_фактор: 'ATX',
      слоты_PCIe: '1x PCIe 4.0',
      порты_SATA: '6x SATA3'
    },
    image: 'https://hyperpc.ru/images/catalog/hardware/motherboards/am4/asus/tuf-gaming-b550-plus-wifi/asus-tuf-gaming-b550-wfi.jpg',
    rating: 4.6
  },
  {
    id: 50,
    name: 'Gigabyte Z690 AORUS Ultra',
    category: 'motherboard',
    price: 820,
    brand: 'Gigabyte',
    specs: {
      сокет: 'LGA 1700',
      чипсет: 'Z690',
      слоты_памяти: '4x DDR5',
      форм_фактор: 'ATX',
      слоты_PCIe: '1x PCIe 5.0',
      порты_SATA: '6x SATA3'
    },
    image: 'https://m.media-amazon.com/images/I/81IfP8puwaL.jpg',
    rating: 4.7
  },

  // БЛОКИ ПИТАНИЯ (5 штук)
  {
    id: 51,
    name: 'Corsair RM750x 750W',
    category: 'psu',
    price: 360,
    brand: 'Corsair',
    specs: {
      мощность: '750W',
      сертификат: '80+ Gold',
      модульность: 'Полностью модульный',
      разъёмы: 'ATX 24-pin, 2x CPU 8-pin',
      кабели: 'Черные плетеные',
      гарантия: '10 лет'
    },
    image: 'https://artline.ua/storage/images/products/22825/gallery/246033/600_gallery_1711204204602598_0.webp',
    rating: 4.7
  },
  {
    id: 52,
    name: 'Seasonic Focus GX-850 850W',
    category: 'psu',
    price: 440,
    brand: 'Seasonic',
    specs: {
      мощность: '850W',
      сертификат: '80+ Gold',
      модульность: 'Полностью модульный',
      разъёмы: 'ATX 24-pin, 2x CPU 8-pin',
      кабели: 'Плоские черные',
      гарантия: '10 лет'
    },
    image: 'https://tehnomart.com/image/catalog/product/248/31/product_image_92731_690524.jpg',
    rating: 4.8
  },
  {
    id: 53,
    name: 'be quiet! Straight Power 11 1000W',
    category: 'psu',
    price: 700,
    brand: 'be quiet!',
    specs: {
      мощность: '1000W',
      сертификат: '80+ Platinum',
      модульность: 'Полностью модульный',
      разъёмы: 'ATX 24-pin, 2x CPU 8-pin',
      кабели: 'Черные плетеные',
      гарантия: '5 лет'
    },
    image: 'https://shop.by/images/be_quiet__straight_power_11_1000w_6.webp',
    rating: 4.7
  },
  {
    id: 54,
    name: 'Cooler Master MWE Gold 650W',
    category: 'psu',
    price: 250,
    brand: 'Cooler Master',
    specs: {
      мощность: '650W',
      сертификат: '80+ Gold',
      модульность: 'Полностью модульный',
      разъёмы: 'ATX 24-pin, 1x CPU 8-pin',
      кабели: 'Черные',
      гарантия: '5 лет'
    },
    image: 'https://cdn.shopify.com/s/files/1/0460/2567/0805/files/COOLER-MASTER-MWE-650W-80-PLUS-GOLD-FULL-MODULAR-ATX-12-MONTHS-WARRANTY-POWER-SUPPLY.jpg?v=1714781343',
    rating: 4.5
  },
  {
    id: 55,
    name: 'EVGA SuperNOVA 1200 P2',
    category: 'psu',
    price: 800,
    brand: 'EVGA',
    specs: {
      мощность: '1200W',
      сертификат: '80+ Platinum',
      модульность: 'Полностью модульный',
      разъёмы: 'ATX 24-pin, 2x CPU 8-pin',
      кабели: 'Плетеные черные',
      гарантия: '10 лет'
    },
    image: 'https://www.hardwareluxx.de/images/stories/galleries/reviews/nt-roundup-1200w-okt14/evga_12s.jpg',
    rating: 4.8
  },

  // ОХЛАЖДЕНИЕ ПРОЦЕССОРА (4 вида)
  {
    id: 56,
    name: 'Noctua NH-D15',
    category: 'cooling',
    price: 310,
    brand: 'Noctua',
    specs: {
      тип: 'Воздушное',
      совместимость: 'LGA 1700, AM5, AM4',
      вентиляторы: '2x 140mm',
      шум: '19.2-24.6 dB',
      высота: '165mm',
      TDP: '220W'
    },
    image: 'https://overclockers.ru/st/legacy/blog/378660/334304_O.png',
    rating: 4.9
  },
  {
    id: 57,
    name: 'NZXT Kraken X63 RGB',
    category: 'cooling',
    price: 450,
    brand: 'NZXT',
    specs: {
      тип: 'Жидкостное AIO',
      совместимость: 'LGA 1700, AM5, AM4',
      радиатор: '280mm',
      вентиляторы: '2x 140mm RGB',
      подсветка: 'RGB',
      TDP: '300W+'
    },
    image: 'https://cdn-ultra.esempla.com/storage/webp/cb7b4a6c-2bfc-4b50-88df-2b2becfa9d2a.webp',
    rating: 4.7
  },
  {
    id: 58,
    name: 'Cooler Master Hyper 212 Black',
    category: 'cooling',
    price: 125,
    brand: 'Cooler Master',
    specs: {
      тип: 'Воздушное',
      совместимость: 'LGA 1700, AM5, AM4',
      вентиляторы: '1x 120mm',
      шум: '8-26 dB',
      высота: '158.8mm',
      TDP: '150W'
    },
    image: 'https://a.storyblok.com/f/281110/1500x1500/ea5886a086/hyper-212-black-00-hover.png',
    rating: 4.5
  },
  {
    id: 59,
    name: 'Arctic Liquid Freezer II 360',
    category: 'cooling',
    price: 380,
    brand: 'Arctic',
    specs: {
      тип: 'Жидкостное AIO',
      совместимость: 'LGA 1700, AM5, AM4',
      радиатор: '360mm',
      вентиляторы: '3x 120mm',
      шум: '22.5 dB',
      TDP: '300W+'
    },
    image: 'https://www.overclockers.ua/cooler/arctic-liquid-freezer-II-360/01-big-arctic-liquid-freezer-II-360.jpg',
    rating: 4.8
  }
]

export const categories = [
  { id: 'cpu', name: 'Процессоры' },
  { id: 'gpu', name: 'Видеокарты' },
  { id: 'motherboard', name: 'Материнские платы' },
  { id: 'ram', name: 'Оперативная память' },
  { id: 'storage', name: 'Накопители' },
  { id: 'psu', name: 'Блоки питания' },
  { id: 'cooling', name: 'Охлаждение' }
]