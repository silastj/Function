export default function Api(){
    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
        .then(response => response.json())
        .then((json) => {
            console.log(json.data);
        })
            .catch(error => (console.log(error)));
}


// const url = "https://covid19-brazil-api.now.sh/api/report/v1";
// export async function fetchCovid(url){
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json) 
// }


// console.log(fetchCovid())




