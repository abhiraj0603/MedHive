import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>
          {title}
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsam corrupti veniam? Quibusdam asperiores dolorem consequatur et laboriosam in voluptas, accusantium qui libero suscipit? Soluta facilis illo aspernatur pariatur cum.
          Cum, voluptatum nam? Corrupti soluta fugit cupiditate. Neque reprehenderit a labore adipisci numquam, placeat ut nihil ullam atque eos accusamus. Omnis voluptate expedita inventore in sequi quos fuga cum similique.
          Vitae esse nisi nobis tempore laborum quisquam quis alias omnis, possimus tenetur, eveniet incidunt autem iure accusamus quaerat veniam non repudiandae sequi quas dolore nam! Corrupti modi laborum accusamus voluptatibus!
          Aut eum, deleniti perspiciatis obcaecati quaerat iusto nihil odit perferendis fugit sequi modi voluptate qui, pariatur doloremque molestias aliquid quisquam cumque maxime voluptatum esse ipsum adipisci quod dolorem. Aut, enim!
          Vitae, veritatis dolores officia accusantium quos recusandae doloribus perspiciatis velit architecto neque temporibus at libero. Aut eaque iste sapiente facilis. Esse est illum quibusdam fugit autem architecto, facilis illo ex.
          Commodi quas deleniti sit porro? Labore quos consectetur, nam hic magnam dolorem enim tempora dicta, provident voluptatum voluptatibus nisi dolorum placeat cupiditate deleniti earum, minus numquam eum repellendus ut quasi!
          Aperiam voluptatibus repudiandae, totam officia nisi porro optio iusto facilis autem dicta facere, enim voluptate veritatis tenetur eum numquam quas aliquid repellendus! Non itaque, iure cupiditate aut consectetur debitis distinctio.
          Dolor facere consequuntur deserunt, nulla aliquid, magni sit obcaecati quaerat eaque earum ut odit ab eum ea adipisci dolorem. Culpa natus impedit recusandae facilis facere, quibusdam dolore sunt commodi maiores?
          Consequuntur ipsam, magni, sapiente atque aspernatur omnis deserunt aliquam quis neque, a nesciunt laudantium voluptas. Dolores repudiandae delectus velit sapiente, tenetur, ea voluptate, nostrum eaque temporibus laborum repellendus sint commodi!
          Atque omnis blanditiis adipisci nostrum voluptas rerum impedit quae. Esse facere distinctio ratione quo ex, numquam voluptas, architecto eum nulla, iure tenetur rem aperiam? Aperiam magni animi repellendus impedit quis!
          </p>
      </div>
      <div className="banner">
        <img src ={imageUrl} alt="Hero" className='animated-image'/>
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
      
    </div>
  )
}

export default Hero
