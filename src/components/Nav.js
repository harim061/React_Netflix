import React,{useState,useEffect} from 'react'
import "./Nav.css";
export default function Nav() {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll",()=>{});
        }
    }, [])
    
    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt='Netflix logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className='nav_logo'
                onClick={() =>window.location.reload()}
            />

            <img
                alt='User logged'
                src='https://upload.wikimedia.org/wikipedia/commons/4/4a/HYUNGWON_MarieClarieKorea_2021.png'
                className='nav_avatar'
            />
        </nav>
    )
}
