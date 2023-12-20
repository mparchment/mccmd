import styled from 'styled-components';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PostsContext from '../contexts/PostsContext';

function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;

    @media (min-width:1366px) {
        width: 50%;
        min-height: 100vh;
        padding-top: 10px;
        margin: 0 auto;

        padding-left: 7.5%;
        padding-right: 7%;

        background-color: #fff;
    }
`;

const Title = styled.h1`
    font-weight: 800;
    font-size: 200%;
    color: #333;
`;

const Content = styled.div`
    img, iframe, video {
        max-width: 100%;
        height: auto;
    }

    p, li, div {
        font-size: 1em;
    }

    @media (max-width: 768px) {
        p, li, div {
            font-size: 0.8em;
        }
    }
`;


const PostDetail = () => {
    const { slug } = useParams();
    const { posts } = useContext(PostsContext);
  
    const post = posts.find(p => p.slug === slug);

    return (
        <Wrapper>
            <Title>{stripHtml(post.title.rendered)}</Title>
            <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Wrapper>
    );
};

export default PostDetail;
