import React from 'react'
import image1 from "../assets/Office_img_1.webp"
import image2 from "../assets/Office_img_2.webp"
import image3 from "../assets/Office_img_3.webp"
import image4 from "../assets/Office_img_4.webp"
import image5 from "../assets/Office_img_5.webp"

const Office = () => {
  return (
    <div name='office' className='w-full min-h-screen'>
        <div name='home-res' className='max-w-[1400px] m-auto px-4 grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl font-bold max-sm:order-1 max-sm:mt-2 sm:order-1'>
                    Úřady
                </h3>
                <p className='text-xl text-justify pb-6 mt-2 max-sm:order-2 sm:order-2 sm:pb-1'>Komunikace s úřady ve stavebnictví se nebojíme. Zvládneme administrativu a různé požadavky úřadů. Cílem je zajistit, aby váš projekt splňoval všechny náležitosti, případně vykomunikujeme nápravu ze strany úřadů. Dejte nám vědět o Vašem problému s úřady a mi jej vyřešíme.
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

export default Office