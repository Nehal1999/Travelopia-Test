import React from 'react'
const CardLayout = (props: any) => {
  const {title,text,btn_text,img_source} = props ;

  return (
    <div className="card" >
    <img src={img_source} className="card-img-top" alt="..." style={{height: '250px'}}/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{btn_text}</a>
    </div>
    </div>
  )
}

export default CardLayout;
