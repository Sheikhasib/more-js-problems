const phones =[
    {name: 'Samsung A7', price:29000, camera:24, storage:'128'},
    {name: 'Walton', price:10000, camera:14, storage:'32'},
    {name: 'Xaomi', price:15000, camera:14, storage:'32'},
    {name: 'Oppo', price:16000, camera:14, storage:'32'},
    {name: 'Nokia', price:19000, camera:14, storage:'32'},
    {name: 'htc', price:28000, camera:14, storage:'32'},
];

let cheapest = phones[0];
for(const phone of phones){
    // compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }    
}
console.log(cheapest);