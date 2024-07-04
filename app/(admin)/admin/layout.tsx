import AdminSidebar from "@/components/admin/sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row">
      <nav className="w-[280px] h-screen ">
        <AdminSidebar />
      </nav>

      {children}
    </section>
  );
}
