"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { ImageUp, WandSparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ImageUpload() {
  const AiModelList = [
    {
      name: "Gemini Google",
      icon: "/google.png",
    },
    {
      name: "llama By Meta",
      icon: "/meta-logo.png",
    },
    {
      name: "DeepSeek",
      icon: "/deepseek.png",
    },
  ];
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Image Upload */}
        <div className="border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-6 shadow-md bg-white dark:bg-neutral-900">
          {!previewUrl ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ImageUp className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold mt-3">Upload Wireframe</h2>
              <p className="text-gray-500 dark:text-neutral-400 mt-2">
                Choose an image file that represents your design wireframe.
              </p>

              <label
                htmlFor="imageSelect"
                className="mt-6 inline-block px-5 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/90 transition"
              >
                Select Image
              </label>

              <input
                type="file"
                id="imageSelect"
                onChange={onImageSelect}
                className="hidden"
              />
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setPreviewUrl(null)}
                className="absolute top-2 right-2 z-10 bg-white dark:bg-black p-1 rounded-full shadow hover:bg-red-500 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
              <Image
                src={previewUrl}
                alt="Preview"
                width={600}
                height={400}
                className="rounded-lg w-full max-h-[350px] object-contain border"
              />
            </div>
          )}
        </div>

        {/* Right side: Input + Model */}
        <div className="border rounded-xl p-6 shadow-md bg-white dark:bg-neutral-900">
          <h2 className="text-xl font-semibold mb-4">AI Model & Description</h2>

          <div className="mb-4">
            <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">
              Choose AI Model
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select AI Model" />
              </SelectTrigger>
              <SelectContent>
                {AiModelList.map((model, index) => (
                  <SelectItem value={model.name} key={index}>
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        src={model.icon}
                        alt={model.icon}
                        width={25}
                        height={25}
                      />

                      <h2>{model.name}</h2>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">
              Description of Web Page
            </label>
            <Textarea
              placeholder="Describe what your webpage should look like..."
              className="h-40 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Convert Button */}
      <div className="mt-10 flex justify-center">
        <Button className="px-6 py-3 text-md gap-2">
          <WandSparkles className="w-5 h-5" />
          Convert to Code
        </Button>
      </div>
    </section>
  );
}
