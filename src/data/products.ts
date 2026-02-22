export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  featured?: boolean;
}

import palakImg from "@assets/products/Palak murukku.jpg";
import karasevImg from "@/assets/products/Karasev.jpg";
import GingerImg from "@/assets/products/Gingelly Candy.jpg";
import JackImg from "@/assets/products/Jackfruit chips.jpg";
import KajoriImg from "@/assets/products/Kajoori.jpg";
import TapioaSImg from "@/assets/products/Tapioca stick.jpg";
import TapioaCmg from "@/assets/products/Tapioca chips.jpg";
import RedImg from "@/assets/products/Malabar murukku- Red apsara.jpg";
import ChillyImg from "@/assets/products/Malabar murukku- Chilly.jpg";
import RingImg from "@/assets/products/Ring Murukku.jpg";
import PayyoliImg from "@/assets/products/Payyoli mixture.jpg";
import TomatoImg from "@/assetgs/products/Tomato murukku.jpg";
import ButterMurukImg from "@/assets/products/Butter murukku.jpg";
import BiscutCashImg from "@/assets/products/Biscuit masala- cashew type.jpg";
import EggbsImg from "@/assets/products/Egg Biscuit.jpg";
import PotatoImg from "@/assets/products/Potato sticks.jpg";
import FruitBananaImg from "@/assets/products/Fruit Banana chips.jpg";
import BananaImg from "@/assets/products/Banana chips.jpg";

export const products: Product[] = [
  { id: "palak-murukku", name: "Palak Murukku", description: "Spinach-infused crispy spirals with a healthy twist.", image: palakImg, featured: true },
  { id: "karasev", name: "Karasev", description: "Traditional crunchy gram flour strands seasoned to perfection.", image: karasevImg, featured: true },
  { id: "gingelly-candy", name: "Gingelly Candy", description: "Sweet sesame brittle made with pure gingelly.", image: GingerImg, featured: true },
  { id: "jackfruit-chips", name: "Jackfruit Chips", description: "Thin-sliced jackfruit chips fried in premium oil.", image: JackImg, featured: true },
  { id: "kajoori", name: "Kajoori", description: "Classic date-flavored sweet snack, rich and chewy.", image: KajoriImg, featured: true },
  { id: "tapioca-stick", name: "Tapioca Stick", description: "Crunchy tapioca sticks lightly salted for a satisfying crunch.", image: TapioaSImg, featured: true },
  { id: "tapioca-chips", name: "Tapioca Chips", description: "Thin, crispy tapioca chips with a clean, light flavor." , image: TapioaCmg},
  { id: "malabar-murukku-red", name: "Malabar Murukku – Red Apsara", description: "Spiced Malabar-style murukku with a vibrant red hue.", image: RedImg,  featured: true },
  { id: "malabar-murukku-chilly", name: "Malabar Murukku – Chilly", description: "Fiery chili-flavored murukku for the spice lover.", image: ChillyImg, featured: true },
  { id: "ring-murukku", name: "Ring Murukku", description: "Classic ring-shaped murukku, crispy and aromatic.", image: RingImg },
  { id: "payyoli-mixture", name: "Payyoli Mixture", description: "A savory Kerala-style mixture with peanuts and lentils.", image: PayyoliImg },
  { id: "tomato-murukku", name: "Tomato Murukku", description: "Tangy tomato-seasoned crispy murukku spirals.", image: TomatoImg },
  { id: "butter-murukku", name: "Butter Murukku", description: "Rich buttery murukku, melt-in-mouth delicious.", image: ButterMurukImg },
  { id: "biscuit-masala-cashew", name: "Biscuit Masala – Cashew Type", description: "Masala-spiced biscuit snack loaded with cashew flavor.", image: BiscutCashImg },
  { id: "egg-biscuit", name: "Egg Biscuit", description: "Light, fluffy egg biscuits with a golden crisp.", image: EggbsImg },
  { id: "potato-sticks", name: "Potato Sticks", description: "Slender, crunchy potato sticks seasoned just right.", image: PotatoImg},
  { id: "fruit-banana-chips", name: "Fruit Banana Chips", description: "Sweet banana chips made from ripe plantains.", image: FruitBananaImg},
  { id: "banana-chips", name: "Banana Chips", description: "Classic salted banana chips fried in coconut oil.", image: BananaImg},
];

export const featuredProducts = products.filter((p) => p.featured);
