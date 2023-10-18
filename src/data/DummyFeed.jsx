import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../config";

const productData = [
  {
    id: 4,
    name: "Prof. Dr. Aarti Karande",
    image: "https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png",
    productType: "openBackHeadphones",
    price: 220,
    rating: 5,
    timeLeft: 27,
    totalSales: 7479,
  },
  {
    id: 5,
    name: "Prof. Dr. Dhananjay Kalbande",
    image:
      "https://mca.spit.ac.in/wp-content/uploads/2023/04/dr-dhananjay-kalbande.jpg",
    productType: "openBackHeadphones",
    price: 169,
    rating: 5,
    timeLeft: 24,
    totalSales: 6898,
  },
  {
    id: 6,
    name: "Harshil Kanakia",
    image: "https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png",
    productType: "openBackHeadphones",
    price: 170,
    rating: 4,
    timeLeft: 21,
    totalSales: 6347,
  },
];
export default productData;
