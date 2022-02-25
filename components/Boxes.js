import { Grid, Center, ActionIcon } from "@mantine/core";
import { useSetState } from "@mantine/hooks";

export default function Boxes() {
  const [colorState, setColorState] = useSetState({
    color: "gray",
  });

  const boxes = [
    { id: 1, color: "gray" },
    { id: 2, color: "gray" },
    { id: 3, color: "gray" },
    { id: 4, color: "gray" },
    { id: 5, color: "gray" },
    { id: 6, color: "gray" },
    { id: 7, color: "gray" },
    { id: 8, color: "gray" },
    { id: 9, color: "gray" },
    { id: 10, color: "gray" },
    { id: 11, color: "gray" },
    { id: 12, color: "gray" },
    { id: 13, color: "gray" },
    { id: 14, color: "gray" },
    { id: 15, color: "gray" },
    { id: 16, color: "gray" },
    { id: 17, color: "gray" },
    { id: 18, color: "gray" },
    { id: 19, color: "gray" },
    { id: 20, color: "gray" },
    { id: 21, color: "gray" },
    { id: 22, color: "gray" },
    { id: 23, color: "gray" },
    { id: 24, color: "gray" },
    { id: 25, color: "gray" },
    { id: 26, color: "gray" },
    { id: 27, color: "gray" },
    { id: 28, color: "gray" },
    { id: 29, color: "gray" },
    { id: 30, color: "gray" },
  ];

  const changeColor = () => {
    if (colorState.color === "gray") {
      setColorState({ color: "yellow" });
    } else if (colorState.color === "yellow") {
      setColorState({ color: "green" });
    } else {
      setColorState({ color: "gray" });
    }
  };

  return (
    <Center style={{ width: 450, height: 550 }}>
      <Grid columns={5}>
        {/* <Grid.Col span={1}>
          <ActionIcon
            size="80px"
            radius="5px"
            variant="filled"
            color={state.color}
            onClick={() => changeColor()}
          ></ActionIcon>
        </Grid.Col> */}
        {boxes.map((box) => (
          <Grid.Col span={1} key={box.id}>
            <ActionIcon
              size="80px"
              radius="5px"
              variant="filled"
              color={colorState.color}
              onClick={() => changeColor(box.id)}
            ></ActionIcon>
          </Grid.Col>
        ))}
      </Grid>
    </Center>
  );
}
