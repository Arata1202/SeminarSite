import React from 'react';
import styles from './index.module.css';

export default function SearchField({ defaultQuery = '' }) {
  return (
    <form action="/blog/search" method="GET">
      <input
        type="search"
        name="q"
        className={`${styles.search} border border-gray-300 focus:border-2 focus:border-green-500 focus:outline-none cursor-pointer`}
        placeholder="検索"
        defaultValue={defaultQuery}
        style={{ width: '100%', borderRadius: '0' }}
      />
      <button type="submit" style={{ display: 'none' }}>
        Search
      </button>
    </form>
  );
}
