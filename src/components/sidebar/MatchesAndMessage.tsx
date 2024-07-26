"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

const MatchesAndMessage = () => {
  const [activeTab, setActiveTab] = useState("matches");

  const handleTabSwitch = (value: "matches" | "messages") => {
    setActiveTab(value);
  };
  return (
    <Tabs defaultValue="matches" className="max-w-[400px]">
      <TabsList className="grid grid-cols-2 bg-transparent mt-2 rounded-none w-[200px] mx-auto">
        <TabsTrigger
          value="matches"
          onClick={() => handleTabSwitch("matches")}
          className={`border-b-2 border-b-transparent text-base ${
            activeTab === "matches" && "rounded-none border-b-2 border-primary"
          }`}
        >
          Matches
        </TabsTrigger>
        <TabsTrigger
          value="messages"
          onClick={() => handleTabSwitch("messages")}
          className={`border-b-2 border-b-transparent text-base ${
            activeTab === "messages" && "rounded-none border-b-2 border-primary"
          }`}
        >
          Messages
        </TabsTrigger>
      </TabsList>
      <TabsContent value="matches">
        <div className="max-w-[300px] w-[80%] mx-auto text-center flex flex-col gap-5">
          <Image src="/love.png" alt="" width={300} height={300} />
          <p className="text-xl font-medium">Start Matching</p>
          <p>
            contrary to popular belief Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero hic velit, omnis quo sunt nihil? Sint
            perferendis asperiores qui quidem?
          </p>
        </div>
      </TabsContent>
      <TabsContent value="messages">
        <div className="text-center mt-5"> No Messages</div>
      </TabsContent>
    </Tabs>
  );
};

export default MatchesAndMessage;
