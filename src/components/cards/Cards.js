import React from 'react'
import { Link } from 'react-router-dom'
import "./CardsStyles.css"

function Cards() {
  return (
    <div className='main'>
        
        <div className='cards-container'>
            {/*first card */}
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- Views -</p>
                <p>- Features -</p>
                <p>- Private Quarters -</p>
                <Link to='./contact' className='btn'>Book</Link>
            </div>
                  {/* second card */}
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>2 BTC</p>
                <p>- 5 Days -</p>
                <p>- Views -</p>
                <p>- Features -</p>
                <p>- Private Quarters -</p>
                <Link to='./contact' className='btn'>Book</Link>
            </div>
                {/* third card */}
                <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>2.5 BTC</p>
                <p>- 9 Days -</p>
                <p>- Views -</p>
                <p>- Features -</p>
                <p>- Private Quarters -</p>
                <Link to='./contact' className='btn'>Book</Link>
            </div>

        </div>
       
        
        
    </div>
  )
}

export default Cards