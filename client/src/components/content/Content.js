import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";


export default function Content(props) {
	const {isOpen, toggle} = props;
	return (
		<Container
			fluid
			className={classNames("content", { "is-open": isOpen })}
		>
			<NavBar toggle ={toggle} />
		</Container>
	);
}

