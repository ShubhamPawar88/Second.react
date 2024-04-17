import Card from './Card'
import './App.css'
function App(){
    return(
        <div className='container'>
            <Card title="Singham" actor="Ajay" actress="kajal" rating="7"></Card>
            <Card title="Animal" actor="Ranbir" actress="Rashmika" rating="6"></Card>
            <Card title="Kabir Singh" actor="Shahid" actress="Kiara" rating="9"></Card>      
        </div>
    );

}
export default App;