import React from 'react';

export const ContextStore = React.createContext({
  todos: [1,2,3], // default
});

console.log('const ContextStore = React.createContext 可用以取代reducer所定義的global state， 相當於redux的reducer，故使用hook + contextApi 即可以取代redux效果')