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

  return (
    <Container>
      {Object.entries(blogPost).map((data, key) => {
        const newData = parseInt(searchTerm);
        if (data[1].id === newData)
          return (
            <>
              <Header key={key}>
                <HeaderTitle
                  dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
                />
                <HeaderDate>Published on : {data[1].date}</HeaderDate>
              </Header>
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
            </>
          );
      })}
      <Footer>
        <Copyright>Copyright 2021</Copyright>
      </Footer>
    </Container>
  );
}
