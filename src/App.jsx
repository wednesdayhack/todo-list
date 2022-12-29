import { Typography, Card, Input, Button, Form } from "antd";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ListComplete from "./components/ListComplete";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [complete, setComplete] = useState([]);
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);
  console.log();
  const submitData = (e) => {
    console.log(name);
    if (!name) {
    } else if (checkEditItem && name) {
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(result);
      setName("");
      setCheckEditItem(false);
      setEditId(null);
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
  };
  const editItem = (id) => {
    setCheckEditItem(true);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };
  const completeItem = (id) => {
    const completeResult = list.filter((item) => item.id === id);
    setComplete([...complete, ...completeResult]);
    removeItem(id);
  };
  const removeUndoItem = (id) => {
    const result = complete.filter((item) => item.id !== id);
    setComplete(result);
  };
  const undoItem = (id) => {
    const undoResult = list.filter((item) => item.id === id);
    setList([...complete, ...undoResult]);
    removeUndoItem(id);
  };

  return (
    <div className="grid justify-items-center text-center p-16">
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Todo List</Typography.Title>
        <div className="flex justify-center">
          <Input
            type="primary"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Button
            onClick={submitData}
            className="m-1 rounded-xl bg-blue-400 font-bold"
          >
            {checkEditItem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
          </Button>
        </div>
      </Card>
      <Card className="w-[600px]  bg-violet-300 ">
        <Typography.Title>List</Typography.Title>
        {list.map((data, index) => {
          return (
            <List
              key={index}
              {...data}
              removeItem={removeItem}
              editItem={editItem}
              completeItem={completeItem}
            />
          );
        })}
      </Card>
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Success</Typography.Title>
        <div className="justify-center">
        {complete.map((data, index) => {
          return <ListComplete key={index} {...data} undoItem={undoItem} />;
        })}
        </div>
      </Card>
    </div>
  );
}

export default App;
