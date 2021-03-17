import React,{useState, useEffect} from 'react'
import  ReactDOM  from 'react-dom';
import onClickOutside from "react-onclickoutside";
// import useOutsideClick from "react-outside-click-hook";

const modalRoot = document.getElementById('modal-root');


export default (Component) => {
  	return (props) => {
		const[element] = useState(document.createElement('div'))
		// const [isOpen, setIsOpen] = useState(false);
	
		useEffect(() => {
			modalRoot.appendChild(element)
			
			return () => {
				modalRoot.removeChild(element)
			}
		})

		// DomPortal.handleClickOutside = () => setIsOpen(false);
	
		return (
			ReactDOM.createPortal(
			 <Component {...props} />,
				element
			)
		)
	}
}

// const clickOutsideConfig = {
//   handleClickOutside: () => DomPortal.handleClickOutside
// };

// export default DomPortal