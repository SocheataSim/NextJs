"use client"
import PractiseItemDisplayComponent from "@/components/PractiseItemDisplayComponent";
import { itemsList, ItemsType } from "@/lib/item";
import { useState } from "react";

export default function pracetisePage(){
    const [letter, setLetter] = useState<ItemsType[]>([])
    return (
        <div className="bg-white p-6">
            <div className="grid grid-cols-2 gap-4">
                {
                    itemsList.map((item,index)=>(
                        <PractiseItemDisplayComponent
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        ori_price={item.ori_price}
                        desc={item.desc}
                        onAdd={()=>setLetter([...letter,item])}/>
                    ))
                }
            </div>

            <h2 className="text-black text-2xl my-4">Added ({letter.length})</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    letter.map((item,index)=>(
                        <PractiseItemDisplayComponent
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        ori_price={item.ori_price}
                        desc={item.desc}/>
                    ))
                }
            </div>
        </div>
    )
}