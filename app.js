//npm i axios termilenden indirdim
//import ettim
import axios from "axios";

//async fonksiyon tanımladım ve id paremetresini verdim
async function getData(Number) {
    try {
        //await ve import edip indirdiğimiz axios function'u ile API'mizin users adresine ulaştım ve id paremetremizi kullandım 

        async function getUserId(Number) {
            const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + Number)
            console.log(users)
        }
        async function getPostUserId(Number) {
            const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number)
            console.log(posts)
        }

        //terminale sırası ile olucak şekilde yazdırdım 
        const uId= await getUserId(Number) 
        const pUserIs = await  getPostUserId(Number)
        
        return uId+pUserIs

    } catch (error) {
        console.log(error)
    }

}

//getData Fonksiyonumuzu export ettim
export default getData;