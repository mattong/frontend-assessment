import Card from './components/Card';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner header='Hello developer' subheader='Lorem ipsum dolor sit amet, consectetur adipscing elit.' />
      <div className='card-container'>
        <Card imageSrc='https://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis feugiat volutpat. Cras consequat fringilla nulla ac ultricies. Sed auctor vehicula nisi. Phasellus neque sapien, rhoncus eget laoreet sit amet, euismod tempor lectus. Duis porta laoreet.' />
        <Card imageSrc='https://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis feugiat volutpat.' />
        <Card imageSrc='https://via.placeholder.com/400x300' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis feugiat volutpat. Cras consequat fringilla nulla ac ultricies. Sed auctor vehicula nisi. Phasellus neque sapien, rhoncus eget laoreet sit amet, euismod tempor lectus. Duis porta laoreet.' />
      </div>
    </div >
  );
}

export default App;
