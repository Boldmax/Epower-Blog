import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Container,
  Image,
  Links,
  Cards,
  Title,
  Header,
  HeaderTitle,
  Button,
  ButtonCont,
  Copyright,
  Footer,
} from "./BlogMainPage.style";

export default function BlogMainPage() {
  const [blogPost, setBlogPost] = useState({});
  const [next, setNext] = useState(0);
  const [stop, setStop] = useState(6);
  const [seachKey, setSeachKey] = useState({});
  let history = useHistory();
  var allList = () => {
    axios
      .get("https://blog.epower.ng/wp-json/wp/v2/posts")
      .then((res) => {
        setBlogPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = async (data) => {
    await setSeachKey(data);
    return history.push("/blog");
  };

  useEffect(() => {
    allList();
  }, []);

  /* console.log(blogPost); */
  console.log(`Keys:${seachKey}`);
  localStorage.setItem("KEY", seachKey);

  return (
    <Container>
      <Header>
        <HeaderTitle>Epower Blog</HeaderTitle>
      </Header>
      {Object.entries(blogPost)
        .slice(next, stop)
        .map((data, key) => {
          return (
            <Cards key={key}>
              <Image src={data[1].featured_image} />
              <Title
                dangerouslySetInnerHTML={{ __html: data[1].title.rendered }}
              />
              <Links
                /*                to="/blog" */
                dangerouslySetInnerHTML={{ __html: data[1].excerpt.rendered }}
                onClick={() => handleClick(data[1].id)}
              />
            </Cards>
          );
        })}
      <ButtonCont>
        <Button
          onClick={() => {
            setNext(0);
            setStop(6);
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            setNext(6);
            setStop(9);
          }}
        >
          Next
        </Button>
      </ButtonCont>
      <Footer>
        <Copyright>Copyright 2021</Copyright>
      </Footer>
    </Container>
  );
}
