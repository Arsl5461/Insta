import React from 'react'
import {useNavigate} from "react-router-dom"

function Posts({data}) {
  const navigate=useNavigate();
  const postDetail=(id)=>{
    let path=`/${id}`;
    navigate(path);
  }
  const comment=(id,title)=>{
    let path=`/${id}/${title}`;
    navigate(path);
  }

  return (
    <div className='container'>
        {data.map((item)=>{
          return(
          <>
      <div className='profile d-flex'>

    <img src={item.profileimg} alt="Profile"></img>
    <div className='d-flex flex-column left point'>
    <p onClick={()=>postDetail(item.id)}><b>{item.title}</b></p>
    <p>{item.subtitle}</p>
    </div>
    </div>
    <div className='set'>
    <img src={item.postimg} alt="" />
    </div>
    <div className=''>
    <i class="fa-regular fa-heart icon"></i>
    <i  onClick={()=>comment(item.id,item.title)} class="fa-regular fa-comment icon1 point"></i>
    </div>
    <div className='mt-2'><b>{item.title}</b><span className='left'>{item.postDetails}</span></div>
        <p className='text-secondary'> View All {item.comments.length} Comments</p>

    </>
          )
        })}
  </div>
  )
}

export default Posts;


