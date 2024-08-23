//import all assets
import "./page.module.css";
import {  Header, Container } from './components/index';

//The default function
let App = () => {
    return(
        <>
        <Header/>
        <Container></Container>
        </>
    );

}

//expotr the default function
export default App;