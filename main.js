 import "./style.css"; 
/*import products from "./api/products.json";*/

import products from './api/products.json' assert { type: 'json' };
import { showProductContainer } from './homeProductCards';

//console.log(products);

showProductContainer(products);

