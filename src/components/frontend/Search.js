import React from 'react'

const Search = (props)=> {
    return (
        <div>
             <div class="input-wrapper">
                      <input id="stuff"
                       placeholder="Type Here To Search...."
                       onChange={props.handleChange}
                      />
                      <label for="stuff" class="fa fa-search input-icon"></label>
                      
                 </div>
        </div>
    )
}
export default Search;