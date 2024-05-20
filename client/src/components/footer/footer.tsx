import { CSSProperties } from "react"
import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
    return (
        
        <div style={Main}>

<div style={phoneAAndInfo}>
08-9740224 :טלפון<br/>
: סניפים <br/>
שערי תשובה 14<br/>
עיון התלמוד 5<br/>
קצות החושן/חפץ חיים<br/>
יהודה הנשיא 12<br/>
 </div>

<div style={DiveCardsAndTerms}> 
<div style={Terms}>
<div>משלוח והחזרות</div>
<div>תנאים והגבלות</div>
<div>שיטות תשלום</div>
</div>
            <div style={Cards}>
            <img src="./masterCard (2).png" alt="masterCard" style={{height:"40px"}}/>
            <img src="./masterCard (2).png" alt="masterCard" style={{height:"40px"}}/>
            <img src="./masterCard (2).png" alt="masterCard" style={{height:"40px"}}/>
            <img src="./masterCard (2).png" alt="masterCard" style={{height:"40px"}}/>
            <img src="./masterCard (2).png" alt="masterCard" style={{height:"40px"}}/>
            <img src="./masterCard (2).png" alt="masterCard" style={{height:"40px"}}/>
            </div>

            <div style={CopyrightDiv}>
            <LuCopyright style={CopyrightIcon}/>
            אהבת חסד בע	&#34;מ  
            </div>
            
            </div>


        </div>

       
    )
}

const Main: CSSProperties  = {
    display:'flex',
    flexDirection:'row',
    borderTop: 'solid',
    background: 'DarkSeaGreen',
   height:'400px'
}

const CopyrightDiv = {
    marginLeft:'170px',
     marginTop:'100px'
}
const CopyrightIcon = {
    marginRight:'5px',
}

const DiveCardsAndTerms: CSSProperties = {
    display:'flex',
    flexDirection:'column',
    marginTop:'15px'
}

const phoneAAndInfo = {
    width:"300px",
    display:'flex',
    justifyContent:'center',
    marginTop:'15px'
}

const Cards = {
    width:"467px",
    display:'flex',
    justifyContent:'space-around',
    marginTop:'10px'
}

const Terms: CSSProperties = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
}