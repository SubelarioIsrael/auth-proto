import React from 'react'
import Card from '../Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card recipeName="Pizza" description="Lorem ipsum type or whatever idk" price="200" imageUrl="https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg"/>
      <Card recipeName="Scrambled Eggs" description="This be some eggs fr" price="50" imageUrl="https://images.unsplash.com/photo-1687630433653-e6c9faec95b3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card recipeName="Steak" description="yeah nah gormit" price="500" imageUrl="https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default CardList