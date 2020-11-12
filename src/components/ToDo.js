import React, { Component } from 'react';
import styles from './ToDo.module.css'
import { IoMdRemoveCircleOutline } from "react-icons/io";

class ToDo extends Component {
    setDone=()=>{
        this.props.onDelete(this.props.id)
    }
    render() { 
        return ( 
        <div className={styles.container}>
            <div>{this.props.title}</div>
            <div>{this.props.isDone}</div>
            <div onClick={this.setDone}><IoMdRemoveCircleOutline className={styles.icon} /></div>
        </div> 
        );
    }
}
 
export default ToDo;