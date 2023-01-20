import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {

	return (
		<div id="gfg">
			<h2>GeeksforGeeks</h2>
			<h4>ReactJS MDBootstrap Footer Component</h4>

			<MDBFooter color="primary" bgColor='light'
				className='text-center text-lg-left'>
				Footer Component
			</MDBFooter>
		</div>
	);
}
