import React, { useState } from 'react'
import ContactList from './contactList/ContactList'
import Pagination from './components/Pagination'
import './App.css'

function App() {

  const [user] = useState([
    {name:'John', phone: '599-9005238'},
    {name:'Kareem', phone: '559-8005438'},
    {name:'Derf', phone: '559-8005248'},
    {name:'Doss', phone: '500-8005238'},
    {name:'Kate', phone: '600-8005238'},
    {name:'Libby', phone: '405-8005238'},
    {name:'Lilly', phone: '405-2005238'},
    {name:'Charles', phone: '555-8005538'},
    {name:'Lee', phone: '555-8005438'},
    {name:'Ray', phone: '990-8005238'},
    {name:'Jason', phone: '230-8005498'},
    {name:'V', phone: '010-0800543'},
    {name:'Freddy', phone: '111-8005238'},
    {name:'Krueger', phone: '259-8005238'},
    {name:'Charlie', phone: '159-8005238'},
    {name:'Willy', phone: '444-8005238'},
    {name:'Josh', phone: '999-8005238'},
    {name:'James', phone: '900-8005238'},
    {name:'Logan', phone: '000-8005238'},
    {name:'Ted', phone: '777-8005238'},
    {name:'Harry', phone: '459-8005238'},
    {name:'Lupe', phone: '987-095238'},
    {name:'Ed', phone: '559-8065238'},
    {name:'Edward', phone: '559-3105238'},
    {name:'Ward', phone: '559-8005535'},
    {name:'Ward', phone: '559-8005522'},
    {name:'Steve', phone: '559-8102238'},
    {name:'Eon', phone: '559-8009238'},
    {name:'Ion', phone: '559-8005298'},
    {name:'Jaay', phone: '559-8005228'},
    {name:'Waldo', phone: '551-1005238'},
  ])
  const [currentPage, setCurrentPage] = useState(1) //begin on page 1
  const [pages] = useState(20) // sets 20 per page

const indexOfLastPost = currentPage * pages 
const indexOfFirstPost = indexOfLastPost - pages
const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost)

//change page 
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <ContactList users={currentPosts}/>
      <Pagination pages={pages} 
      totalContacts={user.length} 
      paginate={paginate}
      />
    </div>
  );
}

export default App;
