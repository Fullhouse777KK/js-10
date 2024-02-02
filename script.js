

const productList = [
    {
        name: 'Гамбургер простой',
        price: 10000,
        kkal: 900,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kkal(){
            return this.kkal * this.amount
        }
    },
    {
        name: 'Гамбургер FRESH',
        price: 20500,
        kkal: 1000,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kkal(){
            return this.kkal * this.amount
        }
    },
    {
        name: 'FRESH COMBO',
        price: 31900,
        kkal: 1400,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kkal(){
            return this.kkal * this.amount
        }
    }
]

const extra = {
    doubleMayonnaise: {
        price: 1000,
        name: 'Двойной майонез',
        kkal:200
    },
    lettuce: {
        price: 2000,
        name: 'Салатный лист',
        kkal:100
    },
    cheese: {
        price: 3000,
        name: 'Сыр',
        kkal:300
    }


}


const 
products = [...document.querySelectorAll('.main__product')],
productBtn = [...document.querySelectorAll('.main__product-btn')],
checkExtra = [...document.querySelectorAll('.main__product-checkbox')],
totalSumButton = document.querySelector('button.addCart'),
receipt = document.querySelector('.receipt'),
receptContent = document.querySelector('.receipt__window-out'),
receptWindowBtn = document.querySelector('.receipt__window-btn')





productBtn.forEach(btn => {
    btn.addEventListener('click', plusMinus)
})

function plusMinus(){
  const parent = this.closest('.main__product'),
  parentIndex = products.indexOf(parent),
  outAmount = parent.querySelector('.main__product-num'),
  outPrice = parent.querySelector('.main__product-price span'),
  outKkal = parent.querySelector('.main__product-call span'),
  btnSymbol = this.getAttribute('data-symbol')

if(btnSymbol === '+' && productList[parentIndex].amount < 20 ){
    productList[parentIndex].amount++
}else if(btnSymbol === '-' && productList[parentIndex].amount > 0){
    productList[parentIndex].amount--
}

const { amount, Kkal, Sum } = productList[parentIndex]
outAmount.innerHTML = amount
outKkal.innerHTML = Kkal.toLocaleString()
outPrice.innerHTML = Sum.toLocaleString()
}


checkExtra.forEach(checkbox => {
    checkbox.addEventListener('input', check)
})

function check(){
    const parent = this.closest('.main__product'),
    parentIndex = products.indexOf(parent),
    outPrice = parent.querySelector('.main__product-price span'),
    outKkal = parent.querySelector('.man__product-call span'),
    attr = this.getAttribute('data-extra')

    if(this.checked){
        productList[parentIndex].price += extra[attr].price
        productList[parentIndex].kkal += extra[attr].kkal
    }else{
        productList[parentIndex].price -= extra[attr].price
        productList[parentIndex].kkal -= extra[attr].kkal
    }

    const { Sum,Kkal } = productList[parentIndex]
    outKkal.innerHTML = Kkal.toLocaleString()
    outPrice.innerHTML = Sum.toLocaleString()
}


totalSumButton.addEventListener('click', totalSum)

function totalSum(){
    receipt.style = `opacity: 1`
    receipt.style = `display: contents`
    totalSummm()

}


function totalSummm(){
    let sum = productList[0].price * productList[0].amount + productList[1].price * productList[1].amount + productList[2].price * productList[2].amount
    receptContent.innerHTML = ` Вы заказали : 
  ${productList[0].name} - ${productList[0].amount}
  ${productList[1].name} - ${productList[1].amount}
  ${productList[2].name} - ${productList[2].amount}
Сумма вашего заказа : ${sum}`
}

receptWindowBtn.addEventListener('click', sum => {
    this.print()
})


