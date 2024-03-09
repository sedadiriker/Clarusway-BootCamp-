const user = document.querySelector(".user-data");
const btn = document.querySelector('.btn')


const getUser = async () => {
  const URL = "https://randomuser.me/api/";

  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = await res.json();
    displayUser(data);
  } catch {
    user.innerHTML = `
        <img src="./img/404.png" alt="" />
    `;
  }
};

const displayUser = (data) => {
  const {results,info} = data
  const [person] = results
  const {name:{first},name:{last},email,picture:{medium},dob:{date}, location:{street:{number,name},city},phone,cell,login:{username,password} } = person
  
  console.log(cell);


  user.innerHTML = `
        <div class="card w-75 h-75">
            <div class="w-100 p-4 text-center image-div h-25 position-relative">
            <img src="${medium}" class="card-img-top rounded-pill" alt="...">
            </div>
            <div class="card-body d-flex flex-column align-items-center gap-2 justify-content-evenly">
                <div class='name-div'>
                    <p class="card-text">Hi, My name is</p>
                    <h5 class="card-title name">${first} ${last}</h5>
                </div>
                <div class="email-div hidden">
                    <p class="card-text name">My email adress is</p>
                    <h5 class="card-title">${email}</h5>
                </div>
                <div class="birthday-div hidden">
                    <p class="card-text name">My birthday is</p>
                    <h5 class="card-title">${new Date(date).toLocaleDateString()}</h5>
                </div>
                <div class="adress-div hidden">
                    <p class="card-text name">My adress is</p>
                    <h5 class="card-title">${number} ${name} ${city}</h5>
                </div>
                <div class="telephone-div hidden">
                    <p class="card-text name">My phone numbers are</p>
                    <h5 class="card-title">${phone} --- ${cell}</h5>
                </div>
                <div class="password-div hidden">
                    <p class="card-text name">My password is</p>
                    <h5 class="card-title">${password}</h5>
                </div>
                
                
                
                <div class="buton text-center d-flex gap-5">
                    <i class="fa-solid fa-user btn-icon"></i>
                    <i class="fa-solid fa-envelope btn-icon"></i>
                    <i class="fa-solid fa-calendar-days btn-icon"></i>
                    <i class="fa-solid fa-map-location btn-icon"></i>
                    <i class="fa-solid fa-phone-volume btn-icon"></i>
                    <i class="fa-solid fa-lock btn-icon"></i>
                </div>
            </div>
        </div>
    `
}

getUser();



user.addEventListener('mouseover', (e) => {
    const target = e.target;
    e.target.classList.add('dark')
    
    if(target.classList.contains('fa-envelope')) {
        target.closest('.card').querySelector('.email-div').classList.remove('hidden')
        target.closest('.card').querySelector('.name-div').classList.add('hidden')
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')

    }
    if(target.classList.contains('fa-calendar-days')) {
        target.closest('.card').querySelector('.birthday-div').classList.remove('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.add('hidden')
    }
    
    if(target.classList.contains('fa-map-location')) {
        target.closest('.card').querySelector('.adress-div').classList.remove('hidden')
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.add('hidden')
    }

    if(target.classList.contains('fa-phone-volume')) {
        target.closest('.card').querySelector('.telephone-div').classList.remove('hidden')
        target.closest('.card').querySelector('.adress-div').classList.add('hidden')
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.add('hidden')
    }
    
    if(target.classList.contains('fa-lock')) {
        target.closest('.card').querySelector('.password-div').classList.remove('hidden')
        target.closest('.card').querySelector('.telephone-div').classList.add('hidden')
        target.closest('.card').querySelector('.adress-div').classList.add('hidden')
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.add('hidden')
    }
})

user.addEventListener('mouseout', (e) => {
    const target = e.target;
    e.target.classList.remove('dark')

    if(target.classList.contains('fa-envelope')) {
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.remove('hidden')

    }
    if(target.classList.contains('fa-calendar-days')) {        
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.remove('hidden')
    }
    
    if(target.classList.contains('fa-map-location')) { 
        target.closest('.card').querySelector('.adress-div').classList.add('hidden')       
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.remove('hidden')
    }
    
    if(target.classList.contains('fa-phone-volume')) { 
        target.closest('.card').querySelector('.telephone-div').classList.add('hidden')
        target.closest('.card').querySelector('.adress-div').classList.add('hidden')       
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.remove('hidden')
    }
    
    if(target.classList.contains('fa-lock')) { 
        target.closest('.card').querySelector('.password-div').classList.add('hidden')
        target.closest('.card').querySelector('.telephone-div').classList.add('hidden')
        target.closest('.card').querySelector('.adress-div').classList.add('hidden')       
        target.closest('.card').querySelector('.birthday-div').classList.add('hidden')
        target.closest('.card').querySelector('.email-div').classList.add('hidden')
        target.closest('.card').querySelector('.name-div').classList.remove('hidden')
    }
})

btn.addEventListener('click', () => {
    window.location.reload()
})