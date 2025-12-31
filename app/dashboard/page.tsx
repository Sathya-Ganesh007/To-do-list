import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TasksList } from "@/components/dashboard-ui/tasks-list";
import { Suspense } from "react";
import { ListTodo } from "lucide-react";

async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return data.claims as { email?: string } | null;
}

async function TasksHeader() {
  const user = await getUser();
  const email = user?.email ?? "User";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <ListTodo className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Tasks</h1>
          <p className="text-sm text-muted-foreground">
            Manage and organize your tasks
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TasksPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-8">
      <Suspense
        fallback={
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <ListTodo className="h-6 w-6 text-primary" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">My Tasks</h1>
                <p className="text-sm text-muted-foreground">Loading...</p>
              </div>
            </div>
          </div>
        }
      >
        <TasksHeader />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-sm text-muted-foreground">Loading tasks...</div>
        }
      >
        <TasksList />
      </Suspense>
    </div>
  );
}
