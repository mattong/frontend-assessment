import DisplayCard from './components/DisplayCard';
import Banner from './components/Banner';
import Exercise2 from './components/Exercise2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='first-exercise'>
        <Banner header='Hello developer' subheader='Lorem ipsum dolor sit amet, consectetur adipscing elit.' />
        <div className='display-card-container'>
          <DisplayCard imageSrc='https://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis feugiat volutpat. Cras consequat fringilla nulla ac ultricies. Sed auctor vehicula nisi. Phasellus neque sapien, rhoncus eget laoreet sit amet, euismod tempor lectus. Duis porta laoreet.' />
          <DisplayCard imageSrc='https://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis feugiat volutpat.' />
          <DisplayCard imageSrc='https://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis feugiat volutpat. Cras consequat fringilla nulla ac ultricies. Sed auctor vehicula nisi. Phasellus neque sapien, rhoncus eget laoreet sit amet, euismod tempor lectus. Duis porta laoreet.' />
        </div>
      </div>
      <div className='second-exercise'>
        <Exercise2 />
      </div>
    </div >
  );
}

export default App;
