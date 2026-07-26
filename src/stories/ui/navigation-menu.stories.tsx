import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta = {
  title: "ui/NavigationMenu",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-2 md:w-64">
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">소개</div>
                  <p className="text-muted-foreground">
                    제품의 기능을 소개합니다.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">설치</div>
                  <p className="text-muted-foreground">
                    빠르게 시작하는 방법을 안내합니다.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">튜토리얼</div>
                  <p className="text-muted-foreground">
                    단계별 튜토리얼로 배워보세요.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>컴포넌트</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-1 p-2 md:w-80">
              <li>
                <NavigationMenuLink href="#">버튼</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">입력</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">모달</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">테이블</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">폼</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">탭</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            문서
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            블로그
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
            data-active
          >
            홈
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            소개
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            서비스
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            연락처
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
