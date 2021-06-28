import React from 'react'
import msgHoc from "./Hoc";

const mssg = (props: any): any => <p>{props.name}, {props.msg} </p>

const Msg = msgHoc(mssg)

export default Msg