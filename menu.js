async function getResponce() {
    let responce = await fetch("./menu.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 3)
    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let menu = document.getElementById("menu")
    for (key in content) {
        menu.innerHTML += `
        <li style="width: 210px" class="coffie">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h2>${content[key].title}</h5>
        <p>${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="plus_but"><input type="Submit" name="submit"  value="+"></p>
        </li>
                `
    }


}
getResponce()