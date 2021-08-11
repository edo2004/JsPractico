const precioOriginal =120;
const descuento = 18;

const coupons = [
    {
        name: "Eduar",
        discount: 15,
    },
    {
        name: "Ordoñez",
        discount: 25,
    },
    {
        name: "Muñoz",
        discount: 20,
    },
    {
        name: "Yis",
        discount: 5,
    }
];

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100-descuento
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function calcularAhorro(precio,precioDescuento) {
    const totalAhorrado = precio-precioDescuento;

    return totalAhorrado;
}

function PriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const precioInicial = document.getElementById("PrecioInicial")
    const priceValue = inputPrice.value
    precioInicial.innerText = "$"+priceValue

    const inputDiscount = document.getElementById("inputDiscount");
    const descuentoTot = document.getElementById("descuentoTot");
    const couponValue = inputDiscount.value

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        descuentoTot.innerText = descuento + "% Off"

        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const precioFinal = document.getElementById("precioFinal")
        precioFinal.innerText = "$"+ precioConDescuento

        const ahorroTotal = calcularAhorro(priceValue,precioConDescuento)
        const resultP = document.getElementById("venta")
        resultP.innerText = "Ahorrate $" +ahorroTotal +" compralo ya!"
        
    }
}