export type ItemsType = {
    image: string,
    title: string,
    price: number,
    ori_price: number,
    desc:string
}

export const itemsList:ItemsType[] = [
    {
        image: 'https://i.pinimg.com/736x/9f/9c/7c/9f9c7c0c6f6da716d8344342f0daec44.jpg',
        title: 'Bacon Onion Pizza Focaccia',
        price: 3.44​​​​​​​,
        ori_price: 4.30,
        desc: 'ភីហ្សាសម្រាប់មនុស្ស​​​​​ 1 នាក់'
    },
    {
        image: 'https://i.pinimg.com/736x/d3/dc/1e/d3dc1eb4ff544a287f1891735a202cd7.jpg',
        title: 'Tuna Melt Sandwich',
        price: ​ 3.92​​​​​​​,
        ori_price: 4.90,
        desc: 'Mix of tuna cream cheese onions. We Recommend adding: Jalapeno, Cheese or Extra Tuna.'
    },
    {
        image: 'https://i.pinimg.com/1200x/47/86/3d/47863d5acb88a81b971fbf9cb09b1c24.jpg',
        title: 'Cream Cheese Basil Tomatoes S..',
        price: 3.68​,
        ori_price: 4.60,
        desc: 'Try Coppa as extra addon or any meat of your choice. No added sauce needed, its already packed with flavour.'
    },
    {
        image: 'https://i.pinimg.com/1200x/fa/a7/21/faa721e15192143691779a80325c0683.jpg',
        title: 'Smoked Chicken Mix',
        price: 3.76​​​​​​​,
        ori_price: 4.70,
        desc: 'Chicken deli mixed with grainy mustard mayo and onions. Served on fresh-baked bread with lettuce and tomato.'
    }
]