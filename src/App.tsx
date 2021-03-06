import Button from "@/components/Button";
import { styled } from "@stitches/react";
import globalStyles from "./theme/globalStyles";

const Container = styled("div", {
  display: "grid",
  alignItems: "center",
  justifyItems: "flex-start",
  padding: 40,
  gap: 80
});

const Column = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: 80
});

const Footer = styled("div", {
  justifySelf: "stretch",
  padding: "20px 0",
  borderTop: "1px solid $gray_medium"
});

const Text = styled("p", {
  marginBottom: "1em",
  fontSize: "14px",
  color: "$gray_dark"
});

const SmallText = styled("p", {
  fontSize: "12px",
  color: "$gray_dark",
  textAlign: "center",

  a: {
    color: "$primary"
  }
});

const App = (): JSX.Element => {
  globalStyles();

  return (
    <>
      <Container>
        <h1>Button component</h1>
        <Column>
          <div>
            <Text>&lt;Button /&gt;</Text>
            <Button color="primary">Button</Button>
          </div>
          <div>
            <Text>{'<Button variant="outline" />'}</Text>
            <Button variant="outline" color="primary">
              Button
            </Button>
          </div>
          <div>
            <Text>{'<Button variant="text" />'}</Text>
            <Button variant="text" color="primary">
              Button
            </Button>
          </div>
        </Column>
        <div>
          <Text>{"<Button disableShadow />"}</Text>
          <Button disableShadow>Button</Button>
        </div>
        <div>
          <Text>{"<Button disabled />"}</Text>
          <Button disabled>Button</Button>
        </div>
        <Column>
          <div>
            <Text>{'<Button startIcon="anchor" />'}</Text>
            <Button startIcon="anchor" color="primary">
              Button
            </Button>
          </div>
          <div>
            <Text>{'<Button endIcon="rocket" />'}</Text>
            <Button endIcon="rocket" color="danger">
              Button
            </Button>
          </div>
        </Column>

        <Column>
          <div>
            <Text>{'<Button size="sm" />'}</Text>
            <Button size="sm" color="primary">
              Button
            </Button>
          </div>
          <div>
            <Text>{'<Button size="md" />'}</Text>
            <Button size="md" color="primary">
              Button
            </Button>
          </div>
          <div>
            <Text>{'<Button size="lg" />'}</Text>
            <Button size="lg" color="primary">
              Button
            </Button>
          </div>
        </Column>
        <Column>
          <div>
            <Text>{'<Button color="default" />'}</Text>
            <Button color="default">Button</Button>
          </div>
          <div>
            <Text>{'<Button color="primary" />'}</Text>
            <Button color="primary">Button</Button>
          </div>
          <div>
            <Text>{'<Button color="secondary" />'}</Text>
            <Button color="secondary">Button</Button>
          </div>
          <div>
            <Text>{'<Button color="danger" />'}</Text>
            <Button color="danger">Button</Button>
          </div>
        </Column>
      </Container>
      <Footer>
        <SmallText>
          Button Component done by <a href="driera">driera</a>,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            CC-by-SA 4.0
          </a>
        </SmallText>
      </Footer>
    </>
  );
};

export default App;
