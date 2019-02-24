(function(){
// customers
let customers = [];
let index = 0;
// object constractor function
function Customer (name, img, text) {
    this.name = name;
    this.img = img;
    this.text =text;
};
// create customer function

function createCustomer (name, img, text) {
    //full img
    let fullImg = `img/customer-${img}.jpg`;
    // create a new customer instance
    const customer = new Customer(name, fullImg, text);
    // add to all customers 
    customers.push(customer);
}

createCustomer('John', 1, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`);
createCustomer('Lila', 2, `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`);
createCustomer('Ayla', 3, `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.`);
createCustomer('Brad', 4, `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`);

// console.log(customers);
document.querySelectorAll('.btn').forEach(function(item){
    item.addEventListener('click', function(event){
        event.preventDefault();
        // console.log(event.target);
        if(event.target.parentElement.classList.contains('prevBtn')){
            if (index === 0) {
                index = customers.length;
            }
            index--;
            document.getElementById('customer-img').src = customers[index].img;
            document.getElementById('customer-name').textContent = customers[index].name;
            document.getElementById('customer-text').textContent = customers[index].text;
        }
        if(event.target.parentElement.classList.contains('nextBtn')){
            if (index === (customers.length-1)) {
                index = -1;
            }
            index++;
            document.getElementById('customer-img').src = customers[index].img;
            document.getElementById('customer-name').textContent = customers[index].name;
            document.getElementById('customer-text').textContent = customers[index].text;
        }
    });
});
})();