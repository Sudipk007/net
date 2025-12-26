import beatp from '../Frontend/Frontend/src/assets/product/beatsorenage.jpg'
import beatsgray from '../Frontend/Frontend/src/assets/product/beatsgray.jpg'
import beatsblack from '../Frontend/Frontend/src/assets/product/beatsblack.jpg'
import beatspink from '../Frontend/Frontend/src/assets/product/beatspink.jpg'
import apmpurple from '../Frontend/Frontend/src/assets/product/apmpurple.avif'
import apmorange from '../Frontend/Frontend/src/assets/product/apmorange.avif'
import ampblue from '../Frontend/Frontend/src//assets/product/ampblue.avif'
import apmmidnight from '../Frontend/Frontend/src/assets/product/apmmidnight.avif'
import cloud from '../Frontend/Frontend/src/assets/cloud.jpg'
import beatssolopink from '../Frontend/Frontend/src/assets/product/beatssolopink.jpg'
import beatsolobalck from "../Frontend/Frontend/src/assets/product/beatssoloblack.jpg"
import beatsoloblue from "../Frontend/Frontend/src/assets/product/beatsoloblue.jpg"
import sonyb from '../Frontend/Frontend/src/assets/product/sonyb.webp'
import sonyblue from '../Frontend/Frontend/src/assets/product/sonyblue.webp'
import sonypi from '../Frontend/Frontend/src/assets/product/sonypi.webp'
import sonysilver from '../Frontend/Frontend/src/assets/product/sonysilver.webp'
import macpro from '../Frontend/Frontend/src/assets/product/macprom5.webp'
import hp from '../Frontend/Frontend/src/assets/product/Hpomni.webp'
import desk from '../Frontend/Frontend/src/assets/product/gamingdesk.webp'
const headphone =[ {
    id: 1,
    title: "Beats solo 4",
    price: 199.99,
    description: "Experience high-fidelity audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for long listening sessions.",
    category: "Electronics",
    image: [beatsoloblue,beatsolobalck, beatssolopink],
    quantity:[19,12,10],
    color:['slateblue','black','pink']
  },
  {
    id: 2,
    title: "Powerbeats Fit",
    price: 199.99,
    description: "Workout earbuds with redesigned secure-fit wingtips for increased comfort and durability",
    category: "Electronics",
    image: [beatp,beatsgray,beatsblack,beatspink],
    quantity:[19,12,10,10],
    color:['orange','gray','black','pink'],
   

  },
  {
    id: 3,
    title: "Apple Airpod Max",
    price: 549.99,
    description: "AirPods Max, the ultimate listening experience. ",
    category: "Electronics",
    image: [ampblue,apmmidnight,apmorange,apmpurple],
    quantity:[19,12,10,10],
    color:['blue','black','orange','purple']
  },
  {
    id: 4,
    title: "Sony 1000XM5",
    price: 249.99,
    description: "WH-1000XM5 Premium Wireless Noise Canceling Headphones",
    category: "Electronics",
    image: [sonyb,sonyblue,sonypi,sonysilver],
    quantity:[19,12,10,10],
    color:['black','blue','pink','silver'],
  }];

  const computer = [
    { 
      id:1,
      title:"macbookPro M5",
      price: 1349.99,
      description:`14-inch MacBook Pro - Apple M5 chip with 10-core CPU and 10-core GPU - 16GB Memory - 512GB SSD - Space Black`,
      category:"Electronic",
      image:macpro,

    },
    { 
      id:2,
      title:"Hp omni",
      price: 1899.99,
      description:`HP - OmniBook Ultra Flip 2-in-1 - Copilot+ PC - 14" 3K OLED Touch-Screen Laptop - Intel Core Ultra 9 - 32GB Memory - 2TB SSD - Eclipse Gray`,
      category:"Electronic",
      image:hp,
      
    },
    { 
      id:3,
      title:"Gaming Desktop",
      price: 1099.99,
      description:`CyberPowerPC - Gaming Desktop - Intel Core i5-14400F - NVIDIA GeForce RTX 5060 8GB - 16GB DDR5 - 1TB PCIe 4.0 SSD - Black`,
      category:"Electronic",
      image:desk,
      
    }
  ]

export {headphone,computer}

 


