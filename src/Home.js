import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Amazon Basics Stainless Steel Electric Coffee Bean Grinder"
						price={12.95}
						rating={6}
						image="https://m.media-amazon.com/images/I/61pumwztL4L._AC_SL1000_.jpg"
					/>
					<Product
						id="49538094"
						title="DAYBETTER Smart WiFi Led Lights 100ft, Tuya App Controlled Led Strip Lights, Work with Alexa and Google Assistant, Timer Schedule , Color Changing Led..."
						price={159.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71D6u5jRudL._AC_SL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="24124561"
						title="Apple Watch Series 6 GPS 40mm Blue Aluminium Case with Deep Navy Sport Band"
						price={36990}
						rating={4}
						image="https://unitheme.net/images/ab__webp/detailed/12/1600347947_1594550_jpg.webp"
					/>
					<Product
						id="13494356"
						title="HONBAY Convertible Sectional Sofa, L Shaped Couch with Reversible Chaise for Small Space, Dark Grey"
						price={399}
						rating={5}
						image="https://m.media-amazon.com/images/I/91BW6MiuLpL._AC_SL1500_.jpg"
					/>
					<Product
						id="23657891"
						title="New Apple iPad Pro (12.9-inch, Wi-fi,128GB) - Silver (4th Generation)"
						price={1099}
						rating={6}
						image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-comp-pro-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153112"
					/>
				</div>
				<div className="home__row">
					<Product
						id="25638213"
						title="AOC AGON AG493UCX2 -49 Inch Dual QHD Curved Gaming Monitor, VA, 4ms GTG,Height Adjust, USB Hub,FreeSync Premium,Speakers(5120 X 1440@165Hz,400cd/m2, HDMI 2.0/DP 1.4 / USB-C / USB 3.2)"
						price={79}
						rating={4}
						image="https://m.media-amazon.com/images/I/71joTU1lQML._AC_SL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="65432891"
						title="Amazon Basics 8 Inches Memory Foam Mattress - Soft Plush Feel, Queen, White/Grey"
						price={1499}
						rating={3}
						image="https://m.media-amazon.com/images/I/91bfR+DRm0L._AC_SL1500_.jpg"
					/>
					<Product
						id="21231365"
						title="Amazon Basics Coffee Pod Storage Drawer for K-Cup Pods, 36 Pod Capacity, Black"
						price={14}
						rating={3}
						image="https://m.media-amazon.com/images/I/61z2Dwj2mpL._AC_SL1000_.jpg"
					/>
					<Product
						id="61247805"
						title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
						price={98.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
// 1. https://m.media-amazon.com/images/I/91bfR+DRm0L._AC_SL1500_.jpg
// 1. Amazon Basics 8 Inches Memory Foam Mattress - Soft Plush Feel, Queen, White/Grey
// 2. Amazon Basics Coffee Pod Storage Drawer for K-Cup Pods, 36 Pod Capacity, Black
// 2. https://m.media-amazon.com/images/I/61z2Dwj2mpL._AC_SL1000_.jpg
// 3. HONBAY Convertible Sectional Sofa, L Shaped Couch with Reversible Chaise for Small Space, Dark Grey
//3. https://m.media-amazon.com/images/I/91BW6MiuLpL._AC_SL1500_.jpg
