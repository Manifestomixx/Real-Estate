import React from 'react'
import image from "../assets/about.jpg"
import "../style/About.css"

const About = () => {
  return (
    <>
    <main className='about'>
      <section className='container py-5'>
        <h1 className='mt-5 pt-3'>About</h1>
        <div className=' gap-4 p-3'>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, consectetur sequi! Error illum nobis ullam iure itaque illo facilis rerum? Quidem voluptatem molestias maiores hic delectus. Velit aliquid possimus culpa voluptates non accusamus quod excepturi adipisci quaerat magni laborum quas dignissimos enim reiciendis nam iste, vero odit aspernatur cumque totam eius! Deleniti expedita non itaque magni dicta aliquam rerum facere vero doloremque veniam sed hic, aspernatur voluptatibus at? Vitae eos officia sequi at et consequatur obcaecati optio non velit maxime tenetur aliquid, iusto reprehenderit. At sapiente rerum recusandae fuga dignissimos. Autem eaque provident minima blanditiis eos ad ut possimus at earum, veritatis numquam, dolor in porro deserunt quibusdam mollitia optio perspiciatis dolorum. Similique doloribus eos placeat quos, et tempora qui dicta rem ipsum quaerat ipsa, blanditiis possimus ratione veritatis consequatur incidunt reiciendis provident sequi eveniet, nostrum itaque omnis expedita voluptas. Quia, commodi? Eveniet, quos obcaecati. Nihil quae dolorem sequi error facere culpa, optio dicta? Exercitationem deserunt error magni molestias at sunt ipsum alias eligendi, sint id. Culpa, assumenda aspernatur. Repudiandae tempora officiis ullam pariatur magnam temporibus, perferendis quod delectus eum error veritatis ex dolorum excepturi libero modi sint dicta culpa. Suscipit itaque doloribus iusto atque quos numquam obcaecati error quisquam?</p>
        <img src={image} alt=""  className='w-50 rounded-4'/>
        </div>
      </section>
    </main>
    </>
  )
}

export default About