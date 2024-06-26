import React from 'react';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import {TransactionHistory}  from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'; 

import './App.css';

transactions.forEach(transaction => {
  transaction.amount = Number(transaction.amount); 
});

export const App = () => {
  return (
    <div className='App'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


