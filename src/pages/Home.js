import { useEffect, useState } from "react"
import {getDocs} from "firebase/firestore"
import { collection,deleteDoc,doc } from "firebase/firestore"; 
import {auth, db} from "./../config/firebase"


const Home = ({isAuth}) => {

  const [postList,SetPostList] = useState([])
  const postCollecxtionRef = collection(db,"post") 

    const getPost = async ()=>{
      const data = await getDocs(postCollecxtionRef)
      console.log(data.docs);
      SetPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id}))); //wtf
    }

  useEffect(()=>{


    getPost()
  },[])

  const deletePost = async(id)=>{
    console.log(`click`);
    // const postDoc = doc(db,"posts",id)
    const postDoc = doc(db, "post", id); // Change "posts" to "post"
    console.log(postDoc);
    try {
    await deleteDoc(postDoc)
    getPost()      
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="homePage">
        <h2>Post</h2>
        {postList.map((post)=>{
         return <div className="post">
          <div className="postHead">
            <div className="title">
             <h1>{post.title}</h1>                
            </div>
            <div className="deletePost">
            { post.author.id === auth.currentUser.uid && <button onClick={()=>deletePost(post.id)}>❌</button>}
            </div>
          
          </div>
          <div className="posttextContainer">
          <p>{post.postText}</p>     
          <h3>@{post.author.name}</h3>         
          </div>
          
          </div>

        })}
    </div>
  )
}
export default Home