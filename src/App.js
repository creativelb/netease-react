// import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home'
import Test from './pages/tes/Test.jsx'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './style/normalize.css'
import './style/base.css'
import './style/variable.css'

function App() {
    return (
		<div className="App">
			<Switch>
				<Route path="/home" component={Home}></Route>
				<Route path="/test" component={Test}></Route>
				<Redirect from="/" to="/home"></Redirect>
			</Switch>
		</div>
    );
}

export default App;
