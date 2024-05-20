import { ImCart } from "react-icons/im";

 
 export const Header = () => {

 return(
    <div style={Main}> 

     <div style={Logo}>אהבת חסד</div>

     <div style={Search}>חיפוש</div>

     <div style={Cart}>
        <button style={Button}><ImCart/></button>
        </div>
        
    </div>
)

 }

 const Main = {
    display: 'flex',
    height:'50px',
    alignItems: 'center',
    borderBottom: '5px solid DarkSlateGrey',
    background: 'DarkSeaGreen',
 }

const Search = {
display:'flex',
alignItems: 'center',
width:"700px",
justifyContent:'center',
 }

 const Logo = {
display:'flex',
width:'250px',
fontSize:"20px",
justifyContent:'center',
}

const Cart = {
    width:'100px',
    display: 'flex',
    justifyContent:'center',
}

const Button = {
    background: 'none',
	border: 'none',
    marginTop:'10px'
}
	 