/*
    useReducer : stat
    
    dispatch가 reducer를 호출함
        reducer는 store에 가서 현재 state 값을 가져와서 그리고 새로운 state 반환해줌

        Component - (dispatch)-> Action -> Reducer -> Store
        dispatch({type: '값'});
        dispatch({type: '값', data:'변경될 값'}});
*/

import { useReducer } from "react"

function reducer(state, action){
    switch(action.type){
        case'PLUS':
            return state + 1;
            case'MINUS':
            return state - 1;
            default:
                return state;
    }
}

export default function Count(){
const[상태객체,디스패치함수] = useReducer(reducer 함수,초기상태)

    const [number, dispatch] = useReducer(0)//(reducer,0)

    const onPlus = () => {
        
        dispatch({type:'PLUS'});
    }

    const onMinus = () => {
        dispatch({type:'MINUS'});
    }


    return(
    <div>
            <h3>{number}</h3>
            <button>+</button>
            <button>-</button>
    </div>
    )
}

export default  function Uredec () {
   
    return(
        <div>


        </div>
    );
}