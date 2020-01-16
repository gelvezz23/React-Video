import React,{ useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/app.scss';


const App = () => {
    // [ stado, metodo que captura el estado ] = useState(recibe array)
    const [ videos, setVideos] = useState({
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
    console.log(videos);   
    return(
        <div className="App">
            <Header/>
            <Search/>
            
                {videos.estado === true && 
                    videos.mylist.length > 0 && (
                    <Categories title="Mi lista">
                        <Carousel>
                            <CarouselItem/>
                        </Carousel>
                    </Categories> )
                }
            <Categories title="Tendencia">
                <Carousel>  
                    {videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    
                </Carousel>
            </Categories>

            <Categories title="Que locura !! ">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    );
}
export default App;