import Button from "@/components/Button";
import styled from "styled-components";

const Container = styled.div({
  display: "grid",
  alignItems: "center",
  justifyItems: "flex-start",
  padding: 40,
  gap: 80
});

const Text = styled.p({
  marginBottom: "1.5em"
});

const App = (): JSX.Element => {
  return (
    <Container>
      <h1>Button component</h1>
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
    </Container>
  );
};

export default App;
