import React,{useState,useContext} from 'react';
import './Sidebar.css';
import menuIcon from '../../assets/menu_icon.jpg';
import plusIcon from '../../assets/plus_icon.png';
import messageIcon from '../../assets/message_icon.png';
import questionIcon from '../../assets/question_icon.jpg';
import historyIcon from '../../assets/history_icon.png';
import settingsIcon from '../../assets/settings_icon.png';
import { Context } from '../../context/context';


const Sidebar = () => {
  
  const[extended,setExtended] = useState(false)
  const{onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async(prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return(
    <div className='sidebar'>

      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={menuIcon} alt="" />
        <div onClick={()=>newChat()} className='new-chat'>
            <img src={plusIcon} alt="" />
            { extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className='recent'>
            <p className='recent-title'>Recent</p>
            {prevPrompt.map((item,index) =>{
              return(
                   <div onClick={() =>loadPrompt(item)} className="recent-entry">
                        <img src= {messageIcon} alt="" />
                        <p>{item.slice(0,18)}...</p>
                    </div>
              )
            })}
        </div>
        :null }

      </div>

      <div className="bottom">

        <div className="bottom-item recent-entry">
          <img src={questionIcon} alt="" />
          {extended? <p>Help</p> :null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={historyIcon} alt="" />
          {extended? <p>Activity</p> :null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={settingsIcon} alt="" />
          {extended? <p>Settings</p> :null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar