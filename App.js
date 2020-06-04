import React from 'react';
import List from './composition/List';  

function App(){
    const store =  (
        <ul>
          {[
           <li key={1} />,
            <li key={2} />,
            <li key={3} />,
          ]}
        </ul>
      )      
    return(
    <main className='App'>
        {store}
    </main>
    )
}

export default App