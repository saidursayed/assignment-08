import React, { useEffect, useState } from 'react';

const useLoading = () => {
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, []);

      return {isLoading}
};

export default useLoading;