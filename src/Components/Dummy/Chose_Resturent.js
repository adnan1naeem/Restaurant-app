import { ImageAssets } from "../ImageImports";


export const Restaurant_Selection = [
    {
        id: '1',
        img: ImageAssets?.Logo,
        Restaurant_Name: 'New York Pizza',
        about: "Pizzas, burgers and salads.",
        na: "Selected_Restaurant"
    },
    {
        id: '2',
        img: ImageAssets?.funkyPizza,
        Restaurant_Name: 'Funky Pizza',
        about: "Pizzas, burgers and salads.",
        navigate: "Selected_Restaurant"
    },
    {
        id: '3',
        img: ImageAssets?.Zarwork,
        Restaurant_Name: 'ZarWok',
        about: "Chinese takeout",
        navigate: "Selected_Restaurant"
    },
];
export const manuItem = [
    { id: 1, title: ' Pizza ', image: ImageAssets.pizza },
    { id: 2, title: ' Burger ', image: ImageAssets.Burger },
    { id: 3, title: ' Chicken ', image: ImageAssets.Chicken },
    { id: 5, title: ' Burger ', image: ImageAssets.Burger }
];
export const Restaurant_menu_List = [
    {
        id: 1,
        title: ' Hot Tony Pepperoni ',
        about: " Sos pomidorowy, Ser, Kiełbasa pepperoni, Papryka jalapeno, Sos Green Gringo ",
        level: "spicy",
        image: ImageAssets.pizza1,
        image1: ImageAssets.spicy
    },
    {
        id: 2,
        title: ' Statue of Margherita ',
        about: " Ser, Sos pomidorowy ",
        level: "wege",
        image: ImageAssets.pizza2,
        image1: ImageAssets.grean_leave
    },
    {
        id: 3,
        title: ' Spinach Giuliani ',
        about: " sos śmietanowy Alfredo, Ser, Szpinak, Oliwki czarne ",
        level: "wege",
        image: ImageAssets.pizza3,
        image1: ImageAssets.grean_leave
    },

]