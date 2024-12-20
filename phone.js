const loadPhone=async(searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    const phones=data.data;
    // console.log(data.data);
    displayPhones(phones);
}

const displayPhones=phones=>{

    const phoneContainer=document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent='';


    phones.forEach(phone=>{
        console.log(phone);
        //2 create a div
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card bg-gray-100 p-4 shadow-xl`;
        // set innerHTML
        phoneCard.innerHTML=`
        <figure>
                      <img
                        src="${phone.image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                
                    `;
                    // 4 append child
                    phoneContainer.appendChild(phoneCard);
    })
}



// handle search button

const handleSearch=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


const handleSearch2=()=>{
    const searchField=document.getElementById('search-field2');
    const searchText=searchField.value;
    loadPhone(searchText);
}

// loadPhone();