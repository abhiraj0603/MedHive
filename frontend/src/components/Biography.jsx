import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="AboutImage" />
      </div>
      <div className="banner">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus, laboriosam beatae adipisci cumque consequatur sed. Animi officiis facilis reprehenderit at error sed ipsum! Repellat officiis modi alias voluptate iusto autem ut at doloremque nam, optio sunt perspiciatis vero expedita sed voluptatibus, facilis maxime debitis quas saepe! Quod, aspernatur omnis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia neque ex, laborum quis autem possimus perferendis fuga, eaque aspernatur exercitationem vitae quae consequatur quod, ab repudiandae natus beatae consequuntur. Voluptatem provident adipisci dignissimos quis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At praesentium obcaecati accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, est.
            </p>
      </div>
    </div>
  )
}

export default Biography
