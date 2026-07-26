import type { MetadataRoute } from "next";

/**
 * PWA 매니페스트 — iOS에서 웹 푸시를 받으려면 홈 화면에 추가(standalone)가 선행돼야 한다.
 * 아이콘(192/512 PNG)을 추가하면 icons 배열에 등록할 것.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My App",
    short_name: "My App",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
