/*
    일반적으로 React 데이터 위에서 아래 (부모에서 자식)prop를 통해 전달
    여러 컴포넌트들에 전달해줘야 하는 prop경우 과정이 번거로울 수 있음
    context를 이용하면 ,트리 단계마다 명시적으로 props 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유할 수 있게 함 

    context를 사용하면 중간에 있는 element에게 props 넘겨주지 않아도 됨
    원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼수 있음.

    context를 사용하면 컴포넌트를 재사용하기 어려워짐

    contextAPI를 사용하기 위해 provider Consumer, CreateContext 알아야함
    Provider : 생성한 context를 하위 컴포넌트에게 전달하는 역할
    Consumer : context의 변화를 감시하는 컴포넌트
    CreateContext : context 객체 생성
*/

import { Children, createContext } from "react";

export const AppContext = createContext(); //context 객체 생성

export default function Ucontext(){
    const user = () => {
        name:"가나다",
        job : "라마"
    }
    return(
        <div>
            <Children />

        </div>
    );
}