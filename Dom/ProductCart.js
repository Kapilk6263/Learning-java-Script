const productsContainer=document.querySelector(".product")

const products = [
    {
        name: "mobile",
        image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 35000,
        itemColor: "red",
        category: "Electronics"
    },
    {
        name: "laptop",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        price: 65000,
        itemColor: "silver",
        category: "Electronics"
    },
    {
        name: "headphones",
        image: "https://th.bing.com/th/id/OIP.2SXwxQE6dgxLMibRA6t_rwHaF7?w=274&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 2500,
        itemColor: "black",
        category: "Accessories"
    },
    {
        name: "watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        price: 5000,
        itemColor: "blue",
        category: "Wearables"
    },
    {
        name: "camera",
        image: "https://th.bing.com/th/id/OIP.CGOLwLvB-CY1iM2LCzTaPQHaE8?w=325&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 40000,
        itemColor: "grey",
        category: "Electronics"
    }
];

function displayProduct(data){
    const card=document.createElement("div");
    card.setAttribute("class","card");

    card.innerHTML=`<img src="${data.image}" alt=""/>
                   <p>ProductName : ${data.name} </p>
                   <p>ProductPrice : ${data.price} </p>
                   <p>ProductitemColor : ${data.itemColor} </p>
                   <p>ProductCategory: ${data.category} </p>
                   <button>Update</button>
                   <button>Delete</button>`;

                   productsContainer.append(card)
}

products.forEach((ele,i)=>{
    displayProduct(ele)
})