import React from 'react'
import ProductCardComponent from '@/components/ProdcutCardComponent'
import { productList } from '@/lib/product'
import AlphabetDisplayComponent from '@/components/AlphabetDisplayComponent'

export default function ProductPage() {

  return (
    <div className='flex flex-row gap-5 bg-amber-50 text-amber-700'>
        {/* <ProductCardComponent image={'https://i.pinimg.com/736x/63/e6/5c/63e65c9f222efd5f9a7656c00bd4de1a.jpg'} name={'Oggy'} age={2} hobby={'Sleeping'}/>
        <ProductCardComponent image={'https://i.pinimg.com/736x/b6/9e/e0/b69ee0b3cd283c739999afd97cfc8798.jpg'} name={'Dodo'} age={3} hobby={'Eating'}/>
        <ProductCardComponent image={'https://i.pinimg.com/736x/89/93/45/8993451cb257633af82bd5a157aa2711.jpg'} name={'TuTu'} age={1} hobby={'Woofing'}/>
        <ProductCardComponent image={'https://i.pinimg.com/736x/c7/9f/fd/c79ffd86f9aad339841c421bd574a8ba.jpg'} name={'Momo'} age={4} hobby={'Playing Ball'}/>
        <ProductCardComponent image={'https://i.pinimg.com/736x/b8/88/76/b88876404ee1b719072131e37fbe9959.jpg'} name={'Koko'} age={3} hobby={'Judging'}/>
        <ProductCardComponent image={'https://i.pinimg.com/736x/09/b8/76/09b876a1de3bbaa8e7f261353988a4c0.jpg'} name={'Titi'} age={2} hobby={'Fighting'}/>
        <ProductCardComponent image={'https://i.pinimg.com/1200x/53/b4/31/53b431718a86e18e66e408643098d89e.jpg'} name={'Yaya'} age={4} hobby={'Running'}/> */}
        {/* {
          productList.map(({image,name,age,hobby})=>(
            <ProductCardComponent
             key={name}
             image={image} 
             name={name} 
             age={age} 
             hobby={hobby}/>
          ))
        } */}
        {/* State */}
        <AlphabetDisplayComponent/>
    </div>
  )
}
