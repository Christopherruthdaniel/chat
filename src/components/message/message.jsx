import './message.scss'

export default function Message({own,imgs,chat,pic}){
    return(
          <div className={own ? "message own" :" message"} >
            <div className="messageTop">
                <img  className='messageImg' src={imgs} alt="" />
                {pic?<img className='image' src={pic} style={{width:'70%', }} />:(<p className='messageText'>{chat}
                </p>)}

            </div>
            <div className="messageBottom">Sent 3:25pm</div> 
        </div>
    
    )
}