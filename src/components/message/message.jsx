import './message.scss'

export default function Message({own}){
    return(
   
          <div className={own ? "message own" :" message"} >
            <div className="messageTop">
                <img  className='messageImg' src="" alt="" />
                <p className='messageText'>Hi im interested in that hair you posted on your real,
                    how much is it please
                </p>

            </div>
            <div className="messageBottom">Sent 3:25pm</div> 
        </div>
    
    )
}