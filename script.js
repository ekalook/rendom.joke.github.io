const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', integrateJoke)

integrateJoke()

async function integrateJoke() {
    const configuration = {
        headers: {
            Accept: 'application/json'
        },
    }
    
    const res = await fetch('https://icanhazdadjoke.com', configuration)
   
    const data = await res.json()

    jokeElement.innerHTML = data.joke
}



// function integrateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         },
//     }
    
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeElement.innerHTML = data.joke
//     })
// }