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
} from "./SinglePage.style";

export default function SinglePage() {
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

  return (
    <Container>
      {Object.entries(blogPost).map((data) => {
        return (
          <>
            <Header key={data[1].date }>
              <HeaderTitle
                dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
              />
              <HeaderDate >
              Published on : {data[1].date }
              </HeaderDate>
            </Header>
            <Cards key={data[1].id}>
              <Image src={data[1].featured_image} />
              <Title
                dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
              />
              <Content
                dangerouslySetInnerHTML={{ __html: data[1].content.rendered }}
              />
            </Cards>
          </>
        );
      })}
    </Container>
  );
}
