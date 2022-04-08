const products = [{
        id: 1,
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?20210306104e",
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: 2,
        name: "xiaomi mi a1",
        price: 500,
        category: "celular",
        img:"https://i.blogs.es/0fc29d/mi-a1/450_1000.jpg",
        stock: 10,
        description: "xiaomi mi a 1"


    },{  id:3,
        name:"samsung a12",
        price: 750,
        category: "celular",
        img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2735_1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
        stock: 5,
        description:"samsung a12"


    }
]

export const getProduct =  () => {

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(products) 
        }, 2000)
    })
}





