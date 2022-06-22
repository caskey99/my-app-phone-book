import React from 'react';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <input
                className="form-control-search"
                type="search"
                placeholder="Поиск"
                aria-label="Search"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
        </div>
    );
};

export default PostFilter;