import React from 'react'
import {Container , Row , Button} from 'reactstrap'
import {NavLink , Link} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import '../Header/header.css'
const nav__links=[

  {path:'/home', display : 'Home'},
  {path:'/about', display : 'About'},
  {path:'/tours', display : 'Tours'},
]

const header = () => {
  return (
    <>
    
    <header>
      <Container>
        <Row>
            <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            {/* =========logo start=========  */}
            <div className="logo">
              <img src={Logo} alt="" srcset="" />
            </div>
            {/* =========logo End=========  */}
            {/* =========menu start=========  */}
            <div className="navigation">
              <ul className='menu d-flex align-items-center gap-5'>
{
  nav__links.map((item,index)=>(
    <li className="nav__item">
      <NavLink to ={item.path} className={navclass=>navclass.isActive ?'active__link':''}>{item.display}</NavLink>
    </li>
  ))
}
              </ul>
            </div>
            {/* =========menu end=========  */}

            <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className='btn secondary__btn'><Link to ='/login'></Link>Login</Button>
              <Button className='btn primary__btn'><Link to ='/register'></Link>Register</Button>
            </div>
              <span className="mobile__menu">
                  <i className="ri-menu-line"></i>
              </span>
            </div>

            </div>
      </Row>
      </Container>
    </header>
    
    </>
  )
}

export default header