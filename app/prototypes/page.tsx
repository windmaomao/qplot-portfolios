import Link from "next/link";

import { title } from "@/components/primitives";

export default function PrototypesPage() {
  return (
    <div>
      <h1 className={title()}>Prototypes</h1>
      <ul>
        <li>
          <Link href="/prototypes/book-collection">Book collection</Link>
        </li>
        <li>
          <Link href="/prototypes/material-widget">Material widget</Link>
        </li>
      </ul>
    </div>
  );
}
