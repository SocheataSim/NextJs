import { ItemsType } from "@/lib/item";
import { CirclePlus } from "lucide-react";

type CardProps = ItemsType & {
    onAdd?:()=>void
}

export default function PractiseItemDisplayComponent(props:CardProps){
    return (
        <section className=" border-gray-700 border-1 rounded-2xl p-4 bg-white">
            <div className="flex items-start gap-4">
                <div className="flex-1">
                <h2 className="text-black text-3xl">{props.title}</h2>
                <h3 className="text-red-400 text-2xl">ចាប់ពី $ {props.price} <span className="text-gray-600"><del>{props.ori_price}</del></span> </h3>
                <h5 className="text-gray-600 text-2xl">{props.desc}</h5>
                </div>
                <div className="relative shrink-0">
                    <img src={props.image} width={150} height={150} alt="Food" />
                    {props.onAdd && (
                        <button className=" absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-black shadow-md"
                        onClick={props.onAdd}><CirclePlus size={24} /></button>
                    )}
                </div>
            </div>
        </section>
    )
}