import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Image,
  Content,
  Title,
  Cards,
  Header,
  HeaderTitle,
  HeaderDate,
  Footer,
  Copyright,
  Slug,
} from "./SinglePage.style";

export default function SinglePage() {
  const [blogPost, setBlogPost] = useState({});
  const [searchTerm, setSearchTerm] = useState();

  const getFromLS = () => {
    return localStorage.getItem("KEY");
  };

  var allList = () => {
    axios
      .get("https://blog.epower.ng/wp-json/wp/v2/posts")
      .then((res) => {
        setBlogPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    allList();
    setSearchTerm(() => getFromLS());
  }, []);

  const newData = parseInt(searchTerm);
  return (
    <Container>
      {Object.entries(blogPost).map((data, key) => {
         
         return <li key={key}> 
                 
            <Header>
            {data[1].id === newData ?
              <HeaderTitle
                dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
              />
              : null }
              {data[1].id === newData ?
              <HeaderDate>Published on : {data[1].date}</HeaderDate>
              : null }
            </Header>
            {data[1].id === newData ?
            <Cards key={data[1].id}>
              <Image src={data[1].featured_image} />
              <Title
                dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
              />
              <Content
                dangerouslySetInnerHTML={{ __html: data[1].content.rendered }}
              />
              <Slug dangerouslySetInnerHTML={{ __html: data[1].slug }} />
            </Cards>
            : null }
          </li>
      })}
      <Footer>
        <Copyright>Copyright 2021</Copyright>
      </Footer>
    </Container>
  );
}
