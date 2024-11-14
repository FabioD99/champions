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
    <section className="flex flex-col items-center justify-center gap-6 md:py-2">
  
    <div className="flex flex-row gap-6 min-w-max">
      <div className=" flex-row gap-6 min-w-max">
      <h1 className="text-center">POTE 1</h1>
      <TablePotes potes="pote1" />
      </div>
      <div className=" flex-row gap-6 min-w-max">
      <h1 className="text-center">POTE 2</h1>
      <TablePotes potes="pote2" />
      </div>
      <div className=" flex-row gap-6 min-w-max">
      <h1 className="text-center">POTE 3</h1>
      <TablePotes potes="pote3" />
      </div>
      <div className=" flex-row gap-6 min-w-max">
      <h1 className="text-center">POTE 4</h1>
      <TablePotes potes="pote4" />
      </div>
    </div> 
      <Table />
    </section>
  );
}
