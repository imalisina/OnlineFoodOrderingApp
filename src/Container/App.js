import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

// Import Main Components
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/HomePage/Home/Home';
import Order from '../Components/Order/Order';
import ShippingDetail from '../Components/HomePage/Shipping Info Section/ShippingCard/ShippingDetail/ShippingDetail';
import BestPackDetails from '../Components/HomePage/Best Food Pack/Best Of Month Card/Best Pack Details/BestPackDetails';
import Support from '../Components/Support/Support';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';


// Import Shipping Card Icons
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

// Best Of Month Pack Icons
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import './App.css';


function App() {
  
  // Orders Shipping Options
  const ShippingInfo = [
    {'id': 1 , 'img':false , 'title': 'Hourly Shipping' , 'description': 'Shipping your order only in 10 min !' , 'company':'Delivero | Getir' , 'price': '20 $' , 'icon': <DeliveryDiningIcon />},
    {'id': 2 , 'img':false , 'title': 'Daily Shipping' , 'description': 'Shipping your order only in 1 day !' , 'company': 'Uber | Delivero | Getir' , 'price': '50 $' , 'icon': <DirectionsCarIcon />},
    {'id': 3 , 'img':false , 'title': 'Monthly Shipping' , 'description': 'Shipping your order in 1 month .' , 'company': 'Amazon | Delivero' , 'price': '120 $' , 'icon': <AirplanemodeActiveIcon />},
  ];

  // Best Of Month Packs Data
  const BestPacks = [
    {'id':1 ,
     'index': 0 , 
     'img':false , 
     'title': 'Mega Menu' , 
     'foods': '2 XL Pizza + 1 King Burger + 3 Patatos + 2 M Pepsi' ,
     'price': '250 $' ,
     'icon': <LocalFireDepartmentIcon />,
     packDetail:[
      'Pizza : Pepperoni , Miced Meat , Miced Chicken , Sausage , Sucuk , Green Paper , Red Paper , Yellow Paper , Olive , Mushrooms , Mozarella Cheese , Exclusive Cheese',
      'King Burger : 300g Burger , 200g Chicken , Goda Cheese , Salad , Tomatos , Exclusive Sauce',
      'Patatos : Medium Exclusive Patatos',
      'Drinks : Mega Pepsi',
     ],
    },
    {'id':2 , 'index': 1 , 
     'img':false , 
     'title': 'Royal Menu' , 
     'foods': '1 XL Pizza + 1 M Pizza + 2 M HotDog + 2 M Fanta' , 
     'price': '110 $' , 
     'icon': <LocalPizzaIcon /> ,
     packDetail:[
      'Pizza : Pepperoni , Sausage , Sucuk , Miced Chicken , Tomato , Olive , Red Paper , Green Paper , Mushroom , Mozarella Cheese',
      'Pizza : Miced Meat , Mushroom , Tomato , Olive , Green Paper , Red Paper , Mozarella Cheese',
      'HotDog : 200g HotDog , Exclusive Sauce , Cheese , Salad , Tomato',
      'Drinks : Medium Fanta',
     ],
    },
    {'id':3 , 
     'index': 2 , 
     'img':false , 
     'title': 'Gamer Menu' , 
     'foods': '1 XL Burger + 1 Gift + 2 XL Patatos + 1 M IceTea' ,
     'price': '70 $' , 
     'icon': <SportsEsportsIcon />,
     packDetail:[
      'Burger : Doner Kebab , 100g Meat Burger , 200g Chicken Burger , Goda Cheese , Mushroom , Tomato , Salad',
      'Gift : Delivero Gift ( Gift Card , Gift Food , etc. )',
      'Patatos : XLarge Exclusive Patatos',
      'Drinks : Medium IceTea',
     ],
    },
  ]


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home ShipOptions={ShippingInfo} BestFoodPacks={BestPacks} />}/>
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        
        {/* Shipping Detail Page Routes With Their Specified Props */}
        {ShippingInfo.map((item) => {
          return(
            <Route key={item.id} path={"/details/shipping/options/" + item.id} element={<ShippingDetail item={item} />} />
          )
        })}

        {/* Best Of Month Food Package Detail Page Routes With Their Specified Props */}
        {BestPacks.map((packItem) => {
          return (
            <Route key={packItem.id} path={"/order/fastfoods/bestpacks/" + packItem.id} element={<BestPackDetails packItem={packItem} />} />
          )
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
