import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { books } from './books';
import Book from './Book';
import './index.css';
/* 
*******************************

        JSX rules 

*******************************
*/
// return single elements
// div/section/article or Fragment
// use CamelCase for html attributes
// className instead of class
// close every element
// formatting

// function Greeting(){
//   return (
//     <div>
//       <h1> Hello, world </h1>
//       <Person></Person>
//       <Message></Message>
//     </div>
//   )
// }

// const Person = () => <h1> This is John Doe </h1>

// const Message = ()=> {
//   return <p> My name is Olatise Oluwatobiloba Samuel</p>
// }
// // const Greeting = () => {
// //   return React.createElement("div", {}, React.createElement("h1", {}, "Hello, Worldsssss"))
// // }



// ReactDom.render(<Greeting/>, document.getElementById("root"))


// BOOKLIST
// setup variables


// const names = ["peter", "susan", "john"]
// const Newnames = names.map((name)=>{
//   console.log(name);
//   return <h1>{name}</h1>;
// })
// console.log(Newnames);
function BookList(){
  return(
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        return <Book key = {book.id} {...book}>        
          
        </Book>
      })}
    </section>
    )
  }


const Image = () => {}

const Title = () => {}

const Author = () => {}
ReactDom.render(<BookList></BookList>, document.getElementById("root"))