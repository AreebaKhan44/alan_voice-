import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

import useStyles from './styles.js';

const alankey='8ce911e2952403b7df181d4c907b89bf2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App=()=>{

    const[newsArticles, setNewsArticles]=useState([]);
    const classes=useStyles();
    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand:({command,articles})=>{
                if(command==='newHeadlines')
                setNewsArticles(articles);
            }
        })
    },[])
    return(
        <div>
            <div classNaame={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>

            </div>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;