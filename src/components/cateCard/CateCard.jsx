import React from 'react'
import "./CateCard.scss"
import { Link } from 'react-router-dom'

const Catecard = ({item}) => {
  return (
    <Link to="/gig?cat=design">
        <div className='CateCard'>
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </div>
    </Link>
  )
}

export default Catecard