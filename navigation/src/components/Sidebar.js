import { Grid } from '@mui/material';
import React from 'react';
import '../App.css';
import {SidebarData} from './SidebarData'
function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="Sidebarlist">
              {SidebarData.map((val,key) =>{
                return(
                    <div className="Hover">
                    <li key ={key}
                        onClick={() => {window.location.pathname = val.link}}>
                        {" "}
                        <div>
                        <div className="Icon" id="icon">{val.icon}</div>{" "}
                        <div className="Text" id="title">
                            {val.title}
                        </div>
                     </div>
                    </li>
                   </div>
                )
              })}
            </ul>
        </div>

    )
}
export default Sidebar;