import React, { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {db, auth} from "../config/firebase"
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {

  const [title,setTitle]=useState("")
  const [postText,setPostText,]=useState("")
  let navigater = useNavigate()
  const postCollecxtionRef = collection(db,"post") 


  const createPostbutton = async ()=>{
    await addDoc(postCollecxtionRef,
      {title,postText,
        author: {name: auth.currentUser.displayName, 
        id:auth.currentUser.uid}})
        navigater("/")
  }
  useEffect(()=>{
if (!isAuth) {
  navigater("/login")
}
  },[])
  return (
    <div className='cratepostPages'>
      <div className='cpContainer'>
        <h1>Create a post</h1>
        <div className='inputGp'>
          <label>Title: </label>
          <input placeholder='Title...' onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div className='inputGp'>
        <label>post: </label>
          <textarea placeholder='post...' onChange={(e)=>setPostText(e.target.value)}/>
        </div>
        <button onClick={createPostbutton} >Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost