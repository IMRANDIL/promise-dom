// selecting the elements...

const btn = document.querySelector('.btn');
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');


// adding event listener...

// using async await...



btn.addEventListener('click', async () => {

    try {
        await addColor(1000, heading1, 'firebrick');
        await addColor(2000, heading2, 'green');
        await addColor(1000, heading3, 'blue');
    } catch (error) {
        console.log(error);
    }
})


function addColor(t, element, color) {
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, t);

        }
        else {
            reject(new Error(`Oh no Oh no no no ....!`));
        }
    })
}































// btn.addEventListener('click', () =>{
// addColor(1000,heading1,'red')
// .then(()=>addColor(2000,heading2,'green'))
// .then(() =>addColor(1000,heading3,'blue'))
// .catch((err) =>console.log(err))
// })


// function addColor(t,element,color){
//     return new Promise((resolve, reject) =>{
//         if(element){
//             setTimeout(() => {
//                 element.style.color = color;
//                 resolve();
//             },t);

//         }
//         else{
//             reject(new Error(`Oh no Oh no no no ....!`));
//         }
//     })
// }