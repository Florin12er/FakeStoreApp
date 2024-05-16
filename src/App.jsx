import { useState } from "react";
import {
  Checkbox,
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";

function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <h1 className="text-3xl">CheckBox</h1>
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group ml-14 block size-8 border-black rounded border bg-white data-[checked]:bg-blue-600"
      >
        {/* Checkmark icon */}
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <h1 className="text-3xl">Button</h1>
      <Button className=" rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
        Press me!
      </Button>
      <TabGroup>
        <TabList>
          <Tab className="rounded-2xl border-black px-4 py-2 bg-sky-600 text-sm text-white mr-2 data-[hover]:bg-sky-500 data-[active]:bg-sky-600">
            Tab 1
          </Tab>
          <Tab className="rounded-2xl border-black px-4 py-2 bg-sky-600 text-sm text-white mr-2 data-[hover]:bg-sky-500 data-[active]:bg-sky-600">
            Tab 2
          </Tab>
          <Tab className="rounded-2xl border-black px-4 py-2 bg-sky-600 text-sm text-white mt-4 data-[hover]:bg-sky-500 data-[active]:bg-sky-600">
            Tab 3
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div>
              <button>hello</button>
              <h2 className="text-3xl">hello</h2>
            </div>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default App;
