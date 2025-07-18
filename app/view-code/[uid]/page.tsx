"use client";
import Constants from "@/data/Constants";
import axios from "axios";
import { Loader2Icon, LoaderCircle } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface RECORD {
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
  const [codeResponse, setCodeResponse] = useState('');

  useEffect(() => {
    uid && GetRecordIno();
  }, [uid]);
  const GetRecordIno = async () => {
    setLoading(true);
    const result = await axios.get("/api/wireframe-to-code?uid=" + uid);
    console.log(result.data);
    const resp = result?.data;
    if (resp?.code == null) {
      GenerateCode(resp);
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
        description: resp.description+":"+Constants.PROMPT,
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
      const text = decoder.decode(value).replace('```typescript', '').replace('```', '');
      setCodeResponse((prev) => prev + text);
      console.log(text);
    }

    setLoading(false);
  };
  return (
    <>
      <div>ViewCode</div>
      <span>
        {loading ? <LoaderCircle className="animate-spin" /> : <h2>Done</h2>}
      </span>
      <p>{codeResponse}</p>
    </>
  );
}
export default ViewCode;
