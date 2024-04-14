const product = [
    {
        id: 0,
        image: '/images/r_zin.jpeg',
        title: 'Rāsā - Zinfandel',
        price: 1500,
    },
    {
        id: 1,
        image: '/images/tspn.jpeg',
        title: 'The Source - Pinot Noir',
        price: 1000,
    },
    {
        id: 2,
        image: '/images/mosc.jpeg',
        title: 'The Source - Moscato',
        price: 1250,
    },
    {
        id: 3,
        image: '/images/gro.jpeg',
        title: 'The Source - Grenache Rose',
        price: 990,
    },
    {
        id: 4,
        image: '/images/cbl.jpeg',
        title: 'The Source - Chenin Blanc Reserve',
        price: 990,
    },
    {
        id: 5,
        image: '/images/ts_sb.jpeg',
        title: 'The Source - Sauvignon Blanc',
        price: 990,
    },
    {
        id: 6,
        image: '/images/ts_cs.jpeg',
        title: 'The Source - Cabernet Sauvignon',
        price: 1200,
    },
    {
        id: 7,
        image: '/images/dr-v.jpeg',
        title: 'Dindori Reserve - Viognier',
        price: 650,
    },
    {
        id: 8,
        image: '/images/dr_cr.jpeg',
        title: 'Dindori Reserve - Chardonnay',
        price: 895,
    },
    {
        id: 9,
        image: '/images/dr_s.jpeg',
        title: 'Dindori Reserve - Shiraz',
        price: 950,
    },
    {
        id: 10,
        image: '/images/sula_bt.jpeg',
        title: 'Sula Brut Tropicale',
        price: 1300,
    },
    {
        id: 11,
        image: '/images/y_cb.jpeg',
        title: 'York - Late Harvest Chenin Blanc',
        price: 850,
    },
    {
        id: 12,
        image: '/images/y_sr.jpeg',
        title: 'York - Sparkling Rose',
        price: 1300,
    },
    {
        id: 13,
        image: '/images/y_rz.jpeg',
        title: 'York - Zinfandel Rose',
        price: 650,
    },
    {
        id: 14,
        image: '/images/R_Sy.jpeg',
        title: 'Rāsā - Syrah',
        price: 1550,
    },
    {
        id: 15,
        image: '/images/R-Cs.jpeg',
        title: 'Rāsā - Cabernet Sauvignon',
        price: 1900,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}