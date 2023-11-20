import React from 'react'
import image1 from "../assets/Dispute_img_1.webp"
import image2 from "../assets/Dispute_img_2.webp"
import image3 from "../assets/Dispute_img_3.webp"
import image4 from "../assets/Dispute_img_4.webp"
import image5 from "../assets/Dispute_img_5.webp"

const Dispute = () => {
  return (
    <div name="dispute" className='w-full min-h-screen'>
      <div name='home-res' className='max-w-[1400px] m-auto px-4 grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>
        <div className='flex flex-col h-full justify-center'>
          <h3 className='text-5xl font-bold max-sm:order-1 max-sm:mt-2 sm:order-1'>
            Řešení sporů
          </h3>
          <p className='text-xl text-justify pb-6 mt-2 max-sm:order-2 sm:order-2 sm:pb-1'>Řešíte problémy se stavebními firmami, stavebními úřady, se sousedy, s příbuznými, s developery, související se stavební činností a nechce se vám soudit? Vyčerpali jste všechny možnosti v jednání, nebo se prostě nemůžete domluvit? Zejména v těchto procesech, ale nejen v nich se můžete obrátit na nás. Pokusíme se najít přijatelný kompromis tak, aby žádná ze stran neodcházela s pocitem křivdy. Máme mnoholeté zkušenosti při řešení sporů. První informační konzultace zdarma, další postup dle dohody.
          </p>
        </div>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] max-sm:order-3 sm:order-3'>
          <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
          <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Dispute