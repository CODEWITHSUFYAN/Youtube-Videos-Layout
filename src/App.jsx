import React from 'react'
import Video from "./components/videoslayout.jsx"
import style from "./components/videoslayout.module.css"


const App = () => {

  let arr = [
    {id:1 , thumbnail:"css-img.jpg" , description: "Introduction To CSS | Learn How To Style  Text , Colors & Layouts" , time:"3M views • 1 month ago" },
    {id:2 , thumbnail:"css-img.jpg" , description: "How to Link CSS to HTML 3 ways to Add CSS | Inline , Internal , External" , time:"9M views • 1 month ago"},
    {id:3 , thumbnail:"css-img.jpg" , description: "CSS Syntax & Selectors Tutorial | Element, Class , ID & Comments" , time: "8M views • 1 month ago"},
    {id:4 , thumbnail:"css-img.jpg" , description: "CSS Colors Units & Measurements | HEX,RGB,HSL,px,em,rem" , time: "10M views • 1 month ago"},
    {id:5 , thumbnail:"html-img.jpg" , description: "Introduction To HTML | Learn How To Create A Webpage Using HTML" , time: "11M views • 1 month ago"},
    {id:6 , thumbnail:"html-img.jpg" , description: "HTML Meta Tags| Charset, Viewport , SEO & More" , time: "14M views • 1 month ago"},
    {id:7 , thumbnail:"html-img.jpg" , description: "HTML Entities & Symbols | nbsp, Copy, Less, Greater & More" , time: "1M views • 1 month ago"},
    {id:8 , thumbnail:"html-img.jpg" , description: "HTML Final Project & Assessment | Build Your First Personal Webpage" , time: "2M views • 1 month ago"},
  ]

  return (
    <>
      <div className={style.layout}>

        {arr.map((item) => (
         <Video key={item.id} video={item} />
        ))}

      </div>

    </>
  )
}

export default App