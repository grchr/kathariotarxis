import React, { useEffect } from 'react';

export function ChorePage(props : any) {
    console.log('Chore');
    console.log(props);

    useEffect(() => {
    
        return function cleanup() {
          console.log('chore cleanup called');
          console.log(props);
        }
    }, [props]);
    
    return (
        <div>This will be a Chore Page</div>
    );
}