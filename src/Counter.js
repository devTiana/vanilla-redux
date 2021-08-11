import { createStore } from "redux";

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0;

// 문자열 오타는 에러안남 => 변수에 담고 변수명 잘못쓰면 에러로 확인 가능
const PLUS = "PLUS";
const MINUS = "MINUS";

// data를 modify하는 함수 (in charge of)
const countModifier = (count = 0, action) => { // state 기본값을 0으로 설정
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState()
}
const handlePlus = () => {
  countStore.dispatch({ type: PLUS })
}
const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
countStore.subscribe(onChange)