import React, {useContext} from 'react'
import './Main.css'
import userIcon from '../../assets/user_icon.png'
import compassIcon from '../../assets/compass_icon.png'
import bulbIcon from '../../assets/bulb_icon.webp'
import messageIcon from '../../assets/message_icon.png'
import codeIcon from '../../assets/code_icon.png'
import galleryIcon from '../../assets/gallery_icon.jpg'
import micIcon from '../../assets/mic_icon.jpg'
import sendIcon from '../../assets/send_icon.jpg'
import geminiIcon from '../../assets/gemini_icon.webp'
import { Context } from '../../context/context'

const Main = () => {
    const{onSent , recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return(
        <div className='main'>

           <div className="nav">
            <p>Gemini</p>
            <img src={userIcon} alt="User" />
           </div>

           <div className="main-container">

              { !showResult
                ?<>
            <div className="greet">
                <p><span>Hello, Sir.</span></p>
                <p>How can i help you today?</p>
            </div>

            <div className="cards">

                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={compassIcon} alt="" />
                </div>

                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={bulbIcon} alt="" />
                </div>

                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={messageIcon} alt="" />
                </div>

                <div className="card">
                    <p>Improve the readibility of the following code</p>
                    <img src={codeIcon} alt="" />
                </div>
            </div>
            </> 
            : <div className='result'>
                <div className="result-title">
                    <img src={userIcon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={geminiIcon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                </div>
                </div>
           }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={galleryIcon} alt="" />
                        <img src={micIcon} alt="" />
                       {input? <img onClick={() => onSent()} src={sendIcon} alt="" /> :null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
           </div>
        </div>
    )
}

export default Main