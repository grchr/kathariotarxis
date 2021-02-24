import React, { useEffect } from 'react';

export function NewsPage(props : any) {
    console.log('News');
    console.log(props);

    useEffect(() => {
    
        return function cleanup() {
          console.log('news cleanup called');
          console.log(props);
        }
    }, [props]);

    return (
        <div>This will be a News Page</div>
    );
}