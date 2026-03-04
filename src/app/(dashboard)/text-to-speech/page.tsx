import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";
import type { Metadata } from "next";

// !可以设置页面tab 的 title
export const metadata: Metadata = {
  title: "Text to Speech",
};
export default function TextToSpeechPage() {
  return <TextToSpeechView />;
}
