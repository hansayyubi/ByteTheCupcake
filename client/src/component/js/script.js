import React from 'react'

export default function Script() {
  return (
    document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src=URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})
  )
}

