import type { JSX } from "react";
import styled from "styled-components";

const LandingPage = function (): JSX.Element {
  // Styled components
  const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    font-family: Arial, sans-serif;
  `;

  const Header = styled.header`
    background-color: #fff;
    padding: 10px 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    h1 {
      color: #4a90e2;
    }
  `;

  const Main = styled.main`
    flex: 1;
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `;

  const Footer = styled.footer`
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
    color: #666;
  `;

  return (
    <Page>
      <Header>
        <h1>Welcome to React COE</h1>
      </Header>
      <Main>
        <p>
          This is the home page of your Center of Excellence for React
          development. Dive into our resources and community!
        </p>
      </Main>
      <Footer>
        © {new Date().getFullYear()} React COE. All rights reserved.
      </Footer>
    </Page>
  );
};

export default LandingPage;
