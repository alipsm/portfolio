import { batch } from "react-redux";

export const increment = (index) => {
    return (dispatch, getState) => {
        let state_correctNumber = { ...getState().correctNumber };
        var numbers = [...state_correctNumber.num_input];
        numbers[index]++;
        state_correctNumber.num_input = numbers;
        dispatch({ type: "INCREMENT", payload: state_correctNumber });
    }
}


export const decrement = (index) => {
    return (dispatch, getState) => {
        let state_correctNumber = { ...getState().correctNumber };
        var numbers = [...state_correctNumber.num_input];
        numbers[index]--;
        state_correctNumber.num_input = numbers;
        dispatch({ type: "DECREMENT", payload: state_correctNumber });
    }
}

export const setValueWithWrite = (index, value) => {
    return (dispatch, getState) => {
        var state_correctNumber = { ...getState().correctNumber };
        var numbers = [...state_correctNumber.num_input];
        numbers[index] = value == "" ? value : value == "-" ? "-" : parseInt(value);
        state_correctNumber.num_input = numbers;
        dispatch({ type: "SET_VALUE", payload: state_correctNumber });
    }
}
export const clearValueWithWrite = () => {
    return (dispatch, getState) => {

        var state_correctNumber = { ...getState().correctNumber };
        // var numbers = [...state_correctNumber.num_input];
        // numbers[index]++;
        const state = { num_input: [0, 0, 0, 0, 0], check_start: false, button_text: "" }
        state_correctNumber.num_input = state;
        dispatch({ type: "INCREMENT", payload: state_correctNumber });
    }
}

// var check_start = false;
// var button;
var list_input;
var list_text_math;
export const get_number = () => {
    return (dispatch, getState) => {
        let correctNumber = { ...getState().correctNumber };
        var {check_start} = correctNumber;

        list_input = document.querySelectorAll(".input-number");
        list_text_math = document.querySelectorAll(".math-text");
        const list_operator_math = [" + ", " - ", " * "]
        var list_math = []
        for (let i = 0; i < 5; i++) {
            const length_math = Math.floor(Math.random() * 2 + 1)
            var number = Math.floor(Math.random() * 9 + 1);
            
            for (let i = 0; i < length_math; i++) {
                number += `${list_operator_math[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 10)}`
            }
            list_math.push(number);
        }
        
        if (check_start === false) {

            for (let i = 0; i < 5; i++) {
                list_text_math[i].classList.add("show_animation_text_math")
                list_text_math[i].classList.replace("hide_animation_text_math", "show_animation_text_math");
                list_input[i].correct = eval(list_math[i]);
                correctNumber.list_text_math[i] = list_math[i].replaceAll(" * ", " x ");
            }
            correctNumber.check_start=true;
            correctNumber.button_text="برسی اعداد";
            dispatch({ type: "START_GAME" , payload:correctNumber});
        }
        else {
            var win = 0;
            correctNumber.effort++;
            for (let i = 0; i < 5; i++) {
                if (list_input[i].value > list_input[i].correct) {
                    list_input[i].style.background = 'red';
                }
                else if (list_input[i].value < list_input[i].correct) {
                    list_input[i].style.background = 'blue';
                }
                else {
                    list_input[i].style.background = 'green';
                    win++;
                }
                
                dispatch({ type: "EFFORT" , payload:correctNumber});
            }
            if (win === 5) {
                // button.innerHTML = 'start game';
                for (let i = 0; i < 5; i++) {
                    list_text_math[i].classList.add("hide_animation_text_math");
                    list_text_math[i].classList.replace("show_animation_text_math", "hide_animation_text_math");
                    list_input[i].style.background ="rgb(153, 201, 255)";

                }
                
                alert(`win your effort is : ${correctNumber.effort++}`)
                check_start = false;
                list_math = [];
                win = 0;
                setTimeout(() => {
                    dispatch({ type: "CLEAR" });
                }, 600);
            }

        }
    }
}
