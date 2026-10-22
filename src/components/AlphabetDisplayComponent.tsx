'use client'

import { useState } from "react";

export default function AlphabetDisplayComponent(){

    // interface item{
    //     title:string;
        
    // }
    // const item = {
    //     title: """,
    //     name: ""
    // }
    const [letter, setLetter] = useState('');
    // React hook only support client side
    return (
        <section>
            {/* Result */}
            <h1>
                {letter}
            </h1>
        <section className="flex gap-2">
            <button className="border p-2 rounded" onClick={()=>setLetter(letter+'A')}>A</button>
            <button className="border p-2 rounded" onClick={()=>setLetter(letter+'B')}>B</button>
            <button className="border p-2 rounded" onClick={()=>setLetter(letter+'C')}>C</button>
            <button className="border p-2 rounded" onClick={()=>setLetter(letter+'D')}>D</button>
            <button className="border p-2 rounded" onClick={()=>setLetter(letter+'E')}>E</button>
            <button className="border p-2 rounded" onClick={()=>setLetter(letter+'F')}>F</button>
        </section>
        </section>
    )
}