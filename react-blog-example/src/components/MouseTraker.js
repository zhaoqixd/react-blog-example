/*
* react 官网的 render props例子实现
* 主要是实现一个组件追逐鼠标的效果。
 */

import React from "react";
import { useState, useEffect } from "react";

// 这个版本是基础版本1.0
const  MouseTracker  = () => {
  const [position, setPosition] = useState({x : 0, y : 0});

  const handleMouseMove = (event) => {
    setPosition({
      x:event.clientX,
      y:event.clientY
    })
  }

  return (
    <div style={{height:'100vh'}} onMouseMove = {handleMouseMove}>
        <h1>移动鼠标！</h1>
        <p>当前鼠标位置是({position.x},{position.y})</p>
    </div>
  )
}

// 现在封装Mouse组件，封装我们需要共享的位置属性
const Cat = (props) => {
  const { position } = props;
  return <img src="./cat.jpg" style={{position : 'absolute', left: position.x, top: position.y, height:50, width:50}} />
}
const Mouse  = () => {
  const [position, setPosition] = useState({x : 0, y : 0});

  const handleMouseMove = (event) => {
    setPosition({
      x:event.clientX,
      y:event.clientY
    })
  }
  
  return (
    <div style={{height:'100vh'}} onMouseMove = {handleMouseMove}>
        <Cat position={position} />
    </div>
  )
}

const MouseTrakerPlus = () => {
  return (
    <div>
      <h1>移动鼠标！</h1>
      <Mouse />
    </div>
  )
}

// 使用render props 实现
const MouseRenderProps = () => {
  const [position, setPosition] = useState({x : 0, y : 0});

  const handleMouseMove = (event) => {
    setPosition({
      x:event.clientX,
      y:event.clientY
    })
  }
  
  return (
    <div style={{height:'100vh'}} onMouseMove = {handleMouseMove}>
        <h1>移动鼠标！</h1>
        {this.props.render(position)}
    </div>   
  )
}

const MouseTrakerPlusPlus = () => {
  return (
    <div>
      <h1>移动鼠标！</h1>
      <Mouse  render={(position)=>{
        <Cat position={position} />
      }}/>
    </div>
  )
}

// 使用HOC进行封装
const withMouse = (Component) => {
  return () => {
    return (
      <Mouse  render={(position)=>{
        <Component position={position} />
      }}/>
    )
  }
}

const CatWithMouse = withMouse(Cat);

export default MouseTracker;