import React from 'react'

import { ShopCard } from '../ShopCard'

export const Cards = (props) => {
  const { cards, icon } = props;

  return (
    <>
      <ShopCard cardBox={cards} icon={icon} />
    </>
  )
}
