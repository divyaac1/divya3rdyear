import React, { useState } from 'react'
import Image from '../Components/flower.jpeg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [cartoon, setcartoon] = useState([
        { cartoon: 'choota bheem' },
        { cartoon: 'power rangers' },
        {cartoon:'pokemon'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % cartoon.length
        setIndex(newIndex)
    }
    
        <div>
            <p>i like this {cartoon[index].cartoon}</p>
            <button onClick={change}>Change me</button>
        </div>
    

    return (
        <div>
            <div>
                <center>
                <img src={Image} alt="images" /> <br />
                <p>Nature</p>
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
                </center>
            </div><br/>
            <br/>
            <div style={{ paddingTop: '50px' }}>
                <center><label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button></center>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=BCgeho0YEJQ'} controls />
                <div>
                    <p>Best Cartoon</p>
                    <div>
            <p>i like this {cartoon[index].cartoon}</p>
            <button onClick={change}>Change me</button>
        </div>
    
                </div>
            </div>
        </div>
    )
}
export default Body