import React, {useState, useEffect} from 'react';
import {Post} from '../../types/interfaces'

const postDetails = ({id}: {id:number}) => {
    const [post, setPost] = useState<Post>();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
    }, [id]);

    return(
        <div>
            {post ?
                <article>
                    <h2>id: {post.id}</h2>
                    <h2>title: {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            : null
            }
        </div>
    );
}

export default postDetails
