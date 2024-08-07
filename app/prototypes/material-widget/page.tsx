import Button from "./Button";

import { title } from "@/components/primitives";

export default function MaterialWidget() {
  return (
    <div>
      <h1 className={title()}>Material widgets</h1>
      <div className="pt-4">
        <Button />
      </div>
    </div>
  );
}
