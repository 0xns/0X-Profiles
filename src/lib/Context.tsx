import React, { createContext, useContext, useState } from "react";

interface LinkProps {
  n: string; //Name
  i: string; // image
  a: string; //About
  bg: string; //Background
  fb: string; //facebook
  ig: string; //instagram
  tg: string; //telegram
  em: string; //email
  tw: string; //twitter
  lk: string; //linkedin
  yt: string; //youtube
  gt: string; //github
  wh: string; //whatsup
  ls: AdditionalLinkProps[]; // Additional Forms
}
const initialData: LinkProps = {
  n: "", //Name
  i: "", // image
  a: "", //About
  bg: "", //Background
  fb: "", //facebook
  ig: "", //instagram
  tg: "", //telegram
  em: "", //email
  tw: "", //twitter
  lk: "", //linkedin
  yt: "", //youtube
  gt: "", //github
  wh: "", //whatsup
  ls: [], //Additional Forms
};
interface DataContextType {
  // Todo: fix type props
  data: string;
  MyLink: LinkProps;
  addNewData: (linkData: AdditionalLinkProps) => void;
  setData: (val: string) => void;
  updateProfileInfo: (name: any, value: any) => void;
  selectBackground: (bgcode: string) => void;
  updateIndex: (updatedIndex: AdditionalLinkProps[]) => void;
  updateAdditionalInfo: (updatedIndex: any) => void;
  showDemo: () => void;
}

const demoData: LinkProps = {
   n: "",
  i: "",
  a: "",
  fb: "",
  tw: "",
  ig: "",
  tg: "",
  gt: "",
  lk: "",
  em: "",
  wh: "",
  yt: "",
  bg: "",
  ls: [
    {
      id: 1,
      i: "",
      l: "",
      u: "",
    },
    {
      id: 2,
      i: "",
      l: "",
      u: "",
    },
    {
      id: 3,
      i: "",
      l: "",
      u: "",
    },
    {
      id: 4,
      i: "",
      l: "",
      u: "",
    },
    {
      id: 5,
      i: "",
      l: "",
      u: "",
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<string>("");
  const [MyLink, setMyLink] = useState<LinkProps>(initialData);

  // UPDATE PERSONAL INFORMATION
  const updateProfileInfo = (name: any, value: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // SELECT BACKGROUND FUNCTION
  const selectBackground = (bgcode: string) => {
    setMyLink((prevState) => ({
      ...prevState,
      bg: bgcode,
    }));
  };
  // ADDITIONAL INFO FUNCTIONS
  const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const updateAdditionalInfo = (updatedIndex: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const addNewData = (linkData: AdditionalLinkProps) => {
    setMyLink((prevData) => ({
      ...prevData,
      ls: [...prevData.ls, linkData],
    }));
  };
  // SHOW DEMO FUNCTION
  const showDemo = () => {
  
    setMyLink(demoData);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        addNewData,
        setData,
        showDemo,
        MyLink,
        updateProfileInfo,
        updateIndex,
        selectBackground,
        updateAdditionalInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
