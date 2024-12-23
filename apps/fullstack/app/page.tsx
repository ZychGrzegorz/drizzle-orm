"use client";
import Link from "next/link";
import SimpleModal from "@repo/ui/components/simple-modal";
import { Button } from "@repo/ui/components/ui/button";
import { api } from "~/utils/trpc";

export default function Page() {
  const { data } = api.general.main.useQuery({name: 'test'});

  console.log(data);
  return (
    <main>
      <Button>Click me</Button>
      <SimpleModal />
      <span>main page</span>
      <nav>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
