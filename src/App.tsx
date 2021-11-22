import Button from "@/components/Button";
import { CSSProperties } from "react";

const App = (): JSX.Element => {
  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: "grid",
      alignItems: "center",
      justifyItems: "flex-start",
      padding: 40,
      gap: 10
    }
  };
  return (
    <div style={styles.container}>
      <h1>Button component</h1>
      <p>&lt;Button /&gt;</p>
      <Button />
    </div>
  );
};

export default App;
