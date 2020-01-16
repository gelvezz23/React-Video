import React,{ useState, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';


import useInitialState from '../hooks/useInitialState';


import '../assets/styles/app.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
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
        <>
            
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

            
        </>
    );
}
export default Home;