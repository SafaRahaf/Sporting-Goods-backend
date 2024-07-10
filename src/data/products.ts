import { Product } from "../interfaces/Product";

const products: Product[] = [
  {
    id: 1,
    title: "Basketball",
    category: "Swimming",
    stock: 20,
    brand: "Nike",
    rating: 4.5,
    description:
      "High-quality basketball for outdoor and indoor games. Experience the ultimate in basketball performance with our high-quality basketball designed for both indoor and outdoor play. Built to withstand the rigors of intense games, it offers superior grip, durability, and performance on any court. ",
    price: 1050.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517486/download_8_klfwwl.jpg",
  },
  {
    id: 2,
    title: "Soccer Ball",
    category: "Soccer",
    stock: 15,
    brand: "Adidas",
    rating: 4.2,
    description:
      "Durable soccer ball suitable for all weather conditions. Built tough for enduring performance in every weather, this soccer ball is your reliable companion on any field.",
    price: 3000.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517533/p-one_cahxfu.jpg",
  },
  {
    id: 3,
    title: "Tennis Racket",
    category: "Tennis",
    stock: 10,
    brand: "Wilson",
    rating: 4.8,
    description:
      "Lightweight tennis racket for professional players. Engineered with aerospace-grade materials, this lightweight tennis racket caters to the demands of professional players seeking agility and responsiveness.",
    price: 1020.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517591/images_4_gt2rwu.jpg",
  },
  {
    id: 4,
    title: "Baseball Glove",
    category: "Volleyball",
    stock: 8,
    brand: "Rawlings",
    rating: 4.7,
    description:
      "Comfortable and durable baseball glove for all positions. Discover unparalleled comfort and durability with our versatile baseball glove designed for all positions. Crafted to enhance your performance on the field, this glove combines superior materials with precision engineering, ensuring reliability and comfort inning after inning.",
    price: 750.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517963/download_6_xbnuqj.jpg",
  },
  {
    id: 5,
    title: "Running Shoes",
    category: "Running",
    stock: 25,
    brand: "Asics",
    rating: 4.3,
    description:
      "Breathable and lightweight running shoes for all terrains. Experience ultimate comfort and performance with our advanced running shoes designed for all terrains. Engineered for breathability and lightweight agility, these shoes elevate your running experience to new heights. Whether you're navigating urban streets or rugged trails, our shoes provide unmatched support and flexibility. Step into a world where every stride feels effortless, thanks to innovative materials that keep you cool and dry. Embrace the freedom to conquer any path with confidence and style in our versatile running shoes.",
    price: 9500.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517676/images_5_skpil6.jpg",
  },
  {
    id: 6,
    title: "Stylish design Rugby",
    category: "Rugby",
    stock: 15,
    brand: "Fila",
    rating: 3.6,
    description:
      "Elevate your game with our Stylish Design Rugby Ball, crafted for both performance and aesthetics. This rugby ball features a sleek, modern design that stands out on the field. Its durable construction ensures it can withstand the toughest matches, while the premium grip surface allows for precise handling and control. Whether you're a professional player or just enjoying a casual game, this rugby ball combines functionality with style, making it the perfect addition to your sports gear collection.Description for Product 6.",
    price: 2000.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517773/images_10_osjrko.jpg",
  },
  {
    id: 7,
    title: "Goggles",
    category: "Swimming",
    stock: 70,
    brand: "FBT",
    rating: 4.0,
    description:
      "Stay ahead of the competition with our state-of-the-art goggles. Designed for swimmers of all levels, these goggles offer crystal-clear vision and superior comfort. The anti-fog lenses ensure that you have a clear view underwater, while the UV protection shields your eyes from harmful rays. The adjustable strap and soft silicone gasket provide a snug, leak-proof fit, making these goggles perfect for both training and competition. Dive into excellence with our premium swimming goggles.",
    price: 1200.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517743/p-two_qpjg25.jpg",
  },
  {
    id: 8,
    title: "Best Rated Volleyball",
    category: "Volleyball",
    stock: 15,
    brand: "New Balace",
    rating: 4.9,
    description:
      "Experience the thrill of the game with our best-rated volleyball, designed for both recreational and competitive play. Crafted with superior materials, this volleyball offers excellent durability, grip, and performance. Whether you're spiking, serving, or setting, our top-rated volleyball ensures precision and control on every play. Perfect for players of all skill levels, it’s the ideal choice for both indoor and outdoor courts. Enjoy unmatched quality and elevate your game with the best volleyball endorsed by professionals and enthusiasts alike.",
    price: 4050.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1693973553/cld-sample-3.jpg",
  },
  {
    id: 9,
    title: "Gym Dumble",
    category: "Gym",
    stock: 90,
    brand: "Fila",
    rating: 3.5,
    description:
      "Elevate your workout routine with our premium Gym Dumbbells. Engineered for both beginners and seasoned athletes, these dumbbells are a versatile addition to any fitness regimen. Designed with comfort and durability in mind, they feature ergonomic handles for a secure grip and are coated with high-quality materials to prevent wear and tear. Perfect for strength training, muscle toning, and a wide variety of exercises, our Gym Dumbbells help you achieve your fitness goals efficiently. Available in various weights to cater to all fitness levels, these dumbbells are an essential tool for your home gym or professional training facility.",
    price: 800.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720517804/images_1_i8invl.jpg",
  },
  {
    id: 10,
    title: "Badminton and cork",
    category: "Badminton",
    stock: 15,
    brand: "ERKE",
    rating: 3.9,
    description:
      "Badminton is a fast-paced racket sport played either in singles or doubles format on a rectangular court divided by a net. Players use lightweight rackets to hit a shuttlecock, aiming to score points by landing it in the opponent's half of the court. Known for its speed and agility, badminton demands quick reflexes, strategic thinking, and excellent hand-eye coordination, making it a thrilling and competitive sport enjoyed by people of all ages.",
    price: 2000.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518090/p-3_wl9bei.jpg",
  },
  {
    id: 11,
    title: "Tennis Ball",
    category: "Tennis",
    stock: 30,
    brand: "Ruma",
    rating: 4.7,
    description:
      "Engineered for optimal performance, our tennis balls deliver consistent bounce and superior durability. Each ball is meticulously crafted with high-quality felt for improved control and enhanced visibility. Whether you're practicing your serve or competing in a match, these tennis balls offer excellent playability on all court surfaces. Designed to meet the standards of both casual players and professionals, they ensure every game is played with precision and reliability.",
    price: 1200.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518280/download_4_wx1mac.jpg",
  },
  {
    id: 12,
    title: "Cricket Bat",
    category: "Cricket",
    stock: 15,
    brand: "Brand 12",
    rating: 4.0,
    description:
      "Crafted for precision and power, our Cricket Bat is meticulously designed to enhance your performance on the pitch. Engineered from high-quality English willow, it offers superior balance and responsiveness, making it ideal for both aggressive strokes and solid defense. Whether you're facing fast bowlers or spinning deliveries, this bat ensures exceptional control and durability, empowering you to dominate every game with confidence.",
    price: 1250.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518358/images_6_uikrsa.jpg",
  },
  {
    id: 13,
    title: "Sport Gym Product set",
    category: "Gym",
    stock: 130,
    brand: "Brand 13",
    rating: 4.4,
    description:
      "Elevate your fitness routine with our Sport Gym Product Set, designed to optimize your training sessions and recovery. This comprehensive set includes premium-quality essentials tailored for enthusiasts and professionals alike. From durable resistance bands and ergonomic water bottles to sweat-wicking towels and versatile gym bags, each item is crafted to enhance performance and comfort. Whether you're focusing on strength training, cardio, or flexibility, our Sport Gym Product Set is your ultimate companion for achieving peak fitness goals with style and efficiency.",
    price: 720.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518499/images_7_fobymz.jpg",
  },
  {
    id: 14,
    title: "Safety Equipment",
    category: "Swimming",
    stock: 15,
    brand: "Under Armour",
    rating: 5.0,
    description:
      "Our Safety Equipment sets the standard for protection and peace of mind in every environment. Designed with advanced materials and ergonomic principles, each piece offers uncompromising safety without sacrificing comfort or mobility. From industrial workplaces to outdoor adventures, our gear ensures reliable defense against hazards, including impact, abrasion, and environmental elements. Built to exceed safety standards, our equipment is trusted by professionals worldwide for its durability, reliability, and innovative design, keeping you safe so you can focus on what matters most",
    price: 2225.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720519207/images_17_kobj56.jpg",
  },
  {
    id: 15,
    title: "Sport Shoes",
    category: "Sport",
    stock: 15,
    brand: "Columbia",
    rating: 4.5,
    description:
      "Elevate your athletic performance with our advanced Sport Shoes, engineered for comfort, support, and durability across all terrains. Designed using breathable materials and cutting-edge technology, these shoes provide optimal ventilation and lightweight cushioning, ensuring a cool and responsive feel during intense workouts or casual strolls. Whether you're sprinting on the track or navigating rugged trails, our Sport Shoes deliver superior grip and stability, empowering you to push your limits with every step",
    price: 1872.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1693973525/samples/ecommerce/shoes.png",
  },
  {
    id: 16,
    title: "Cycle",
    category: "Cycling",
    stock: 5,
    brand: "Hummel",
    rating: 3.7,
    description:
      "Experience the freedom of exploration with our meticulously engineered Cycle. Designed for adventure seekers and daily commuters alike, this versatile bike combines lightweight construction with robust durability. Its ergonomic frame ensures a comfortable ride on diverse terrains, while precision gearing allows for effortless navigation through city streets or scenic trails. Whether you're commuting to work or embarking on a weekend adventure, our Cycle promises reliability, performance, and an exhilarating ride every time.",
    price: 4050.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720519079/download_12_ps5cps.jpg",
  },
  {
    id: 17,
    title: "Golf Bat & Ball",
    category: "Golf",
    stock: 4,
    brand: "FBT",
    rating: 4.0,
    description:
      "Introducing our premium Golf Club and Ball set, meticulously crafted to elevate your game to new heights. The Golf Club, crafted from lightweight yet durable titanium, ensures precise swings and maximum distance with every stroke. Paired with our advanced Golf Ball, engineered for optimal aerodynamics and consistent flight, this set is designed to enhance accuracy and performance on the course. Whether you're teeing off or putting on the green, experience superior playability and reliability with our Golf Club and Ball set.",
    price: 320.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518986/download_11_feilmz.jpg",
  },
  {
    id: 18,
    title: "Gym Item",
    category: "Gym",
    stock: 5,
    brand: "New Balance",
    rating: 5.0,
    description:
      "Elevate your workout routine with our versatile Gym Item, designed to maximize your fitness experience. Engineered for durability and comfort, it features advanced materials that provide optimal support during intense workouts. Whether you're lifting weights, performing cardio, or engaging in functional training, this Gym Item enhances stability and performance. With ergonomic design and adjustable features, it ensures a customized fit and seamless integration into your fitness regimen, helping you achieve your fitness goals efficiently",
    price: 885.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518890/images_8_grzue5.jpg",
  },
  {
    id: 19,
    title: "Baseball",
    category: "Baseball",
    stock: 70,
    brand: "Erreà",
    rating: 4.6,
    description:
      "Step up to the plate with confidence using our premium Baseball, expertly crafted for peak performance and durability. Designed with a responsive composite core and a durable synthetic leather cover, it delivers exceptional feel and durability on every swing. Whether you're aiming for a home run or practicing your fielding skills, this baseball ensures consistent flight and solid impact, making it a reliable choice for players of all levels.",
    price: 612.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518773/download_3_r38cms.jpg",
  },
  {
    id: 20,
    title: "Bat",
    category: "Baseball",
    stock: 15,
    brand: "ERKE",
    rating: 3.3,
    description:
      "Introducing our latest innovation in baseball technology, the [Your Brand Name] Baseball Bat is engineered for peak performance and durability. Handcrafted from premium-grade maple wood, it offers a perfect balance of strength and flexibility, enabling powerful hits while maintaining precise control. Designed with a sleek, ergonomic handle and a responsive barrel, this bat enhances your swing mechanics for maximum impact on the field. Whether you're a seasoned player or just starting out, trust in our bat to elevate your game to new heights",
    price: 545.0,
    image:
      "https://res.cloudinary.com/dvz9ssr9t/image/upload/v1720518695/images_13_gvnfjf.jpg",
  },
];

export default products;
