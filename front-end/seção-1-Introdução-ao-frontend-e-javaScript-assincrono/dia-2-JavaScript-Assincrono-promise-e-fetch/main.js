// import { Result } from 'postcss';
import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');


const ACESS_TOKEN = '5795072030515009';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACESS_TOKEN}`;
const MAX_HEROES = 1000;

const ramdomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) =>{
    event.preventDefault();
    const id = ramdomId();

    fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
        img.src = data.image.url;
        name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
        titler: 'Hero not fund',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
    }));
})