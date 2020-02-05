
import Search from "./components/Search";
import Result from "./components/Result";
import React, {useEffect, useState,useRef} from 'react';
import './App.css';

function App() {
  const [searchTerm,setSearchTerm]=useState("");
  const [pagination,setPagination]=useState(0);
  const [result,setResult]=useState([]);

  const prevSearchIdRef= useRef();
  useEffect(() =>{
    prevSearchIdRef.current=searchTerm;
  });
  const prevSearch =prevSearchIdRef.current;
  useEffect(()=> {

    const getRecipes = async () => {
       const YOUR_APP_ID = "69d5b2d9";
       const YOUR_APP_KEY ="e781eb3e05bfce33eba232b3c4dfd166";
       var currentPagination=pagination;
       if (prevSearch !== searchTerm){
         currentPagination=0;
         setPagination(0);

       }

      const result = await fetch( `https://api.edamam.com/search?q=${searchTerm}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=${currentPagination}&to=${currentPagination+10}`
    );
      const data = await result.json();
      console.log(data);
      if (data.hits.length>0){
        setResult(data.hits);
      }
    };
    if (searchTerm && (searchTerm!== prevSearch || pagination>0)){
      getRecipes();
    }
  },[searchTerm,pagination,prevSearch]);

    return(

      <div>
        {pagination}
        {searchTerm}
      <Search setSearchTerm={setSearchTerm}/>
      <Result recipes={result}pagination={pagination} setPagination={setPagination} />
    </div>
        );

  }
  export default App;
