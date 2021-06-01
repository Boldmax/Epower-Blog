import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Image,
  Links,
  Cards,
  Title,
  Header,
  HeaderTitle,
  Button,
  ButtonCont
} from "./BlogMainPage.style";

export default function BlogMainPage() {
  const [blogPost, setBlogPost] = useState({});

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
  }, []);

  console.log(blogPost);

  return (
    <Container>
      <Header>
      <HeaderTitle>Epower Blog</HeaderTitle>
      </Header>
      {Object.entries(blogPost).slice(0, 6).map((data) => {
        return (
          <Cards key={data[1].id}>
            <Image src={data[1].featured_image} />
            <Title
              dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
            />
            <Links
              to="/blog"
              dangerouslySetInnerHTML={{ __html: data[1].excerpt.rendered }}
            />
          </Cards>
        );
      })}
      <ButtonCont>
          <Button>Previous</Button>
          <Button>Next</Button>
      </ButtonCont>
    </Container>
  );
}
