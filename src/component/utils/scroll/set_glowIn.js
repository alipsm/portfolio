import { show_text_information } from "../glowIn_text"

var List_Information=[];
export const set_effect_glowIn = (Scroll) => {

    if (Scroll > 100 && Scroll < 1100) {
        let find=List_Information.find(e=>e=="info")
        if(!find){
            let img=document.querySelector("#img_info")
            img.classList.add("img_brightness_class")
            List_Information.push("info")
            show_text_information("info")
        }
    }
    if (Scroll > 1100 && Scroll < 1900) {
        // alert("start")
        let find=List_Information.find(e=>e=="expertise")
        if(!find){
            let img=document.querySelector("#img_expertise")
            img.classList.add("img_brightness_class")
            List_Information.push("expertise")
            show_text_information("expertise")
        }
    }
    if (Scroll > 3700 && Scroll < 4500) {
        // alert("start")
        let find=List_Information.find(e=>e=="project")
        if(!find){
            let img=document.querySelector("#img_project")
            img.classList.add("img_brightness_lamp_class")
            List_Information.push("project")
            show_text_information("project")
        }
    }
}