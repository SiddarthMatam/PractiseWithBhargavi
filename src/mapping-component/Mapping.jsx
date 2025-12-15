import React, {useState} from 'react'

function Mapping() {
  const [products] = useState([
      {
        id:1,
        name:"Thor Hammer",
        qty:1,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi8XBG8eh3wOIYp048Ek7UlZyZsXuSyLBvQ&s"
      },
      {
        id:2,
        name:"Captain Sheild",
        qty:1,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuOI-SR96JJRiLzWK0vQziYwBiiDxJmKpSg&s"
      },
      {
        id:3,
        name:"Hawkeye's Bow",
        qty:1,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TnUi82yA4pd_rR7sdHenX78Xr8SmUpZbNw&s",
      }
    ]);
  return (
    <>
    <h1>Mapping</h1>
      {products.map(item=>(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.image}/>
        </div>
      ))}
      </>
  )
}

export default Mapping