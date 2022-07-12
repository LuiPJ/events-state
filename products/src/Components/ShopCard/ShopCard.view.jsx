import React from 'react'


export const ShopCard = (props) => {
  const { cardBox, icon } = props

  return (
    <div className={icon.changeIcon === 'view_list' ? 'shop-card-container' : "shop-card-container-2"}>
      {cardBox.map((card) => <div className={icon.changeIcon === 'view_list' ? 'cards' : "cards-2"} key={card.img}>
        <div className={icon.changeIcon === 'view_list' ? 'card-header' : "card-header-2"}><h1>{card.name}</h1></div>
        <div className={icon.changeIcon === 'view_list' ? 'card-header' : "card-header-2"}>{card.color}</div>
        <div className="card-img"><img src={card.img} width='200' height='200' alt={card.name} /></div>
        <div className={icon.changeIcon === 'view_list' ? 'card-red-container' : "card-red-container-2"}>
          <div className={icon.changeIcon === 'view_list' ? 'card-price' : "card-price-2"}>${card.price}</div>
          <div className={icon.changeIcon === 'view_list' ? 'card-button-add' : "card-button-add-2"}>ADD TO CART</div>
        </div>
      </div>)}
    </div>
  )
}
