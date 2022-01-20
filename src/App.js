import logo from './logo.svg';
import './App.css';
import './style.css';
import Movie from './Movie.jpg';


function App() {
  return (
<div>
   
      
      
  <div className='flexy-new' style={{border:'solid 1px red',maxWidth:'100vw'}}>
<img src="/LogoM.jpg" className='newlogo' alt="logo"/>
<h1 className='title-red'> TAKE A LOOK AT MOVIES TRAILERS </h1>
<img src="/LogoNfx.jpg" className='newlogo' alt="logo"/>
</div>
      
<div className='flexy'>
<img src={Movie}className='first'alt='image'/>


<img src="/WatchMovies.png" className='second' alt="myimage"/>


</div>

<iframe width="600" height="300" src="https://www.youtube.com/embed/uAQFxn2Ss84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
  );
}

export default App;
