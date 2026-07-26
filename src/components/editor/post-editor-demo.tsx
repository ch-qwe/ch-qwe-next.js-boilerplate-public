"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

import { MarkdownView } from "./markdown-view"
import { PostEditor } from "./post-editor"

const SAMPLE = `# 마크다운 + 블록 에디터 데모

\`/\` 를 입력하면 슬래시 메뉴가 열려요. 위/아래 화살표로 이동하고 **Enter** 로 선택하세요.

## 지원 기능

- **굵게**, *기울임*, ~~취소선~~, \`인라인 코드\`
- 1, 2, 3 순서가 매겨지는 목록
- 인용, 코드 블록, 링크, 이미지

> 블록 에디터에서 작성한 내용은 마크다운 탭에서도 그대로 편집할 수 있어요.

\`\`\`ts
function hello(name: string) {
  return \`Hello, \${name}!\`
}
\`\`\`

| 컬럼 A | 컬럼 B |
| --- | --- |
| 셀 1 | 셀 2 |

- [x] GFM 체크박스
- [ ] 표/취소선/자동 링크
`

export function PostEditorDemo() {
  const [value, setValue] = React.useState(SAMPLE)
  const [showRaw, setShowRaw] = React.useState(false)

  return (
    <div className="space-y-4">
      <PostEditor
        value={value}
        onChange={setValue}
        placeholder="여기에 입력하거나 / 를 눌러 명령을 검색하세요"
      />

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowRaw((s) => !s)}
        >
          {showRaw ? "원본 마크다운 숨기기" : "원본 마크다운 보기"}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setValue(SAMPLE)}
        >
          샘플로 초기화
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setValue("")}>
          비우기
        </Button>
      </div>

      {showRaw && (
        <pre className="overflow-x-auto rounded-md border border-border bg-muted/30 p-3 text-xs leading-relaxed font-mono">
          {value || "(비어있음)"}
        </pre>
      )}

      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground">
          최종 표시 (MarkdownView)
        </h3>
        <MarkdownView
          source={value}
          size="sm"
          variant="boxed"
          emptyFallback={
            <p className="text-sm text-muted-foreground">
              내용이 비어있어요. 위 에디터에 작성하면 여기에 표시됩니다.
            </p>
          }
        />
      </div>
    </div>
  )
}
