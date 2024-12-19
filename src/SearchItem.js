import React from 'react'

const SearchItem = ({ search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='serach'>Search</label>
        <input
            id='serach'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

    </form>
  )
}

export default SearchItem
