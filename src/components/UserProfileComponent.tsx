export default function UserProfileComponent(){
    const image = 'https://i.pinimg.com/736x/d2/67/3c/d2673ca2245b1d199bf2e9cb14e0970f.jpg';
    const name = 'Ahyoen';
    const position = 'CEO';
    const age = 2;
    return(
        <section>
            <img src={image} width={180} height={180} alt="User Picture" />
            <h1>{name}</h1>
            <h2>{position}</h2>
            <h3>{
                age < 18 ? 18 : age
                }</h3>
        </section>
    )
}