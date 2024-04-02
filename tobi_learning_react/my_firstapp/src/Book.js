import React from "react";

const Book = (props) => {
    const { img, title, author, children} = props
    console.log(props);

    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.currentTarget);
        alert("Hello, World")}
    const complexExample = (author) => console.log(author);
    const displayAuthor = (author) => {console.log(author);}
    return(
        <article className='book'> 
        <img src={img} alt = "Sonic Boom"></img>
        <h1 onClick={()=> console.log({title})}>{title} </h1>
        <h4 style={{color: "#617d98", fontSize: "0.75rem", marginTop : "0.25rem"}} onMouseOver={()=> displayAuthor(author)}> 
        {author}
        </h4>
        <p>
        {children}
        </p>
        <button type='button' onClick={clickHandler}> Reference example </button>
        <button type='button' onClick={()=>complexExample(author)}> More Complex Examples </button>
        </article>
    )
}

export default Book