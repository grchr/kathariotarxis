import React, { useEffect } from 'react';

export function Home(props : any) {
    console.log('Home');
    console.log(props);

    useEffect(() => {
    
        return function cleanup() {
          console.log('home cleanup called');
          console.log(props);
        }
    }, [props]);

    return (
        <div>This will be a Home Page</div>
    );
}