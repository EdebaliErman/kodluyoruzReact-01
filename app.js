//npm i axios termilenden indirdim
//import ettim
import axios from "axios";

//async fonksiyon tanımladım ve id paremetresini verdim
async function getData(id) {
    try {
            //await ve import edip indirdiğimiz axios function'u ile API'mizin users adresine ulaştım ve id paremetremizi kullandım 
            
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + id)
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + id)
        //terminale sırası ile olucak şekilde yazdırdım 
        console.log(users)
        console.log(posts)
    } catch (error) {
        console.log(error)
    }

}

//getData Fonksiyonumuzu export ettim
export default getData;