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

const Text = styled("p", {
  marginBottom: "1.5em"
});

const App = (): JSX.Element => {
  globalStyles();

  return (
    <Container>
      <h1>Button component</h1>
      <Column>
        <div>
          <Text>&lt;Button /&gt;</Text>
          <Button />
        </div>
        <div>
          <Text>{'<Button variant="outline" />'}</Text>
          <Button variant="outline" />
        </div>
        <div>
          <Text>{'<Button variant="text" />'}</Text>
          <Button variant="text" />
        </div>
      </Column>
      <div>
        <Text>{"<Button disableShadow />"}</Text>
        <Button disableShadow />
      </div>
      <div>
        <Text>{"<Button disabled />"}</Text>
        <Button disabled />
      </div>
      <Column>
        <div>
          <Text>{'<Button startIcon="anchor" />'}</Text>
          <Button startIcon="anchor" />
        </div>
        <div>
          <Text>{'<Button endIcon="rocket" />'}</Text>
          <Button endIcon="rocket" />
        </div>
      </Column>
    </Container>
  );
};

export default App;
