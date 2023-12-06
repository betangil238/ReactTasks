import {RxCross1} from 'react-icons/rx'
import {RxCheck} from 'react-icons/rx'
function TodoItem(props){
    return(
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.complete && "Icon-check--active"}`} 
          onClick={props.onComplete}><RxCheck/></span>
        <p className={`TodoItem-p  ${props.complete && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-delete"
         onClick={props.onDelete}><RxCross1 /></span>
      </li>
    );
  }

  export {TodoItem}