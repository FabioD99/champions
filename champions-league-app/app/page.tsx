import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Table from "@/components/table"
import TablePotes from "@/components/tablePotes"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="flex flex-row gap-6 min-w-max">
      <TablePotes potes="pote1" />
      <TablePotes potes="pote2" />
      <TablePotes potes="pote3" />
      <TablePotes potes="pote4" />
    </div> 
      <Table />
    </section>
  );
}
