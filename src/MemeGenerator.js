import React,{useState, useEffect} from 'react'
import './Meme.css'

export default function MemeGenerator() {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImg, setRandomImg] =useState("");
    const [memeImage, setMemeImage] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((response) => {
            const {memes} = response.data;
            console.log(memes);
            setMemeImage(memes);
        } )
    },[]);
    
    

    function handleTopChange(e){
        setTopText(e);
    }

    function handleBottomChange(e){
        setBottomText(e);
    }

    function randomPhoto() {
        let randomNum = Math.floor(Math.random() * 100);
        setRandomImg(memeImage[randomNum]);

    }

  return (
        <div className='meme-form'>
            <div className='inputs'>

                    <input type="text" className='input'
                        name='topText'
                        placeholder='Enter top Text'
                        value={topText}
                        onChange={e => handleTopChange(e.target.value)}
                    />
                    <input type="text" className='input'
                        name='bottomText'
                        placeholder='Enter bottom Text'
                        value={bottomText}
                        onChange={e => handleBottomChange(e.target.value)}
                    />
            
                <button onClick={() => randomPhoto()}>
                    <div>
                     <span>
                        <p>Genereate Meme</p>
                     </span>  
                    </div>
                </button>

                <div className='image'>
                    <img src={randomImg.url}
                         alt='touch generate button'
                    />
                    <h2 className='top'>{topText}</h2>
                    <h2 className='bottom'>{bottomText}</h2>
                </div>
            </div>

        </div>
    )
}
