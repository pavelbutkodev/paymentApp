import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Info from "../../component/Shared/Info";
import Success from "../../component/Shared/Success";
import Form from "../../component/Shared/Form";

import styles from './styles.module.scss';

const MainWindow = () => {
	return (
		<Router>
			<div className={styles.container}>
				<Info/>
				<Switch>
					<Route exact path='/'>
						<Form/>
					</Route>
					<Route exact path='/success'>
						<Success/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default MainWindow;
