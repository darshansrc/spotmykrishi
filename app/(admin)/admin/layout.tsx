import AdminSidebar from "@/components/admin/sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row">
      <nav className="w-[250px] h-screen fixed left-0 top-0 hidden md:block ">
        <AdminSidebar />
      </nav>

      <div className="md:pl-[250px]">{children}</div>
    </section>
  );
}
