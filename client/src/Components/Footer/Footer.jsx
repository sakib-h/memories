import React from "react";

const Footer = () => {
	return (
		<footer className="container mb-[50px]">
			<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
				<ul className="fList">
					<li className="fListItem">Countries</li>
					<li className="fListItem">Regions</li>
					<li className="fListItem">Cities</li>
					<li className="fListItem">Districts</li>
					<li className="fListItem">Airports</li>
					<li className="fListItem">Hotels</li>
				</ul>
				<ul className="fList">
					<li className="fListItem">Homes </li>
					<li className="fListItem">Apartments </li>
					<li className="fListItem">Resorts </li>
					<li className="fListItem">Villas</li>
					<li className="fListItem">Hostels</li>
					<li className="fListItem">Guest houses</li>
				</ul>
				<ul className="fList">
					<li className="fListItem">Unique places to stay </li>
					<li className="fListItem">Reviews</li>
					<li className="fListItem">Unpacked: Travel articles </li>
					<li className="fListItem">Travel communities </li>
					<li className="fListItem">Seasonal and holiday deals </li>
				</ul>
				<ul className="fList">
					<li className="fListItem">Car rental </li>
					<li className="fListItem">Flight Finder</li>
					<li className="fListItem">Restaurant reservations </li>
					<li className="fListItem">Travel Agents </li>
				</ul>
				<ul className="fList">
					<li className="fListItem">Customer Service</li>
					<li className="fListItem">Partner Help</li>
					<li className="fListItem">Careers</li>
					<li className="fListItem">Sustainability</li>
					<li className="fListItem">Press center</li>
					<li className="fListItem">Safety Resource Center</li>
					<li className="fListItem">Investor relations</li>
					<li className="fListItem">Terms & conditions</li>
				</ul>
			</div>
			<div className=" text-[#003580] ">
				Copyright © 2022 - Traveler Choice
			</div>
		</footer>
	);
};

export default Footer;
