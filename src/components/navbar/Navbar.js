import React,{useEffect} from 'react'
import {  useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/users";

import {Link} from 'react-router-dom'
import {Wrapper} from './Navbar.Style'
const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
      }, []);
    return (
<Wrapper>
  <li><Link to='/' class="active" href="#">Contacts</Link></li>
  <li><Link to='/add' href="#">Create Contact</Link></li>

</Wrapper>
    )
}

export default Navbar
