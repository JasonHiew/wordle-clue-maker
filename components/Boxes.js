import { useState } from "react";
import {
  Grid,
  Center,
  ActionIcon,
  Button,
  Popover,
  Image,
  Text,
} from "@mantine/core";
import { useListState, randomId, useClipboard } from "@mantine/hooks";

export default function Boxes() {
  const initialValues = [
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
    { key: randomId(), color: "gray" },
  ];

  const [values, handlers] = useListState(initialValues);
  const [opened, setOpened] = useState(false);

  const clipboard = useClipboard({ timeout: 1000 });

  function showValues() {
    let string = "";
    //map values to show color only
    const items = values.map((value, index) => {
      if (index % 5 === 0) {
        string += "\n";
      }
      if (value.color === "gray") {
        string += "⬛";
      }
      if (value.color === "yellow") {
        string += "🟨";
      }
      if (value.color === "green") {
        string += "🟩";
      }
    });
    setOpened(true);
    clipboard.copy(string);
    console.log(string);
  }

  return (
    <Center sx={{ width: 350, height: 600, marginLeft: 15}}>
      <Grid columns={5} >
        {values.map((box, index) => (
          <Grid.Col span={1} key={box.key}>
            <ActionIcon
              size="65px"
              radius="5px"
              variant="filled"
              color={box.color}
              onClick={(event) =>
                handlers.setItemProp(
                  index,
                  "color",
                  box.color == "gray" ? "yellow"
                    : box.color == "yellow"
                    ? "green" : "gray"
                )
              }
            ></ActionIcon>
          </Grid.Col>
        ))}
        <Grid.Col span={5}>
          <Center>
            <Popover
              opened={opened}
              onClose={() => setOpened(false)}
              target={
                <Button
                  size="xl"
                  color={clipboard.copied ? "teal" : "blue"}
                  onClick={showValues}
                >
                  {clipboard.copied ? "Copied" : "Copy"}
                </Button>
              }
              width={200}
              withArrow
              position="left"
              radius="md"
              shadow="md"
              gutter={15}
            >
              <div style={{ display: "flex" }}>
                <Text size="sm">Now paste it on Discord or wherever!</Text>
              </div>
            </Popover>
          </Center>
        </Grid.Col>
      </Grid>
    </Center>
  );
}
