import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text'>What is Context Api?</h1>
                <p>Answer: <small>The Context API is a component structure provided by the React framework, 
                which enables us to share specific forms of data across all levels of the application. 
                It’s aimed at solving the problem of prop drilling.The Context API has actually always 
                been there but was considered experimental. Moving forward the API was improved to stability, 
                and as of the release of version 16.3, the feature was made available and subsequently 
                considered a new addition to the clan of features that make React a wonderful framework.</small></p> 
            </div>
            <div>
                <h1 className='text'>What is Semantic Tag?</h1>
                <p>Answer: <small>A semantic element clearly describes its meaning to both the browser and the developer.
                The benefit of writing semantic HTML stems from what should be the driving goal of any web page: 
                the desire to communicate. By adding semantic tags to your document, you provide additional information about 
                that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meanin
                of a page and its content is.That clarity is also communicated with search engines, ensuring that the right pages 
                aredelivered for the right queries.</small></p>
            </div>
        </div>
    );
};

export default Blog;