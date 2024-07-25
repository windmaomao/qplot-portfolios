import { Books } from "./books";

import { title } from "@/components/primitives";

export default function BookCollectionPage() {
  return (
    <div>
      <h1 className={title()}>Book collection</h1>
      <Books />
    </div>
  );
}
