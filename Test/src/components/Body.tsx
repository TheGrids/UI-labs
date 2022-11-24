import React, {FC, useState} from 'react'
import './Body.css'
import soup from '../assets/soup.png'
import borsch from '../assets/borsch.webp'

export const Body: FC = () => {
    const [name, setName] = useState("Вы не выбрали блюдо.");
    const [message, setMessage] = useState(0);

    function menu() {
        const price: number = 1600
        const nds: number = 20
        let sum: number = price + price / 100 * nds

        setName("Борщ")
        setMessage(sum)
    }

    function menu2() {
        const price: number = 1200
        const nds: number = 20
        let sum: number = price + price / 100 * nds

        setName("Суп")
        setMessage(sum)
    }


    return (
        <div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='bigfont'><b>Выберите блюдо:</b></div>
                    <div className='menu'>
                        <div className='names'>
                            {/* <input value={name} onChange={(event) => setName(event.target.value)}></input> */}
                            <img className='img' onClick={menu} src={borsch}></img>
                            <div className='font'>Борщ</div>
                        </div>
                        <div className='names' onClick={menu2}>
                            <img className='img' src={soup}></img>
                            <div className='font'>Суп</div>
                        </div>
                    </div>
                    <div className='bigfont'>{name}</div>
                    <div className='bigfont'>Ваш чек на сумму: {message}</div>
                </div>
            </div>
        </div>
    )
}