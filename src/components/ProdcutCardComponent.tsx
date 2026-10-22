import { ProductType } from "@/lib/product";

export default function ProductCardComponent(props:ProductType){

    //declare variable
    // const image = 'https://i.pinimg.com/736x/4b/03/0b/4b030b3c8996126fee59cc04544b8d8f.jpg';
    // const name = 'Bobby';
    // const age = 0;
    // const hobby = 'Running';
    //if age <= 0 ? 3 : age
    //using default when call that component to use no need to do destructuring
    return (
        //Jsx
        <section>
        <img src={props.image} width={200} height={200} alt="Dog Smilling" />
        <h2>{props.name}</h2>
        <h3>{
            props.age <= 0 ? 3 : props.age
            } months old</h3>
        <h4>{props.hobby}</h4>
        <button>Like</button>
        </section>
    )
}

