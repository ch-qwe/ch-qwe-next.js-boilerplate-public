import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const meta: Meta<typeof Tabs> = {
  title: "ui/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="mt-2 space-y-2">
          <p className="text-muted-foreground">
            Manage your account details and preferences here. Update your
            display name, email address, and profile picture.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="mt-2 space-y-2">
          <p className="text-muted-foreground">
            Change your password here. After saving, you'll be logged out and
            prompted to sign in again.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="mt-2 space-y-2">
          <p className="text-muted-foreground">
            Configure application settings, notifications, and privacy
            preferences from this panel.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="mt-4 text-muted-foreground">
          Overview content: high-level summary of your data and metrics.
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="mt-4 text-muted-foreground">
          Analytics content: detailed charts and trend analysis.
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="mt-4 text-muted-foreground">
          Reports content: exportable reports and data tables.
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="profile" orientation="vertical" className="w-[28rem]">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <p className="text-muted-foreground">
          Profile settings: update your personal information and avatar.
        </p>
      </TabsContent>
      <TabsContent value="billing">
        <p className="text-muted-foreground">
          Billing settings: manage your subscription plan and payment methods.
        </p>
      </TabsContent>
      <TabsContent value="team">
        <p className="text-muted-foreground">
          Team settings: invite members and manage roles and permissions.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2">Available</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="mt-2 text-muted-foreground">
          This is the first active tab content.
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="mt-2 text-muted-foreground">
          This is the second tab content.
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="mt-2 text-muted-foreground">
          This content is unreachable because the tab is disabled.
        </div>
      </TabsContent>
    </Tabs>
  ),
}
