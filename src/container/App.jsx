import React,{ useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';


import '../assets/styles/app.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const initialState = useInitialState(API);
    // [ stado, metodo que captura el estado ] = useState(recibe array)
   /* const [ videos, setVideos] = useState({
        estado: false,
         mylist:[], 
         trends:[],
         originals:[]});
    //didmount
    useEffect(() =>{
        fetch('http://localhost:3000/initalState')
        .then((response) => response.json()) //capta la data del api Response.json
        .then((data) => setVideos({...videos,...data,estado:true})) // llena el state con la data del api
    }, []); 
    console.log(videos);  */ 
    return(
        <div className="App">
            <Header/>
            <Search/>
            
                {initialState.estado === true && 
                    initialState.mylist.length > 0 && (
                    <Categories title="Mi lista">
                        <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )}    
                        </Carousel>
                    </Categories> )
                }
            <Categories title="Tendencia">
                <Carousel>  
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    );
}
export default App;