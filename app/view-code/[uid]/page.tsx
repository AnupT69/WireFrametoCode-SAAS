"use client";
import AppHeader from "@/app/_components/AppHeader";
import Constants from "@/data/Constants";
import axios from "axios";
import { Loader2Icon, LoaderCircle } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface RECORD {
  id: number;
  description: string;
  code: any;
  imageUrl: string;
  model: string;
  createdBy: string;
}
function ViewCode() {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [codeResponse, setCodeResponse] = useState("");
  const [record, setRecord] = useState<RECORD>();

  useEffect(() => {
    uid && GetRecordIno();
  }, [uid]);
  const GetRecordIno = async () => {
    setLoading(true);
    const result = await axios.get("/api/wireframe-to-code?uid=" + uid);
    console.log(result.data);
    const resp = result?.data;
    setRecord(result?.data);
    if (resp?.code == null) {
      // GenerateCode(resp);
    }
    if (resp?.error) {
      console.log("No Record found");
    }

    setLoading(false);
  };
  const GenerateCode = async (resp: RECORD) => {
    setLoading(true);
    const res = await fetch("/api/ai-model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: resp.description + ":" + Constants.PROMPT,
        model: resp.model,
        imageUrl: resp.imageUrl,
      }),
    });
    if (!res.body) return;
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const text = decoder
        .decode(value)
        .replace("```typescript", "")
        .replace("```", "");
      setCodeResponse((prev) => prev + text);
      console.log(text);
    }

    setLoading(false);
  };
  return (
    <div>
      <AppHeader hideSideBar={true} />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5">
        <div>
          {/* Selection Details */}
          {/* <SelectionDetails record={record} /> */}
        </div>
        <div className="col-span-4">
          {" "}
          {/* Code editor */}
          {/* <CodeEditor /> */}
        </div>
      </div>
    </div>
  );
}
export default ViewCode;
