
class Service {
    constructor() {
        this.appkey = "22077a9606dc4caf6305b618c12e07cf"
 
    }


    getWheater =  (param) =>{
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&APPID=${this.appkey}`)
        .then(res => res.json())
        .then(res => res)
        }

    // getCapitals = () => {
    //     // const capitalsObj = ['são paulo' , 'rio de janeiro' , 'belo horizonte' , 'brasilia' ]
    //     const capitalsId = "3448439, 3470127, 3451190, 3469058"
    //     let capitals
    //     return fetch(`https://api.openweathermap.org/data/2.5/group?id=${capitalsId}&units=metric&APPID=${this.appkey}`)
    //             .then(res => res.json())
    //             .then( res => capitals = res)

    //     return cpi
    // }
}
// const APIkey = "22077a9606dc4caf6305b618c12e07cf"




export default Service