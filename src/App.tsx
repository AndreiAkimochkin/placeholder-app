import './App.css';
import Post from './components/post/Post';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
   <div className='App'>
     <Header/>
     <Post/>
      <Footer/>
   </div>
  );
}

export default App;
